# Du Xiaowen personal site

This is the first Chinese-language personal site assembled from the reviewed `data/general/resume.zh.yaml` content. It is intentionally separate from the resume PDF pipeline so public-site copy and layout can evolve without changing the resume baseline.

## Local preview

```bash
npm install
npm run dev
```

The site is a static Astro build. The production build is `dist/`, and the Cloudflare Pages settings are:

- Production branch: `main`
- Build command: `npm run build`
- Build directory: `dist`

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` is ready for a repository named `Alex129xx.github.io`. GitHub requires that exact repository name for the user site. Copy the contents of this directory into that repository, enable Pages with **GitHub Actions**, and push to `main`.

The same source can be connected to Cloudflare Pages. Keep the Cloudflare project as the primary public URL when a custom domain is added; update `site` in `astro.config.mjs` when that canonical URL is known.

## Public-data boundary

The first version publishes the name, email, GitHub link, education, selected project facts, and experience claims from the general resume. It deliberately omits the phone number, portrait, certificates, private repository links, and private source materials.
