import { defineConfig } from 'astro/config';

// When a custom domain (e.g. immaculatewalls.com) is attached via GitHub Pages
// CNAME, `site` should be the domain root and `base` should stay '/'.
// If instead this is served from https://rhyse76.github.io/immaculatewalls/
// with no custom domain, change `base` to '/immaculatewalls'.
export default defineConfig({
  site: 'https://immaculatewalls.com',
  base: '/',
  output: 'static',
});
