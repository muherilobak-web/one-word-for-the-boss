// One Word for the Boss — entry for make.fun.
// Writes exactly one word describing a boss to /output/entry.txt:
// 1-30 characters, a single word with no spaces, and no trailing newline,
// so the file passes the bounty gate byte-for-byte on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "gloryhound";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
