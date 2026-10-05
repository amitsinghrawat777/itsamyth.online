// Hand-drawn 16×16 pixel logos. Each layer is one fill colour plus a path of pixel rectangles.
type Layer = { fill: string; d: string };

export const icons = {
  react: [
    {
      fill: "#61dafb",
      d: "M4 5h8v1H4z M2 6h2v1H2z M12 6h2v1h-2z M1 7h1v2H1z M14 7h1v2h-1z M2 9h2v1H2z M12 9h2v1h-2z M4 10h8v1H4z M3 1h1v2H3z M4 3h1v1H4z M5 4h1v2H5z M6 6h1v1H6z M9 9h1v2H9z M10 11h1v1h-1z M11 12h1v2h-1z M12 14h1v1h-1z M12 1h1v2h-1z M11 3h1v1h-1z M10 4h1v2h-1z M9 6h1v1H9z M6 9h1v2H6z M5 11h1v1H5z M4 12h1v2H4z M3 14h1v1H3z M7 7h2v2H7z",
    },
  ],
  nextjs: [
    { fill: "#0b0b0b", d: "M5 1h6v1H5z M3 2h10v1H3z M2 3h12v2H2z M1 5h14v6H1z M2 11h12v2H2z M3 13h10v1H3z M5 14h6v1H5z" },
    { fill: "#ffffff", d: "M5 4h1v8H5z M10 4h1v8h-1z M6 5h1v2H6z M7 7h1v2H7z M8 9h1v1H8z M9 10h1v1H9z" },
  ],
  typescript: [
    { fill: "#3178c6", d: "M1 1h14v14H1z" },
    { fill: "#ffffff", d: "M4 8h5v1H4z M6 9h1v4H6z M10 8h3v1h-3z M10 9h1v1h-1z M10 10h3v1h-3z M12 11h1v1h-1z M10 12h3v1h-3z" },
  ],
  javascript: [
    { fill: "#f7df1e", d: "M1 1h14v14H1z" },
    { fill: "#14121f", d: "M8 8h1v5H8z M6 12h2v1H6z M6 11h1v1H6z M10 8h3v1h-3z M10 9h1v1h-1z M10 10h3v1h-3z M12 11h1v1h-1z M10 12h3v1h-3z" },
  ],
  html: [
    { fill: "#e34f26", d: "M2 1h12v11h-1v1h-1v1h-2v1H6v-1H4v-1H3v-1H2z" },
    { fill: "#f06529", d: "M8 2h5v10h-1v1h-1v1H9v1H8z" },
    { fill: "#ffffff", d: "M5 4h5v1H5z M5 5h1v1H5z M5 6h5v1H5z M9 7h1v2H9z M5 9h5v1H5z" },
  ],
  css: [
    { fill: "#1572b6", d: "M2 1h12v11h-1v1h-1v1h-2v1H6v-1H4v-1H3v-1H2z" },
    { fill: "#33a9dc", d: "M8 2h5v10h-1v1h-1v1H9v1H8z" },
    { fill: "#ffffff", d: "M5 4h5v1H5z M9 5h1v1H9z M6 6h4v1H6z M9 7h1v2H9z M5 9h5v1H5z" },
  ],
  tailwind: [
    {
      fill: "#38bdf8",
      d: "M3 3h3v1H3z M2 4h5v1H2z M9 4h1v1H9z M1 5h2v1H1z M6 5h4v1H6z M7 6h2v1H7z M8 8h3v1H8z M7 9h5v1H7z M14 9h1v1h-1z M6 10h2v1H6z M11 10h4v1h-4z M12 11h2v1h-2z",
    },
  ],
  shadcn: [
    { fill: "#0b0b0b", d: "M1 1h14v14H1z" },
    {
      fill: "#ffffff",
      d: "M11 3h2v1h-2z M10 4h2v1h-2z M9 5h2v1H9z M8 6h2v1H8z M7 7h2v1H7z M6 8h2v1H6z M5 9h2v1H5z M4 10h2v1H4z M12 8h2v1h-2z M11 9h2v1h-2z M10 10h2v1h-2z M9 11h2v1H9z M8 12h2v1H8z",
    },
  ],
  nodejs: [
    { fill: "#5fa04e", d: "M7 1h2v1H7z M5 2h6v1H5z M3 3h10v1H3z M2 4h12v8H2z M3 12h10v1H3z M5 13h6v1H5z M7 14h2v1H7z" },
    { fill: "#ffffff", d: "M5 6h1v5H5z M6 6h4v1H6z M10 7h1v4h-1z" },
  ],
  express: [
    { fill: "#3a3a3a", d: "M1 1h14v14H1z" },
    {
      fill: "#ffffff",
      d: "M3 6h4v1H3z M3 7h1v1H3z M6 7h1v1H6z M3 8h4v1H3z M3 9h1v1H3z M3 10h4v1H3z M8 6h1v1H8z M12 6h1v1h-1z M9 7h1v1H9z M11 7h1v1h-1z M10 8h1v1h-1z M9 9h1v1H9z M11 9h1v1h-1z M8 10h1v1H8z M12 10h1v1h-1z",
    },
  ],
  rest: [
    { fill: "#4fe3e0", d: "M4 2h2v1H4z M3 3h1v4H3z M2 7h1v2H2z M3 9h1v4H3z M4 13h2v1H4z M10 2h2v1h-2z M12 3h1v4h-1z M13 7h1v2h-1z M12 9h1v4h-1z M10 13h2v1h-2z" },
    { fill: "#ffd23f", d: "M7 7h2v2H7z" },
  ],
  websockets: [
    { fill: "#ff4fa3", d: "M2 4h9v2H2z M11 2h1v6h-1z M12 3h1v4h-1z M13 4h1v2h-1z" },
    { fill: "#4fe3e0", d: "M5 10h9v2H5z M4 8h1v6H4z M3 9h1v4H3z M2 10h1v2H2z" },
  ],
  drizzle: [
    { fill: "#0b0b0b", d: "M1 1h14v14H1z" },
    {
      fill: "#c5f74f",
      d: "M6 3h2v1H6z M5 4h2v1H5z M4 5h2v1H4z M3 6h2v1H3z M12 2h2v1h-2z M11 3h2v1h-2z M10 4h2v1h-2z M9 5h2v1H9z M7 9h2v1H7z M6 10h2v1H6z M5 11h2v1H5z M4 12h2v1H4z M13 8h2v1h-2z M12 9h2v1h-2z M11 10h2v1h-2z M10 11h2v1h-2z",
    },
  ],
  java: [
    { fill: "#f89820", d: "M6 1h1v2H6z M5 3h1v2H5z M6 5h1v1H6z M9 2h1v2H9z M8 4h1v2H8z" },
    { fill: "#5382a1", d: "M3 7h8v5h-1v1H4v-1H3z M11 8h2v1h-2z M13 9h1v2h-1z M11 11h2v1h-2z M2 14h12v1H2z" },
  ],
  sql: [
    { fill: "#4f8bff", d: "M4 1h8v1H4z M2 2h12v11H2z M4 13h8v1H4z" },
    { fill: "#a9c6ff", d: "M4 2h8v2H4z M2 5h2v1H2z M4 6h8v1H4z M12 5h2v1h-2z M2 9h2v1H2z M4 10h8v1H4z M12 9h2v1h-2z" },
  ],
  cloudflare: [
    { fill: "#f38020", d: "M6 4h4v1H6z M5 5h6v1H5z M4 6h7v1H4z M2 7h10v1H2z M1 8h11v3H1z" },
    { fill: "#faae40", d: "M11 6h3v1h-3z M12 7h3v1h-3z M12 8h3v3h-3z" },
  ],
  aws: [
    { fill: "#232f3e", d: "M1 1h14v14H1z" },
    {
      fill: "#ffffff",
      d: "M2 3h3v1H2z M4 4h1v1H4z M2 5h3v1H2z M2 6h1v1H2z M4 6h1v1H4z M2 7h3v1H2z M6 3h1v4H6z M10 3h1v4h-1z M8 5h1v2H8z M7 7h1v1H7z M9 7h1v1H9z M12 3h3v1h-3z M12 4h1v1h-1z M12 5h3v1h-3z M14 6h1v1h-1z M12 7h3v1h-3z",
    },
    { fill: "#ff9900", d: "M2 10h1v1H2z M3 11h2v1H3z M5 12h6v1H5z M11 11h2v1h-2z M13 9h1v2h-1z M11 9h2v1h-2z" },
  ],
  vercel: [{ fill: "#fff8e1", d: "M7 3h2v1H7z M6 4h4v2H6z M5 6h6v2H5z M4 8h8v2H4z M3 10h10v2H3z M2 12h12v2H2z" }],
  docker: [
    {
      fill: "#2496ed",
      d: "M1 8h13v3H1z M2 11h11v1H2z M4 12h7v1H4z M13 6h1v2h-1z M14 5h1v2h-1z M2 5h2v2H2z M5 5h2v2H5z M8 5h2v2H8z M5 2h2v2H5z M8 2h2v2H8z",
    },
    { fill: "#ffffff", d: "M3 9h1v1H3z" },
  ],
  kubernetes: [
    { fill: "#326ce5", d: "M5 1h6v1H5z M3 2h10v1H3z M2 3h12v2H2z M1 5h14v6H1z M2 11h12v2H2z M3 13h10v1H3z M5 14h6v1H5z" },
    {
      fill: "#ffffff",
      d: "M6 4h4v1H6z M4 5h2v1H4z M10 5h2v1h-2z M4 6h1v4H4z M11 6h1v4h-1z M4 10h2v1H4z M10 10h2v1h-2z M6 11h4v1H6z M7 2h2v2H7z M7 12h2v2H7z M2 7h2v2H2z M12 7h2v2h-2z M7 5h2v6H7z M5 7h6v2H5z",
    },
  ],
  mongodb: [
    { fill: "#47a248", d: "M7 1h2v1H7z M6 2h4v1H6z M5 3h6v2H5z M4 5h8v5H4z M5 10h6v1H5z M6 11h4v1H6z M7 12h2v1H7z M7 13h1v2H7z" },
    { fill: "#2e7d32", d: "M8 3h1v9H8z" },
  ],
  firebase: [
    { fill: "#f57c00", d: "M6 1h1v1H6z M6 2h2v1H6z M5 3h4v1H5z M5 4h5v1H5z M4 5h6v1H4z M4 6h7v1H4z M3 7h9v4H3z M4 11h7v1H4z M5 12h5v1H5z M6 13h3v1H6z" },
    { fill: "#ffca28", d: "M6 5h1v1H6z M6 6h2v1H6z M5 7h4v4H5z M6 11h3v1H6z M7 12h1v1H7z" },
  ],
  supabase: [
    {
      fill: "#3ecf8e",
      d: "M9 1h2v1H9z M8 2h3v1H8z M7 3h4v1H7z M6 4h5v1H6z M5 5h6v1H5z M4 6h7v1H4z M3 7h11v1H3z M6 8h7v1H6z M6 9h6v1H6z M6 10h5v1H6z M6 11h4v1H6z M6 12h3v1H6z M6 13h2v1H6z M6 14h1v1H6z",
    },
  ],
  genai: [
    { fill: "#b07bff", d: "M6 2h1v13H6z M1 8h11v1H1z M5 6h3v5H5z M4 7h5v3H4z" },
    { fill: "#ffd23f", d: "M12 1h1v5h-1z M10 3h5v1h-5z" },
  ],
  rag: [
    { fill: "#fff8e1", d: "M2 1h8v12H2z" },
    { fill: "#8a84a3", d: "M3 3h5v1H3z M3 5h6v1H3z M3 7h4v1H3z" },
    { fill: "#4fe3e0", d: "M9 7h3v1H9z M8 8h1v3H8z M12 8h1v3h-1z M9 11h3v1H9z M12 12h2v1h-2z M13 13h2v1h-2z M14 14h1v1h-1z" },
    { fill: "#2a6f8f", d: "M9 8h3v3H9z" },
  ],
  prompt: [
    { fill: "#14121f", d: "M1 2h14v12H1z" },
    { fill: "#b07bff", d: "M1 2h14v2H1z" },
    { fill: "#5bd14a", d: "M3 6h1v1H3z M4 7h1v1H4z M5 8h1v1H5z M4 9h1v1H4z M3 10h1v1H3z" },
    { fill: "#ffd23f", d: "M7 10h4v1H7z" },
  ],
  git: [
    {
      fill: "#f05032",
      d: "M7 1h2v1H7z M6 2h4v1H6z M5 3h6v1H5z M4 4h8v1H4z M3 5h10v1H3z M2 6h12v1H2z M1 7h14v2H1z M2 9h12v1H2z M3 10h10v1H3z M4 11h8v1H4z M5 12h6v1H5z M6 13h4v1H6z M7 14h2v1H7z",
    },
    { fill: "#ffffff", d: "M7 4h1v5H7z M6 9h2v2H6z M9 6h2v2H9z M8 5h1v1H8z" },
  ],
  github: [
    { fill: "#fff8e1", d: "M5 1h6v1H5z M3 2h10v1H3z M2 3h12v2H2z M1 5h14v6H1z M2 11h12v2H2z M3 13h10v1H3z M5 14h6v1H5z" },
    { fill: "#14121f", d: "M4 3h1v1H4z M11 3h1v1h-1z M4 4h8v5H4z M6 9h4v4H6z M3 10h3v1H3z" },
  ],
  linkedin: [
    { fill: "#0a66c2", d: "M1 1h14v14H1z" },
    { fill: "#ffffff", d: "M3 3h2v2H3z M3 6h2v7H3z M7 6h2v7H7z M9 6h3v1H9z M11 7h2v6h-2z" },
  ],
  web: [
    { fill: "#1f6fd1", d: "M5 1h6v1H5z M3 2h10v1H3z M2 3h12v2H2z M1 5h14v6H1z M2 11h12v2H2z M3 13h10v1H3z M5 14h6v1H5z" },
    { fill: "#5bd14a", d: "M4 3h3v2H4z M3 5h4v3H3z M5 8h2v2H5z M9 3h3v2H9z M10 5h3v3h-3z M8 11h3v2H8z" },
    { fill: "#fff8e1", d: "M4 4h1v1H4z" },
  ],
  resume: [
    { fill: "#fff8e1", d: "M3 1h10v14H3z" },
    { fill: "#8a84a3", d: "M5 3h6v1H5z M5 5h6v1H5z M5 7h4v1H5z M5 9h6v1H5z" },
    { fill: "#ff4fa3", d: "M9 11h3v3H9z" },
  ],
  mail: [
    { fill: "#fff8e1", d: "M1 3h14v10H1z" },
    { fill: "#14121f", d: "M1 3h2v1H1z M3 4h2v1H3z M5 5h2v1H5z M7 6h2v1H7z M9 5h2v1H9z M11 4h2v1h-2z M13 3h2v1h-2z" },
    { fill: "#ff4fa3", d: "M7 9h2v2H7z M6 9h1v1H6z M9 9h1v1H9z" },
  ],
  cicd: [
    {
      fill: "#4fe3e0",
      d: "M2 5h4v1H2z M1 6h1v4H1z M2 10h4v1H2z M10 5h4v1h-4z M14 6h1v4h-1z M10 10h4v1h-4z M6 6h1v1H6z M7 7h2v2H7z M9 9h1v1H9z M9 6h1v1H9z M6 9h1v1H6z",
    },
  ],
} satisfies Record<string, Layer[]>;

