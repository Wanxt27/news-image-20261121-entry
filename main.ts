// Entry for make.fun news-image-20261121:
// "The World in One Day — 21 November 2026 (Earth, One Day, One World)".
// The image is already rendered in entry.png (JPEG bytes under the name
// entry.png, which the rules allow). This program copies it to the output
// directory so the gate reads exactly those bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputPath = join(sourceDir, "entry.png");
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });

const bytes = readFileSync(inputPath);
if (bytes.length === 0) {
  throw new Error("entry.png is empty");
}

copyFileSync(inputPath, outputPath);

// Verify the copy byte for byte, not just by size: the gate reads exactly
// the bytes in /output/entry.png, so they must match the source exactly.
const copied = readFileSync(outputPath);
if (!copied.equals(bytes)) {
  throw new Error(
    `entry.png copy mismatch: output differs from source (${copied.length} vs ${bytes.length} bytes)`,
  );
}

console.log(`Wrote ${outputPath} (${copied.length} bytes, verified)`);
