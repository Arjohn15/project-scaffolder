#!/usr/bin/env node
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

// Get the absolute path of your project-scaffolder folder
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The actual CLI executable is inside the "bin" folder, not "src"!
const plopJsPath = path.join(
  __dirname,
  "node_modules",
  "plop",
  "bin",
  "plop.js",
);
const plopfile = path.join(__dirname, "plopfile.ts");

// Grab any extra arguments the user types (if any)
const args = process.argv.slice(2);

// Run the process synchronously
const result = spawnSync(
  process.execPath,
  [plopJsPath, "--plopfile", plopfile, "--dest", process.cwd(), ...args],
  {
    stdio: "inherit",
  },
);

// If it fails for any reason, print the error so we can see it
if (result.error) {
  console.error("Failed to start my-scaffold:", result.error);
}