export type IconName = keyof typeof icons;

// A front-facing 24×24 pixel cat. Scenes below recolour it and add props.
const CAT = {
  head: "M5 2h1v1H5z M5 3h2v1H5z M5 4h3v1H5z M18 2h1v1h-1z M17 3h2v1h-2z M16 4h3v1h-3z M5 5h14v1H5z M4 6h16v6H4z M5 12h14v1H5z",
  body: "M6 13h12v7H6z",
  tail: "M18 18h2v1h-2z M20 15h1v4h-1z M21 14h1v2h-1z",
  stripes: "M9 5h1v2H9z M11 5h2v1h-2z M14 5h1v2h-1z M6 15h2v1H6z M6 17h2v1H6z M16 15h2v1h-2z M16 17h2v1h-2z",
  light: "M9 14h6v5H9z M7 20h3v1H7z M14 20h3v1h-3z M10 10h4v2h-4z",
  pink: "M6 4h1v1H6z M17 4h1v1h-1z M11 10h2v1h-2z M5 10h1v1H5z M18 10h1v1h-1z",
  eyes: "M8 8h2v2H8z M14 8h2v2h-2z",
  ink: "M9 8h1v2H9z M14 8h1v2h-1z M10 11h1v1h-1z M13 11h1v1h-1z",
  whiskers: "M1 9h3v1H1z M2 11h2v1H2z M20 9h3v1h-3z M20 11h2v1h-2z",
};

