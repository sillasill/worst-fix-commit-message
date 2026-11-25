import { mkdirSync, writeFileSync } from "node:fs";

// One commit-message line, 53 characters: the gate allows 1 to 100.
const MESSAGE = "fixed the crash by removing the button that caused it";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
