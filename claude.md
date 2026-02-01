# TomToll Blog

Personal blog for Tom Tollinton, deployed at https://tomtoll.com. Also publishes on Substack at https://substack.com/@tomtollinton.

## Tech Stack

- **Framework**: Gatsby 5.x with TypeScript
- **Theme**: @lekoarts/gatsby-theme-minimal-blog
- **Content**: MDX (Markdown + JSX)
- **Hosting**: S3 (via gatsby-plugin-s3)

## Commands

```bash
yarn develop    # Start local dev server
yarn build      # Production build
yarn clean      # Clear Gatsby cache
```

## Deploy

```bash
export AWS_PROFILE=tom-console
yarn deploy
```

## Project Structure

```
content/
  posts/           # Blog posts (each post is a folder with index.mdx)
  pages/           # Static pages (me, why, writing)
vault/             # Obsidian vault - post ideas and drafts
src/
  @lekoarts/       # Theme customizations/shadowing
static/            # Static assets (images, etc.)
gatsby-config.ts   # Site configuration
```

## Workflow

Ideas go in `vault/`. When ready to publish, move to `content/posts/<slug>/index.mdx`.

## Writing Posts

Posts live in `content/posts/<slug>/index.mdx` with frontmatter:

```mdx
---
title: Post Title
date: 2024-01-15
description: Brief description for SEO
tags:
  - Tag1
  - Tag2
banner: ./image.png  # Optional banner image in same folder
---

Post content in MDX...
```

## Writing Style

**Tone**: Edgy, sarcastic, blunt. Say what you mean. Don't soften it.

**Influences**:
- **David Mitchell** (British comedian, *Unruly*) - Dry wit, sardonic observations, erudite but not pompous

**Avoid**:
- Clichés. If you've heard it before, don't write it.
- Classic intro/content/conclusion structure. Narrative matters more than format.
- Over-explaining. Let the reader do some work.
- Filler words, hedging, throat-clearing

**Do**:
- Get to the point
- Let sarcasm land without signposting it
- Use rhythm and pacing for emphasis
- End when you're done, not when you've summarised

## Social

- Twitter: @tomtollinton
- Substack: https://substack.com/@tomtollinton
