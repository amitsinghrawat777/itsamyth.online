# itsamyth.online

Personal portfolio of **Amyth (Amit Rawat)**, a full stack developer from Dehradun. It's built like a game: Character Select, Inventory, Quest Log, a Game Boy that shows live GitHub stats, Career Mode and Patch Notes.

## Stack

- Next.js (App Router) + TypeScript
- Plain CSS, pixel fonts (Press Start 2P, VT323)
- Live GitHub stats, refreshed hourly
- Markdown blog in `content/blog`

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- **Profile, skills, projects, jobs, trophies:** `src/data/portfolio.ts`
- **Blog posts:** add a `.md` file to `content/blog` (set `draft: false` to publish)
- **GitHub contribution heatmap (optional):** copy `.env.example` to `.env.local` and add a `GITHUB_TOKEN`
