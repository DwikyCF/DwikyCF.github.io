# Dwiky Christian Febriano — Personal Portfolio

A responsive, static React + Vite portfolio with six sections, the supplied personal photograph and downloadable CV, project filters, rotating role text, mobile navigation, scroll progress, and accessible reduced-motion behavior. No backend, database, authentication, API keys, or paid services are required.

## Local development

Install Node.js 22.12+ (or 24 LTS), then open a terminal in this folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To build and inspect the production site:

```sh
npm run build
npm run preview
```

Vite writes the complete production website to `dist/`. Do not open `index.html` directly as a file; use the development or preview server.

## Publish publicly for free on GitHub Pages

1. Sign into GitHub as **DwikyCF**.
2. Create a **public** repository named exactly **DwikyCF.github.io**. If it already exists, review its current contents before replacing anything. For a new repository, leave the initial README, .gitignore, and license options unchecked.
3. Upload this source folder to the repository, including `.github/workflows/deploy.yml` and `package-lock.json`. Exclude `node_modules/`, `dist/`, and `.cache/`. The source `index.html` and `package.json` must sit at the repository root, not inside an extra folder.
4. With Git installed, a fresh local checkout can alternatively be pushed with these commands. If this folder already has Git history or a remote, inspect it first with `git status` and `git remote -v`, and preserve existing history:

   ```sh
   git init
   git add .
   git commit -m "Build personal portfolio"
   git branch -M main
   git remote add origin https://github.com/DwikyCF/DwikyCF.github.io.git
   git push -u origin main
   ```

5. In the repository, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. No custom domain is needed.
6. Open **Actions → Deploy portfolio to GitHub Pages**. If the first run failed before Pages was enabled, use **Re-run all jobs**. You can also choose **Run workflow → main → Run workflow**.
7. Wait for both `build` and `deploy` jobs to succeed. Visit **https://dwikycf.github.io/**. The address is a deployment target; the local build alone does not publish it.
8. Future pushes to `main` rebuild and publish automatically. If the old site appears, wait briefly and refresh the browser cache.

GitHub Pages supports this static public portfolio on GitHub Free. No credit card, paid domain, subscription, or server is needed. The workflow uses GitHub's Pages artifact deployment, so a `gh-pages` branch is unnecessary. Vite is configured with `base: '/'` for the requested user site. A repository with a different name needs a different base path and corresponding asset/metadata updates.

Reference: [Vite's official GitHub Pages deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).

## Edit content and assets

- `src/content.js`: biography identifiers, contact links, skill groups, projects, reported metrics, and timeline entries.
- `src/main.jsx`: reusable section components and narrative copy.
- `src/styles.css`: reusable color tokens, typography, layouts, breakpoints, and motion preferences.
- `public/images/dwiky-profile.jpg`: original supplied photograph, preserved without facial alterations.
- `public/images/dwiky-profile.webp`: optimized derivative used by the hero, when generated.
- `public/cv/Dwiky-Christian-Febriano-CV.pdf`: actual supplied CV, downloaded by the CV button.
- `index.html`: SEO title, description, social metadata, and Google Fonts.
- `public/sitemap.xml` and `public/robots.txt`: public indexing metadata.

All project visuals are explicitly labeled abstract concept illustrations, not product screenshots. Research metrics are reported experimental evaluations, not clinical performance claims. Budget Lens uses dummy data and simulated receipt extraction. Farm Guardian links to a Windows build repository, not a browser game. The company profile entry is an ongoing development project, not an employment claim. Review the ongoing status and semester description as time passes.

Only the fonts use an external CDN; the site works with system font fallbacks if it is unavailable. All image and PDF assets are local. Links to GitHub, LinkedIn, and the salon website are external. The email button opens the visitor's email application; copying an email requires a secure browser context (HTTPS or localhost), and displays a fallback message if clipboard access fails.

## Before publishing

- Confirm all personal information and the public CV are suitable to share.
- Run `npm run build` and check `npm run preview` at desktop and mobile widths.
- Confirm the portrait, CV download, menu, project filters, external links, and contact buttons.
- Check keyboard focus and the operating system's reduced-motion setting.
- The Romi Salon URL was supplied by the owner but could not be reached by the research browser during implementation. Verify its availability independently before publishing.

## Delivery status

Source and production build are prepared locally. The publishing target is [dwikycf.github.io](https://dwikycf.github.io/), backed by the public [DwikyCF.github.io repository](https://github.com/DwikyCF/DwikyCF.github.io). GitHub Actions builds and publishes pushes to `main`; check the repository's Actions and Pages settings for current deployment status.

Verified during implementation: production build succeeded; local production HTML, optimized portrait, and PDF returned HTTP 200; the downloadable CV SHA-256 matched the original; project filters, mobile navigation, and email copying worked in the browser. Horizontal overflow checks passed at 320px, 390px, and 768px viewport sizes after corrections. Browser inspection reported no JavaScript console errors. These are browser viewport checks, not physical device tests.
