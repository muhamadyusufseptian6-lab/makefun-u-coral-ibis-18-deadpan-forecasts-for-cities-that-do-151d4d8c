import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Deadpan forecast for a city that does not exist.
// One line, at most 160 characters, written verbatim to /output/entry.txt.
const ENTRY =
  "In Gloombury, rain falls upward at 14 miles an hour until 6 p.m., when it remembers gravity. Carry an umbrella — and stand on it.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
