# Du Xiaowen personal site

This is the first Chinese-language personal site assembled from the reviewed `data/general/resume.zh.yaml` content. It is intentionally separate from the resume PDF pipeline so public-site copy and layout can evolve without changing the resume baseline.

## Local preview

Use Node.js 20. After checking out the parent repository, run `git submodule update --init --recursive` from its root before working here.

```bash
npm ci
npm run dev
```

The site is a static Astro build. The production build is `dist/`, and the Cloudflare Pages settings are:

- Production branch: `main`
- Build command: `npm run build`
- Build directory: `dist`

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` is ready for a repository named `Alex129xx.github.io`. GitHub requires that exact repository name for the user site. Copy the contents of this directory into that repository, enable Pages with **GitHub Actions**, and push to `main`.

The same source is also deployed to Cloudflare Pages at https://alex129xxdu.pages.dev. The Cloudflare URL is the primary public URL; GitHub Pages remains available as a mirror at https://alex129xx.github.io.

The public contact links are the personal site, GitHub, and LinkedIn profile at https://www.linkedin.com/in/alexxiaowendu/.

## Public-data boundary

The first version publishes the name, email, GitHub link, education, selected project facts, and experience claims from the general resume. It deliberately omits the phone number, portrait, certificates, private repository links, and private source materials.
