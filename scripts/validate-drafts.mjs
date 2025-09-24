#!/usr/bin/env node
import fs from node:fs/promises;
import path from node:path;

const ROOT = process.cwd();
const DRAFTS_DIR = path.join(ROOT, assets, drafts);

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function validateDraft(dir) {
  const jsonPath = path.join(dir, draft.json);
  const name = path.basename(dir);
  const result = { name, ok: true, missing: [], info: null };
  try {
    const raw = await fs.readFile(jsonPath, utf8);
    const data = JSON.parse(raw);
    result.info = { title: data.title, hashtags: data.hashtags, images: data.images };
    if (Array.isArray(data.images)) {
      for (const rel of data.images) {
        const abs = path.join(dir, rel);
        if (!(await fileExists(abs))) {
          result.ok = false;
          result.missing.push(rel);
        }
      }
    }
  } catch (e) {
    result.ok = false;
    result.missing.push(draft.json
