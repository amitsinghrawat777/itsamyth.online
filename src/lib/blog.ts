// Markdown blog: one .md file per post in /content/blog, with a small frontmatter block on top:
//
// ---
// title: My post
// date: 2026-10-05
// summary: One or two lines for the cards.
// tags: [Next.js, Design]
// cover: /img/some-image.jpg   (optional)
// draft: true                  (optional — drafts only show in `npm run dev`)
// ---
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  cover?: string;
  draft: boolean;
  readMinutes: number;
  patch: string; // "v0.1" for the first post, counting up
};

export type Post = PostMeta & { html: string };

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function parseList(value?: string) {
  if (!value) return [];
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function readAll(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      const words = body.split(/\s+/).filter(Boolean).length;
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? file,
        date: data.date ?? "1970-01-01",
        summary: data.summary ?? "",
        tags: parseList(data.tags),
        cover: data.cover || undefined,
        draft: data.draft === "true",
        readMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        patch: "",
        html: marked.parse(body, { async: false }),
      };
    })
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Oldest post is v0.1, so numbers never change when new posts are added.
  posts.forEach((post, i) => (post.patch = `v0.${i + 1}`));
  return posts.reverse();
}

export function getAllPosts(): PostMeta[] {
  return readAll().map(({ html: _html, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((post) => post.slug === slug);
}

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function formatDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return { month: MONTHS[m - 1] ?? "", day: String(d).padStart(2, "0"), full: `${MONTHS[m - 1]} ${d}, ${y}` };
}
