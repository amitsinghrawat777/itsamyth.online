// All the site's content lives here. Edit this file to update the portfolio.
import type { CoverArt, IconName } from "./icons";

export const profile = {
  // "Amyth" is the brand used across the site; the real name stays in titles, the fighter plate and the footer.
  handle: "Amyth",
  name: "Amit Rawat",
  nameLines: ["IT'S", "AMYTH"],
  initials: "A",
  role: "Full Stack Developer",
  location: "Dehradun, Uttarakhand",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  guild: "Uttaranchal University",
  levelTag: "B.TECH CS '27",
  email: "rawatamit7ik@gmail.com",
  tagline:
    "Full stack dev from Dehradun who builds the whole thing, front to back, and makes it load stupidly fast. React, Next.js, Node and a suspicious amount of Cloudflare.",
  avatar: {
    src: "/img/pfp.jpg",
    alt: "Amyth's avatar: an orange cat with spiky hair, sunglasses and a Thrasher sweatshirt",
  },
  // Shown in a speech box under the portrait, like a fighting-game win quote.
  quote: "I fixed your layout shift before the page even finished loading.",
  lore:
    "Computer Science student and full stack developer. I build reusable UI in React and Next.js, APIs and real-time features with Node and WebSockets, and push it all to the edge so it loads in a blink. I hunt down Core Web Vitals issues and actually enjoy working with designers and other teams.",
};

export const links = {
  // TODO: replace with your full LinkedIn profile URL
  linkedin: "https://www.linkedin.com/",
  website: "https://itsamyth.online",
  github: "https://github.com/amitsinghrawat777",
  resume: "/amit-rawat-resume.pdf",
};

// Powers the live "SAVE DATA" section. GITHUB_TOKEN in .env.local is optional (see .env.example).
export const github = {
  username: "amitsinghrawat777",
};

export const navItems = [
  // "/#…" so the links also work from the /blog pages.
  { label: "ABOUT", href: "/#about" },
  { label: "SKILLS", href: "/#inventory" },
  { label: "QUESTS", href: "/#quests" },
  { label: "GITHUB", href: "/#github" },
  { label: "XP", href: "/#xp" },
  { label: "BLOG", href: "/#blog" },
  { label: "SAY HI", href: "/#contact" },
];

export const highScores = [
  { rank: "1ST", value: "-50s", label: "cold start delay, gone (Cloudflare Workers)" },
  { rank: "2ND", value: "-70%", label: "image payload size (R2 pipeline)" },
  { rank: "3RD", value: "100+", label: "gym users on Triple A Fitness" },
  { rank: "4TH", value: "-80%", label: "manual attendance tracking" },
  { rank: "5TH", value: "0", label: "layout shift. CLS? deleted." },
];

export type StatColor = "green" | "blue" | "pink" | "yellow";

// Joke stats out of 10. Tweak freely.
export const stats: { label: string; value: number; color: StatColor }[] = [
  { label: "FRONTEND", value: 9, color: "green" },
  { label: "BACKEND", value: 8, color: "blue" },
  { label: "CHAOS", value: 10, color: "pink" },
  { label: "SLEEP SCHEDULE", value: 2, color: "yellow" },
];

// Extra rows on the player card, after CLASS / SPAWN POINT / GUILD.
export const facts = [
  { label: "CURRENT QUEST", text: "Software Engineer Intern @ HPC Infotech" },
  { label: "WEAKNESS", text: "Missing semicolons. Every time." },
];

// Skills written as fighting-game special moves. Arrows are directions, P = punch, K = kick.
export const specialMoves = [
  { name: "EDGE DEPLOY", input: ["↓", "↘", "→", "P"], effect: "Ships the app to the edge. Cold starts deal 0 damage." },
  { name: "LAYOUT LOCK", input: ["→", "↓", "↘", "K"], effect: "Freezes layout shift at 0 CLS. Core Web Vitals go green." },
  { name: "REAL-TIME SYNC", input: ["←", "→", "P", "P"], effect: "WebSockets combo. Every screen updates at once." },
  { name: "FULL STACK SLAM", input: ["↓", "↓", "P", "K"], effect: "UI, API and database in a single move." },
];

export type Skill = {
  name: string;
  icon: IconName;
  blurb: string; // one line shown in the ITEM INFO panel
  equipped?: boolean; // main stack: gets the EQUIPPED badge
  usedIn?: string[]; // projects/jobs where it was used
};

