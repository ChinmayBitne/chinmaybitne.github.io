import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/portfolio/content.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const source = join(dist, "index.html");
const routes = ["ai-ml", "data", ...projects.map((project) => `projects/${project.slug}`)];

for (const route of routes) {
  const routeDirectory = join(dist, ...route.split("/"));
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(source, join(routeDirectory, "index.html"));
}

await copyFile(source, join(dist, "404.html"));
console.log(`Generated ${routes.length} static route entries and a GitHub Pages fallback.`);
