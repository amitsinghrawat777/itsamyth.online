import type { CSSProperties } from "react";
import { github } from "@/data/portfolio";
import { getGitHubStats, type ContributionDay, type GitHubStats as Stats } from "@/lib/github";
import { Arrow, linkProps, SectionHead } from "./ui";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function utc(iso: string) {
  return new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso);
}

function monthYear(iso: string) {
  const d = utc(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function dayMonth(iso: string) {
  const d = utc(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "S"}`;
}

// 16×16 pixel glyphs for the stat tiles, drawn in the current text colour.
const GLYPHS = {
  repo: "M2 2h9v1h1v1h1v1h1v9H2z M4 6h8v1H4z M4 8h8v1H4z M4 10h5v1H4z",
  star: "M7 1h2v3H7z M1 5h14v1H1z M2 6h12v1H2z M3 7h10v1H3z M4 8h8v2H4z M3 10h4v1H3z M9 10h4v1H9z M2 11h4v1H2z M10 11h4v1h-4z M2 12h3v1H2z M11 12h3v1h-3z M6 4h4v1H6z",
  people: "M3 2h4v4H3z M2 7h6v6H2z M9 2h4v4H9z M8 7h6v6H8z",
  calendar: "M1 3h14v3H1z M1 6h1v8H1z M14 6h1v8h-1z M1 13h14v1H1z M4 1h1v3H4z M11 1h1v3h-1z M4 8h2v2H4z M7 8h2v2H7z M10 8h2v2h-2z M4 11h2v1H4z",
};

function Glyph({ d }: { d: string }) {
  return (
    <svg className="glyph" viewBox="0 0 16 16" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Heatmap({ calendar }: { calendar: NonNullable<Stats["calendar"]> }) {
  const { weeks } = calendar;
  const lastDate = weeks.at(-1)?.at(-1)?.date;

  // Label a column when its month differs from the previous column's, skipping labels that would collide.
  const monthLabels: { col: number; label: string }[] = [];
  weeks.forEach((week, i) => {
    const month = utc(week[0].date).getUTCMonth();
    const prev = i > 0 ? utc(weeks[i - 1][0].date).getUTCMonth() : -1;
    if (month === prev) return;
    const last = monthLabels.at(-1);
    if (last && i - last.col < 3) return;
    if (i > weeks.length - 3) return;
    monthLabels.push({ col: i, label: MONTHS[month] });
  });

  const gridStyle: CSSProperties = { gridTemplateColumns: `auto repeat(${weeks.length}, minmax(0, 1fr))` };

  return (
    <div className="heat-scroll">
      <div className="heat" style={gridStyle} role="img" aria-label={`${calendar.total} contributions in the last year`}>
        {monthLabels.map((m) => (
          <span key={m.col} className="heat-month" style={{ gridColumn: `${m.col + 2} / span 3` }}>
            {m.label}
          </span>
        ))}
        {[
          ["MON", 3],
          ["WED", 5],
          ["FRI", 7],
        ].map(([label, row]) => (
          <span key={label} className="heat-weekday" style={{ gridRow: row }}>
            {label}
          </span>
        ))}
        {weeks.map((week, wi) =>
          week.map((day: ContributionDay) => (
            <i
              key={day.date}
              className={day.date === lastDate ? `cell lv${day.level} today` : `cell lv${day.level}`}
              style={{ gridColumn: wi + 2, gridRow: utc(day.date).getUTCDay() + 2 }}
              title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${dayMonth(day.date)}`}
            />
          )),
        )}
      </div>
    </div>
  );
}

/**
 * The live GitHub section, styled as a handheld console.
 * Renders its own dithered edges; if GitHub can't be reached it falls back to the plain pink → ink divider.
 */