// Each category is shown as one row of 8 slots (2 rows of 4 on phones); empty slots fill the gaps.
export const inventory: { title: string; items: Skill[] }[] = [
  {
    title: "HOTBAR · FRONTEND",
    items: [
      { name: "REACT.JS", icon: "react", equipped: true, usedIn: ["Triple A Fitness"], blurb: "Component-based UI library. My main weapon for building interfaces." },
      { name: "NEXT.JS", icon: "nextjs", equipped: true, usedIn: ["This portfolio"], blurb: "React framework for routing, rendering and SEO. This site runs on it." },
      { name: "TYPESCRIPT", icon: "typescript", equipped: true, blurb: "JavaScript with types. Catches bugs before the players do." },
      { name: "JAVASCRIPT", icon: "javascript", blurb: "The language of the web. Where it all started." },
      { name: "HTML", icon: "html", blurb: "Semantic markup that screen readers and search engines can actually read." },
      { name: "CSS", icon: "css", usedIn: ["This portfolio"], blurb: "Layouts, animations and every hard pixel shadow on this page." },
      { name: "TAILWIND", icon: "tailwind", blurb: "Utility-first CSS for shipping UI fast." },
      { name: "SHADCN/UI", icon: "shadcn", blurb: "Accessible, copy-paste React components built on Radix." },
    ],
  },
  {
    title: "BACKPACK · BACKEND",
    items: [
      { name: "NODE.JS", icon: "nodejs", equipped: true, usedIn: ["Triple A Fitness"], blurb: "JavaScript on the server: APIs, sockets and scripts." },
      { name: "EXPRESS.JS", icon: "express", blurb: "Minimal Node framework for building REST APIs." },
      { name: "REST APIS", icon: "rest", blurb: "Clean, predictable endpoints between the front and the back." },
      { name: "WEBSOCKETS", icon: "websockets", usedIn: ["Triple A Fitness"], blurb: "Real-time, two-way connections. Every screen updates at once." },
      { name: "DRIZZLE ORM", icon: "drizzle", usedIn: ["The Infinite Tours"], blurb: "Type-safe SQL for TypeScript, light enough to run on the edge." },
      { name: "JAVA", icon: "java", usedIn: ["NeetCode practice"], blurb: "Strongly typed and object-oriented. My go-to for DSA practice." },
      { name: "SQL", icon: "sql", blurb: "Querying relational data without the guesswork." },
    ],
  },
  {
    title: "CHEST · CLOUD & DATA",
    items: [
      { name: "CLOUDFLARE", icon: "cloudflare", equipped: true, usedIn: ["The Infinite Tours"], blurb: "Workers, R2 and Turnstile. My favourite way to run code at the edge." },
      { name: "AWS", icon: "aws", blurb: "Cloud services for storage, compute and everything in between." },
      { name: "VERCEL", icon: "vercel", blurb: "Push-to-deploy hosting for Next.js apps." },
      { name: "DOCKER", icon: "docker", blurb: "Containers that run the same on every machine." },
      { name: "KUBERNETES", icon: "kubernetes", blurb: "Orchestration for when one container isn't enough." },
      { name: "MONGODB", icon: "mongodb", usedIn: ["Triple A Fitness"], blurb: "Flexible document database for fast-moving data." },
      { name: "FIREBASE", icon: "firebase", blurb: "Auth, database and hosting in one box." },
      { name: "SUPABASE", icon: "supabase", blurb: "Postgres with auth, storage and real-time built in." },
    ],
  },
  {
    title: "ENCHANTMENTS · AI & TOOLS",
    items: [
      { name: "GENERATIVE AI", icon: "genai", usedIn: ["The Infinite Tours"], blurb: "Building with LLMs, from prompts to shipped features like AI chatbots." },
      { name: "RAG", icon: "rag", blurb: "Retrieval-augmented generation: grounding AI answers in real data." },
      { name: "PROMPT ENG.", icon: "prompt", blurb: "Getting reliable output from models, on purpose." },
      { name: "GIT", icon: "git", blurb: "Version control. Every save point, tracked." },
      { name: "GITHUB", icon: "github", blurb: "Where the code lives. The live stats are a few levels down." },
      { name: "CI/CD", icon: "cicd", blurb: "Automated checks and deploys on every push." },
    ],
  },
];

export type Quest = {
  title: string;
  kind: string;
  status: "LIVE" | "SHIPPED" | "IN PROGRESS";
  description: string;
  loot: { value: string; label: string }[];
  difficulty: 1 | 2 | 3 | 4;
  stack: string[];
  theme: "yellow" | "blue" | "lime";
  art: CoverArt;
  // A photo from /public replaces the pixel art. `focus` is the CSS object-position used when cropping.
  image?: { src: string; alt: string; focus?: string };
  actions: { label: string; href: string; primary?: boolean }[];
};

