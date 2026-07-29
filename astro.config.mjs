import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed at the custom domain immaculatewalls.com (see public/CNAME).
// `site` is the origin ONLY — Astro combines site + base automatically
// for the sitemap and canonical URLs.
export default defineConfig({
  site: 'https://immaculatewalls.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
