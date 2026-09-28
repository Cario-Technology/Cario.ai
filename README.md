# Cario Astro

Converted from the supplied HTML website, preserving its content, design, hash navigation, FAQ accordions, mobile menu, and mailto contact links.

## Local development

Use Node.js 24 (see .node-version).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally http://127.0.0.1:4321).

## Project structure

- src/pages/index.astro: homepage and existing hash-routed sections.
- public/assets/: original assets and extracted embedded images.
- public/styles/site.css: original global styles.
- public/scripts/site.js: original browser behavior.
- dist/: generated production website.

## Cloudflare Pages

This is a static site; it does not need a server rendering adapter. The Wrangler configuration targets Pages with pages_build_output_dir set to dist.

For Git integration, select the Astro framework preset, use npm run build as the build command and dist as the output directory. Set the root directory to this project folder. Use Node.js 24.18.0 if the dashboard requires an explicit NODE_VERSION.

For direct deployment, authenticate with npx wrangler login, then run npm run deploy. Adjust the name in wrangler.jsonc if your Pages project uses another name. Deployment requires your Cloudflare account and is not performed by the conversion.

Build locally with npm run build. Use npm run preview to preview the production build or npm run preview:pages for Cloudflare Pages local emulation.

Cloudflare setup reference: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## Fonts

The source references Neuzeit Grotesk font files, but those files were not supplied. The stylesheet retains local font lookup and the existing system font fallbacks, with unavailable file URLs removed to avoid failed requests. If you have licensed font files, place them in public/assets/fonts/ and add their URLs to the corresponding @font-face rules in public/styles/site.css.
