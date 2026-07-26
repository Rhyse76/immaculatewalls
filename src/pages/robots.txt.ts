import type { APIRoute } from 'astro';
import { withBase } from '../utils/paths.js';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
