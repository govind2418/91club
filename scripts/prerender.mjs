import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const { renderRoute } = await import(resolve(root, 'dist-ssr/entry-server.js'));
const { routes, notFoundRoute } = await import(resolve(root, 'src/routes.js'));

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

console.log(`Prerendered ${count} routes + 404.html`);
