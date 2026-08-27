import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { focuses, profile, projects } from "../src/portfolio/content.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const slugs = new Set();
const sharedAssets = [
  "/images/chinmay-bitne-portrait.png",
];

for (const asset of sharedAssets) {
  try {
    await access(join(root, "public", asset.replace(/^\//, "")));
  } catch {
    errors.push(`Shared asset not found at ${asset}`);
  }
}

for (const focus of Object.keys(focuses)) {
  const resume = profile.resumes[focus];
  if (!resume) {
    errors.push(`${focus}: résumé path is missing`);
    continue;
  }

  try {
    const file = await readFile(join(root, "public", resume.replace(/^\//, "")));
    if (file.subarray(0, 5).toString() !== "%PDF-") errors.push(`${focus}: résumé is not a valid PDF at ${resume}`);
  } catch {
    errors.push(`${focus}: résumé not found at ${resume}`);
  }
}

for (const project of projects) {
  if (!project.slug || slugs.has(project.slug)) errors.push(`Project slug is missing or duplicated: ${project.slug}`);
  slugs.add(project.slug);

  for (const field of ["title", "summary", "impact", "challenge", "contribution"]) {
    if (!project[field]?.trim()) errors.push(`${project.slug}: missing ${field}`);
  }

  if (!Array.isArray(project.results) || project.results.length === 0) errors.push(`${project.slug}: missing results`);
  if (!Array.isArray(project.stack) || project.stack.length === 0) errors.push(`${project.slug}: missing stack`);

  const media = [project.cover, project.image, ...(project.gallery ?? [])].filter(Boolean);
  for (const asset of media) {
    try {
      await access(join(root, "public", asset.replace(/^\//, "")));
    } catch {
      errors.push(`${project.slug}: asset not found at ${asset}`);
    }
  }
}

for (const [focus, data] of Object.entries(focuses)) {
  for (const slug of data.featured) {
    if (!slugs.has(slug)) errors.push(`${focus}: unknown featured project ${slug}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${projects.length} projects and ${Object.keys(focuses).length} role-focused portfolios.`);
}
