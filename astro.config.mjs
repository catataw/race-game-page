import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/f1-racing-landing',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
