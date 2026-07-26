// GitHub Pages project sites (no custom domain) are served from a subpath
// (e.g. /immaculatewalls/), so every root-relative link and public/ asset
// path must be prefixed with the configured `base`. Once a custom domain is
// attached and `base` in astro.config.mjs goes back to '/', this becomes a
// no-op automatically.
export function withBase(path) {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}` || '/';
}
