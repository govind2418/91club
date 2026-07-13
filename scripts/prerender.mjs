import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const { renderRoute } = await import(resolve(root, 'dist-ssr/entry-server.js'));
const { routes, notFoundRoute } = await import(resolve(root, 'src/routes.js'));
const { SITE_URL } = await import(resolve(root, 'src/data/siteConfig.js'));

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

const manifestPath = resolve(distDir, '.vite/manifest.json');
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf-8')) : {};

function collectCssRecursive(entryKey, seen = new Set()) {
  if (seen.has(entryKey)) return [];
  seen.add(entryKey);
  const entry = manifest[entryKey];
  if (!entry) return [];
  const css = [...(entry.css || [])];
  for (const importKey of entry.imports || []) {
    css.push(...collectCssRecursive(importKey, seen));
  }
  return css;
}

function assetTagsFor(routeName) {
  const key = `src/pages/${routeName}.jsx`;
  const entry = manifest[key];
  if (!entry) return '';
  const tags = [];
  if (entry.file) {
    tags.push(`<link rel="modulepreload" href="/${entry.file}">`);
  }
  const cssFiles = [...new Set(collectCssRecursive(key))];
  for (const cssFile of cssFiles) {
    tags.push(`<link rel="stylesheet" href="/${cssFile}">`);
  }
  return tags.join('\n    ');
}

function buildHtml(appHtml, helmet, routeName) {
  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
    assetTagsFor(routeName)
  ]
    .filter(Boolean)
    .join('\n    ');

  let page = template.replace(/<title>.*?<\/title>\s*/s, '');
  page = page.replace('</head>', `    ${headTags}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return page;
}

function outputPathFor(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html');
  const clean = routePath.replace(/^\//, '');
  const dir = resolve(distDir, clean);
  mkdirSync(dir, { recursive: true });
  return resolve(dir, 'index.html');
}

let count = 0;
for (const route of routes) {
  const { html, helmet } = await renderRoute(route.path);
  const finalHtml = buildHtml(html, helmet, route.name);
  writeFileSync(outputPathFor(route.path), finalHtml, 'utf-8');
  count += 1;
}

// Dedicated 404.html for static host error pages (Netlify/Cloudflare Pages convention)
const notFoundResult = await renderRoute('/__not_found__');
const notFoundHtml = buildHtml(notFoundResult.html, notFoundResult.helmet, notFoundRoute.name);
writeFileSync(resolve(distDir, '404.html'), notFoundHtml, 'utf-8');

// Clean up the intermediate SSR bundle, it is not needed in the deployed output
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
rmSync(resolve(distDir, '.vite'), { recursive: true, force: true });

// Generate sitemap.xml and robots.txt from the live route list and SITE_URL so
// they can never drift out of sync with the actual domain or page set again.
const HIGH_PRIORITY = new Set(['/', '/91-club-login', '/91-club-register', '/91-club-colour-prediction']);
const LOW_PRIORITY = new Set(['/privacy-policy', '/terms', '/responsible-gaming']);
const today = new Date().toISOString().slice(0, 10);

function priorityFor(path) {
  if (path === '/') return '1.0';
  if (HIGH_PRIORITY.has(path)) return '0.9';
  if (LOW_PRIORITY.has(path)) return '0.3';
  return '0.7';
}

function changefreqFor(path) {
  if (path === '/') return 'daily';
  if (LOW_PRIORITY.has(path)) return 'yearly';
  return 'weekly';
}

const sitemapEntries = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqFor(route.path)}</changefreq>
    <priority>${priorityFor(route.path)}</priority>
  </url>`
  )
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
writeFileSync(resolve(distDir, 'robots.txt'), robotsTxt, 'utf-8');

console.log(`Prerendered ${count} routes + 404.html`);
console.log(`Generated sitemap.xml (${routes.length} URLs) and robots.txt for ${SITE_URL}`);