export const quests: Quest[] = [
  {
    title: "TRIPLE A FITNESS",
    kind: "WEB APP · ADMIN DASHBOARD",
    status: "LIVE",
    description:
      "A gym management platform with separate Admin, Trainer and Member apps, all synced in real time over WebSockets. Members check in by scanning a QR code.",
    loot: [
      { value: "100+", label: "users across multiple gyms" },
      { value: "-80%", label: "manual attendance tracking" },
      { value: "3", label: "role-based apps, one live sync" },
    ],
    difficulty: 3,
    stack: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    theme: "yellow",
    art: "gymCat",
    image: {
      src: "/img/GYM CAT.jpg",
      alt: "A fluffy cat in a cap and headphones standing next to a barbell in a gym",
      focus: "55% 45%",
    },
    // TODO: real live + source links
    actions: [
      { label: "PLAY LIVE", href: "#quests", primary: true },
      { label: "SOURCE", href: "#quests" },
    ],
  },
  {
    title: "THE INFINITE TOURS",
    kind: "CLIENT PROJECT · TECH LEAD",
    status: "SHIPPED",
    description:
      "Rebuilt a legacy travel site on a global edge network, then tuned it into top search rankings. Includes a spam-proofed UI and an AI chatbot.",
    loot: [
      { value: "-50s", label: "cold start delay, gone" },
      { value: "-70%", label: "image payload size" },
      { value: "0", label: "layout shift (CLS)" },
    ],
    difficulty: 4,
    stack: ["Cloudflare Workers", "R2", "Drizzle ORM", "Turnstile"],
    theme: "blue",
    art: "travelCat",
    image: {
      src: "/img/cat travelling.jpg",
      alt: "A ginger cat and a Shiba dog dressed as travellers with straw hats on a forest path",
      focus: "60% 72%",
    },
    // TODO: real site link
    actions: [
      { label: "VISIT SITE", href: "#quests", primary: true },
      { label: "READ THE STORY", href: "#blog" },
    ],
  },
];

// Shown as a slim "loading" banner under the real quests. Set to null to hide it.
export const lockedQuest: { teaser: string } | null = {
  teaser: "Something new is being built in the lab. Check back soon.",
};

export type Job = {
  world: number; // 1 = first job; the timeline shows the highest world first
  role: string;
  company: string;
  period: string;
  mode: string;
  current?: boolean;
  summary: string;
  objectives: string[];
  stats?: { value: string; label: string }[];
  stack?: string[];
};

export const jobs: Job[] = [
  {
    world: 2,
    role: "Software Engineer Intern",
    company: "HPC Infotech",
    period: "AUG 2026 – PRESENT",
    mode: "HYBRID",
    current: true,
    summary: "Shipping features end to end on a real engineering team.",
    objectives: [
      "Develop, test and debug software features end to end, following best practices under the project supervisor.",
      "Work with the engineering team on implementation, troubleshooting and code reviews to ship reliable releases.",
      "Document technical work so knowledge is shared and the codebase stays consistent.",
    ],
  },
  {
    world: 1,
    role: "Full Stack Intern & Technical Lead",
    company: "The Infinite Tours",
    period: "JUN – AUG 2026",
    mode: "REMOTE",
    summary: "Led the rebuild of a legacy travel platform into a globally distributed edge network.",
    objectives: [
      "Modernised legacy infrastructure into an edge network, documenting every big call in Architectural Decision Records.",
      "Killed 50s+ cold starts by moving to Cloudflare Workers with Drizzle ORM, and built a zero-egress R2 image pipeline.",
      "Ran a 5-sprint Core Web Vitals roadmap: layout shift eliminated, enterprise-level structured data for SEO.",
      "Locked shared UIs against spam with Cloudflare Turnstile and shipped the platform's AI chatbot interface.",
    ],
    stats: [
      { value: "-50s", label: "cold starts" },
      { value: "-70%", label: "image payload" },
      { value: "0", label: "layout shift" },
    ],
    stack: ["Cloudflare Workers", "R2", "Drizzle ORM", "Turnstile"],
  },
];

export type TrophyIcon = "trophy" | "medal" | "cap" | "scroll" | "book";
export type Rarity = "EPIC" | "RARE" | "IN PROGRESS" | "COMMON";

export const trophies: { title: string; issuer: string; detail: string; icon: TrophyIcon; rarity: Rarity }[] = [
  {
    title: "Top Search Rankings",
    issuer: "The Infinite Tours",
    detail: "Earned with SEO, structured data and serious performance tuning.",
    icon: "trophy",
    rarity: "EPIC",
  },
  {
    title: "B.Tech, Computer Science",
    issuer: "Uttaranchal University",
    detail: "Graduating 2027 · CGPA 7.2",
    icon: "cap",
    rarity: "IN PROGRESS",
  },
  {
    title: "Google UI/UX Design Certificate",
    issuer: "Coursera",
    detail: "So yes, I care how it looks too.",
    icon: "medal",
    rarity: "RARE",
  },
];

// Blog posts live as Markdown files in /content/blog (see src/lib/blog.ts).