function cat(c: { coat: string; dark: string; light: string; eye: string; whisker?: string }, withTail = true): Layer[] {
  return [
    { fill: c.coat, d: `${CAT.head} ${CAT.body}${withTail ? ` ${CAT.tail}` : ""}` },
    { fill: c.dark, d: CAT.stripes },
    { fill: c.light, d: CAT.light },
    { fill: "#ff9fc0", d: CAT.pink },
    { fill: c.eye, d: CAT.eyes },
    { fill: "#14121f", d: CAT.ink },
    { fill: c.whisker ?? "#fff8e1", d: CAT.whiskers },
  ];
}

// Project cover art (24×24) used until real screenshots exist.
export const covers = {
  // Grey tabby in a sweatband, mid-lift.
  gymCat: [
    ...cat({ coat: "#8d97a6", dark: "#5f6876", light: "#dfe3ea", eye: "#8fe04a" }, false),
    { fill: "#ff4fa3", d: "M4 6h16v1H4z" },
    { fill: "#8a84a3", d: "M3 15h18v1H3z" },
    { fill: "#14121f", d: "M0 11h2v9H0z M22 11h2v9h-2z" },
    { fill: "#ff4fa3", d: "M2 12h1v7H2z M21 12h1v7h-1z" },
    { fill: "#dfe3ea", d: "M5 14h2v3H5z M17 14h2v3h-2z" },
    { fill: "#4fe3e0", d: "M21 2h1v1h-1z M20 3h3v2h-3z" },
  ],
  // Ginger in shades, carrying the whole internet (a tiny globe) at edge speed.
  travelCat: [
    ...cat({ coat: "#f08a2c", dark: "#c25a1c", light: "#ffe0b0", eye: "#8fe04a" }),
    { fill: "#14121f", d: "M7 8h4v2H7z M13 8h4v2h-4z M11 8h2v1h-2z M5 8h2v1H5z M17 8h2v1h-2z" },
    { fill: "#fff8e1", d: "M8 8h1v1H8z M14 8h1v1h-1z" },
    { fill: "#1f6fd1", d: "M1 14h4v1H1z M0 15h6v4H0z M1 19h4v1H1z" },
    { fill: "#5bd14a", d: "M1 15h2v2H1z M3 17h2v2H3z" },
    { fill: "#ffe0b0", d: "M5 15h2v2H5z" },
    { fill: "#ffd23f", d: "M21 0h2v2h-2z M20 2h2v1h-2z M19 3h3v1h-3z M20 4h2v1h-2z M19 5h2v2h-2z" },
  ],
  // Black cat with glowing eyes guarding the locked quest.
  mysteryCat: [
    ...cat({ coat: "#24212b", dark: "#24212b", light: "#3a3550", eye: "#ffd23f", whisker: "#8a84a3" }),
    { fill: "#ffd23f", d: "M19 0h4v1h-4z M22 1h1v2h-1z M20 3h2v1h-2z M20 4h1v1h-1z M20 6h1v1h-1z" },
  ],
} satisfies Record<string, Layer[]>;

export type CoverArt = keyof typeof covers;
