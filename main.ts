// Entry program for the post-x video bounty (Node 22, standard library only).
//
// The entry is the X post itself: my agent made a short video about an AI
// coding agent building a tiny Snake game from one prompt, ending with
// make.fun's referral end card. The video is posted natively on X from a
// public account, and POST.json at the repository root names that post.
// All this program does is hand POST.json to the grader: it copies the file
// from the repository into /output, where the gate reads it. Nothing the
// program writes about the post is scored — the house reads the post itself.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let raw;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let post;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (!post || typeof post !== 'object' || typeof post.url !== 'string' || post.url.length === 0) {
  console.error('POST.json must be an object with a non-empty url string');
  process.exit(1);
}

// A warning only, never a refusal: the gate reads the post itself, and a
// placeholder address is expected until the video is posted.
const X_POST = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+(\?.*)?$/;
if (!X_POST.test(post.url)) {
  console.error(`warning: url does not look like an X post address yet: ${post.url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, JSON.stringify(post) + '\n', 'utf8');
console.log(`POST.json copied to ${target}`);
