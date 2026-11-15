import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live address is picked up automatically on Vercel.
// To use a custom domain, set SITE_URL in Vercel's environment variables.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://why-do-i-feel-this.vercel.app');

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
