/**
 * Post-build script for Cloudflare Pages deployment.
 *
 * @astrojs/cloudflare outputs:
 *   dist/client/  → static assets
 *   dist/server/  → Worker code (entry.mjs + chunks/)
 *
 * CF Pages Advanced Mode needs _worker.js in the build output root.
 * This script copies the server bundle into dist/client/ so CF Pages
 * can find it when build output directory is set to "dist/client".
 */

import { cpSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const server = './dist/server';
const client = './dist/client';

if (!existsSync(server)) {
  console.log('No dist/server found — skipping (pure static build).');
  process.exit(0);
}

// Copy chunks (imported by entry.mjs)
cpSync(join(server, 'chunks'), join(client, 'chunks'), { recursive: true });

// Copy any loose .mjs files the entry might import
const extras = ['virtual_astro_middleware.mjs'];
for (const file of extras) {
  const src = join(server, file);
  if (existsSync(src)) copyFileSync(src, join(client, file));
}

// entry.mjs → _worker.js  (CF Pages Advanced Mode entry point)
copyFileSync(join(server, 'entry.mjs'), join(client, '_worker.js'));

console.log('✓ Worker files copied to dist/client/ for CF Pages deployment');
