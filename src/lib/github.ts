// Fetches public GitHub data for the "SAVE DATA" section.
// Works without a token (REST API, 60 requests/hour). The contribution heatmap uses the GraphQL API when
// GITHUB_TOKEN is set, and otherwise falls back to reading the public contributions page.

const API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

type ApiUser = {
  login: string;
  html_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
};

type ApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

type CalendarLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

type ApiCalendar = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: CalendarLevel }[] }[];
        };
      };
    } | null;
  };
};

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type RawCalendar = { total: number; weeks: ContributionDay[][] };

export type CalendarSummary = {
  currentStreak: number;
  longestStreak: number;
  bestDay: { date: string; count: number } | null;
  topWeekday: string | null;
};

const WEEKDAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function summarize(weeks: ContributionDay[][]): CalendarSummary {
  const days = weeks.flat();

  let longestStreak = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    longestStreak = Math.max(longestStreak, run);
  }

  // Today might not have a commit yet, so a streak that ended yesterday still counts as current.
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--;
  let currentStreak = 0;
  while (i >= 0 && days[i].count > 0) {
    currentStreak++;
    i--;
  }

  let bestDay: CalendarSummary["bestDay"] = null;
  const byWeekday = new Array(7).fill(0);
  for (const day of days) {
    if (day.count > 0 && (!bestDay || day.count > bestDay.count)) bestDay = { date: day.date, count: day.count };
    byWeekday[new Date(`${day.date}T00:00:00Z`).getUTCDay()] += day.count;
  }
  const top = Math.max(...byWeekday);

  return {
    currentStreak,
    longestStreak,
    bestDay,
    topWeekday: top > 0 ? WEEKDAYS[byWeekday.indexOf(top)] : null,
  };
}

// Repo descriptions like "none" or "ayo" read as noise on the page, so only show real sentences.
function usefulDescription(description: string | null) {
  const text = description?.trim() ?? "";
  return text.length >= 12 ? text : "";
}

export type GitHubStats = {
  login: string;
  profileUrl: string;
  repos: number;
  followers: number;
  stars: number;
  since: number;
  languages: { name: string; percent: number }[];
  recent: { name: string; url: string; description: string; language: string | null; stars: number; pushedAt: string }[];
  calendar: (RawCalendar & { summary: CalendarSummary }) | null;
};

const LEVELS: Record<CalendarLevel, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function headers(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { headers: headers(), next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

async function getCalendar(login: string): Promise<GitHubStats["calendar"]> {
  let raw: RawCalendar | null = null;
  if (process.env.GITHUB_TOKEN) {
    try {
      raw = await getCalendarFromApi(login);
    } catch (err) {
      console.warn("[github] GraphQL calendar failed, trying public page:", err);
    }
  }
  raw ??= await getCalendarFromPage(login);
  return raw ? { ...raw, summary: summarize(raw.weeks) } : null;
}

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
}

// Unofficial fallback: the same HTML fragment github.com uses to draw the graph on profile pages.
async function getCalendarFromPage(login: string): Promise<RawCalendar | null> {
  const res = await fetch(`https://github.com/users/${login}/contributions`, {
    headers: { "User-Agent": "Mozilla/5.0 (portfolio contribution graph)" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`GitHub contributions page ${res.status}`);
  const html = await res.text();

  // Tooltips carry the counts: "5 contributions on May 3rd." / "No contributions on ...".
  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const n = m[2].match(/^([\d,]+) contribution/);
    counts.set(m[1], n ? Number(n[1].replace(/,/g, "")) : 0);
  }

  const days: ContributionDay[] = [];
  for (const m of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/g)) {
    const tag = m[0];
    const date = attr(tag, "data-date");
    const level = Number(attr(tag, "data-level") ?? 0);
    if (!date) continue;
    const id = attr(tag, "id");
    days.push({
      date,
      count: id ? (counts.get(id) ?? 0) : 0,
      level: Math.min(4, Math.max(0, level)) as ContributionDay["level"],
    });
  }
  if (days.length === 0) return null;

  // The page lays days out by weekday rows; regroup them into Sunday-first week columns.
  days.sort((a, b) => a.date.localeCompare(b.date));
  const weeks: ContributionDay[][] = [];
  for (const day of days) {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    if (weeks.length === 0 || weekday === 0) weeks.push([]);
    weeks[weeks.length - 1].push(day);
  }

  const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in the last year/);
  const total = totalMatch ? Number(totalMatch[1].replace(/,/g, "")) : days.reduce((sum, d) => sum + d.count, 0);

  return { total, weeks };
}

async function getCalendarFromApi(login: string): Promise<RawCalendar | null> {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`;
  const res = await fetch(`${API}/graphql`, {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login } }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}`);
  const json = (await res.json()) as ApiCalendar;
  const cal = json.data?.user?.contributionsCollection.contributionCalendar;
  if (!cal) return null;
  return {
    total: cal.totalContributions,
    weeks: cal.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] })),
    ),
  };
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const [user, repos] = await Promise.all([
      getJson<ApiUser>(`/users/${username}`),
      getJson<ApiRepo[]>(`/users/${username}/repos?per_page=100&sort=pushed`),
    ]);

    const own = repos.filter((r) => !r.fork);

    const languageCounts = new Map<string, number>();
    for (const repo of own) {
      if (repo.language) languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
    }
    const languageTotal = [...languageCounts.values()].reduce((a, b) => a + b, 0);
    const languages = [...languageCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, percent: Math.round((count / languageTotal) * 100) }));

    const recent = own
      .filter((r) => !r.archived && r.name.toLowerCase() !== user.login.toLowerCase())
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        description: usefulDescription(r.description),
        language: r.language,
        stars: r.stargazers_count,
        pushedAt: r.pushed_at,
      }));

    let calendar: GitHubStats["calendar"] = null;
    try {
      calendar = await getCalendar(user.login);
    } catch (err) {
      console.warn("[github] contribution calendar unavailable:", err);
    }

    return {
      login: user.login,
      profileUrl: user.html_url,
      repos: user.public_repos,
      followers: user.followers,
      stars: own.reduce((sum, r) => sum + r.stargazers_count, 0),
      since: new Date(user.created_at).getFullYear(),
      languages,
      recent,
      calendar,
    };
  } catch (err) {
    console.warn("[github] stats unavailable:", err);
    return null;
  }
}
