# jivoin.com

Source for my personal site, built with [Astro](https://astro.build) on top of the
[Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) theme by Chris Williams,
deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Content

- `content/posts/` — blog posts (MDX)
- `content/projects/` — project write-ups (Markdown)

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages. The custom domain is set via `public/CNAME`.
