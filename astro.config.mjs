import { defineConfig } from 'astro/config';

// Currently deployed at https://rhyse76.github.io/immaculatewalls/ (no
// custom domain yet), so `base` must match the repo name or every
// root-relative link/asset 404s.
//
// Once a custom domain (e.g. immaculatewalls.com) is attached via a
// public/CNAME file, change `site` to the domain root and `base` back to '/'.
export default defineConfig({
  site: 'https://rhyse76.github.io/immaculatewalls',
  base: '/immaculatewalls',
  output: 'static',
});