export async function GitHubStats() {
  const stats = await getGitHubStats(github.username);
  if (!stats) return <div className="dith d3" aria-hidden="true" />;

  const tiles = [
    { label: "PUBLIC REPOS", value: stats.repos, glyph: GLYPHS.repo },
    { label: "STARS EARNED", value: stats.stars, glyph: GLYPHS.star },
    { label: "FOLLOWERS", value: stats.followers, glyph: GLYPHS.people },
    { label: "PLAYING SINCE", value: stats.since, glyph: GLYPHS.calendar },
  ];

  const summary = stats.calendar?.summary;
  const combos = summary
    ? [
        { label: "CURRENT STREAK", value: plural(summary.currentStreak, "DAY") },
        { label: "LONGEST STREAK", value: plural(summary.longestStreak, "DAY") },
        {
          label: "BEST DAY",
          value: summary.bestDay ? `${summary.bestDay.count} · ${dayMonth(summary.bestDay.date)}` : "—",
        },
        { label: "MOST ACTIVE ON", value: summary.topWeekday ?? "—" },
      ]
    : [];

  return (
    <>
      <div className="dith d-pink-gb" aria-hidden="true" />
      <section className="sec gb on-dark" id="github">
        <div className="wrap">
          <SectionHead
            kicker="LIVE FEED · GITHUB"
            title="SAVE DATA"
            sub="Pulled straight from GitHub and refreshed every hour. No cheat codes."
          />
          <div className="console">
            <div className="console-top">
              <span>
                <span className="hide-sm">SAVE FILE 01 · </span>@{stats.login}
              </span>
              <span className="led">
                <i aria-hidden="true" /> POWER
              </span>
            </div>

            <div className="screen">
              <dl className="gb-tiles">
                {tiles.map((t) => (
                  <div className="gb-tile" key={t.label}>
                    <dt>{t.label}</dt>
                    <dd>
                      <Glyph d={t.glyph} />
                      {t.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {stats.calendar && summary && (
                <div className="panel">
                  <div className="heat-head">
                    <p className="heat-total">
                      <b>{stats.calendar.total.toLocaleString("en-IN")}</b>
                      <span>CONTRIBUTIONS IN THE LAST YEAR</span>
                    </p>
                    <p className="streak-chip">
                      <span>STREAK</span> {plural(summary.currentStreak, "DAY")}
                    </p>
                  </div>
                  <Heatmap calendar={stats.calendar} />
                  <div className="heat-foot">
                    <span className="heat-hint">Hover a square for the count. The blinking one is today.</span>
                    <span className="heat-swipe">← SWIPE FOR OLDER WEEKS</span>
                    <span className="heat-legend" aria-hidden="true">
                      LESS <i className="cell lv0" />
                      <i className="cell lv1" />
                      <i className="cell lv2" />
                      <i className="cell lv3" />
                      <i className="cell lv4" /> MORE
                    </span>
                  </div>
                </div>
              )}

              <div className="gb-cols">
                <div className="panel">
                  <h3 className="gb-h">TOP LANGUAGES</h3>
                  <ul className="langs">
                    {stats.languages.map((lang) => {
                      const filled = Math.max(1, Math.round(lang.percent / 5));
                      return (
                        <li key={lang.name}>
                          <span className="lang-name">{lang.name}</span>
                          <span className="lang-bar" aria-hidden="true">
                            {Array.from({ length: 20 }, (_, i) => (
                              <i key={i} className={i < filled ? "on" : undefined} />
                            ))}
                          </span>
                          <span className="lang-pct">{lang.percent}%</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="gb-note">Share of my own repos, by main language.</p>
                </div>

                {combos.length > 0 && (
                  <div className="panel">
                    <h3 className="gb-h">COMBO STATS</h3>
                    <dl className="combos">
                      {combos.map((c) => (
                        <div key={c.label}>
                          <dt>{c.label}</dt>
                          <dd>{c.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>

              <div>
                <h3 className="gb-h">RECENTLY SAVED</h3>
                <ul className="saves">
                  {stats.recent.map((repo) => (
                    <li key={repo.name}>
                      <a className="save" {...linkProps(repo.url)}>
                        <span className="save-top">
                          <span className="save-name">{repo.name}</span>
                          <Arrow />
                        </span>
                        {repo.description && <span className="save-desc">{repo.description}</span>}
                        <span className="save-meta">
                          <span className="save-lang">{repo.language ?? "MISC"}</span>
                          <span>
                            <Glyph d={GLYPHS.star} /> {repo.stars}
                          </span>
                          <span>SAVED {monthYear(repo.pushedAt)}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="console-brand" aria-hidden="true">
              GIT BOY <small>PIXEL MATRIX · LIVE DATA</small>
            </p>

            <div className="console-foot">
              <span className="dpad" aria-hidden="true" />
              <a className="console-start" {...linkProps(stats.profileUrl)}>
                <span className="start-pill" aria-hidden="true" />
                START · VIEW FULL PROFILE
              </a>
              <span className="ab" aria-hidden="true">
                <i>B</i>
                <i>A</i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="dith d-gb-ink" aria-hidden="true" />
    </>
  );
}
