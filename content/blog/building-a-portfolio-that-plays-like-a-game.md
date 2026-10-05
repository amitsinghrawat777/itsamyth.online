---
title: Building a portfolio that plays like a game
date: 2026-10-05
summary: Why my portfolio has a high score board, a Game Boy and fighting-game special moves, and how it's built with Next.js and plain CSS.
tags: [Next.js, CSS, Design]
draft: true
---

Most developer portfolios look the same: a gradient hero, a grid of cards, a contact form. I wanted mine to feel like *me*, which means loud, a bit unhinged, and fun to poke around in. So I built it like a game.

## The rules I set

1. **One idea, everywhere.** Every section is a level: Character Select, Inventory, Quest Log, Career Mode. If something didn't fit the game, it didn't go in.
2. **Real numbers, not adjectives.** The hero is a high score board with actual results from my work, like cold starts cut by 50 seconds and image payloads cut by 70%.
3. **Pixel art, but readable.** Two pixel fonts (Press Start 2P for headings, VT323 for text), hard shadows and chunky borders, with the body text still big enough to read.

## How it's built

The site is Next.js with the App Router and plain CSS. No UI library, no Tailwind. The pixel look (stepped animations, checkerboard dividers, hard offset shadows) was simpler to write as straight CSS.

All the content lives in a single data file, so updating a project or a job is a one-line change instead of a hunt through components.

The skill icons are hand-drawn 16×16 pixel logos stored as tiny SVG paths:

```ts
nodejs: [
  { fill: "#5fa04e", d: "M7 1h2v1H7z M5 2h6v1H5z ..." },
  { fill: "#ffffff", d: "M5 6h1v5H5z ..." },
],
```

## The Game Boy

My favourite part is the GitHub section. It pulls my repos, stars and contribution calendar from GitHub, refreshes every hour, and draws it all on a Game Boy-style screen, complete with a D-pad and a START button that opens my profile.

## What's next

More posts, more quests, and probably more cats. If you have ideas (or bugs), my inbox is open.
