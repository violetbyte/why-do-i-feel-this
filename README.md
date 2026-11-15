# Why Do I Feel This

Plain, gentle explanations for the everyday feelings that are hard to name. *Oh, that’s why.*

Built with [Astro](https://astro.build) (free, open source) and hosted free on Vercel. No paid services.

## What’s inside

- **30 feelings**, each one Markdown file in `src/content/feelings/`
- **Find a feeling** (`/find/`): two gentle questions for when you can’t name it
- **Forgiving search**: matches synonyms and typos (“jealous” finds envy, “fomo” finds missing out)
- **A share image for every feeling**, generated at build time (shows up when links are posted on X, WhatsApp and so on)
- Inner-weather design: each situation has its own colour, icon and slow ambient sky
- Calm motion: smooth page-to-page transitions, gentle reveals, a one-minute breathing exercise. Respects “reduce motion”.
- Save for later (on the visitor’s device, no account), light and dark mode, works offline, installable

## Add or edit a feeling

Create `src/content/feelings/your-id.md`:

```md
---
title: "Why do I …?"
short: "One-line short answer."
theme: 1            # 0 social · 1 everyday dips · 2 comparison · 3 relationships · 4 work/study · 5 change
order: 31
reframe: "A small reframe."
helps:
  - "One tiny thing."
  - "Another tiny thing."
related: ["sunday-dread", "cant-start-task"]
when: ["quiet"]     # people · quiet · comparing · work · endings · nowhere
feel: ["heavy"]     # heavy · restless · empty · stung · longing · tense
tags: ["words", "people", "might search"]
---

What’s going on, in a short paragraph.
```

The page, share image, sitemap, search and finder all update automatically. If a field is missing or wrong, the build stops and tells you which one.

## Run locally

```
npm install
npm run dev
```

## Deploy (Vercel, free)

Import the repo in Vercel. It detects Astro automatically; no settings needed.
The site address is read from Vercel at build time. For a custom domain, add an environment variable `SITE_URL` (for example `https://whydoifeelthis.com`).

This site explains everyday feelings. It isn’t medical advice.
