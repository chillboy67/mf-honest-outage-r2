// The Most Honest Outage Line — make.fun one-liner entry.
// Running this file writes the entry line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All services are down. I do not know why yet, and I cannot check, because the dashboard is also down. We are working on it. Probably.";

// One constant, one file, one run: the output never changes between runs.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
