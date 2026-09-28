import { defineConfig } from 'astro/config';

// Static output is served directly by Cloudflare Pages.
export default defineConfig({
  output: 'static',
  outDir: './dist',
  // Avoid Windows network-drive probing in restricted local environments.
  vite: { resolve: { preserveSymlinks: true } },
});
