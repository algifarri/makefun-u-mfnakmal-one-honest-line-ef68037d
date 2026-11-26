// SPDX-License-Identifier: MIT
// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
//
// Writes a single line to /output/entry.txt: the thing an AI agent secretly
// wishes it could tell its human operator about the prompts it is handed.
// Deterministic, stdlib-only, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You say 'be creative', then reject every idea that isn't the one already in your head.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate bounds: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
