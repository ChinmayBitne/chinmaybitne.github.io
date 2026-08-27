import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { focuses, profile, projects } from "../src/portfolio/content.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const source = join(dist, "index.html");
const siteUrl = "https://chinmaybitne.github.io";
const defaultImage = `${siteUrl}/images/chinmay-bitne-portrait.png`;

const routeEntries = [
  {
    route: "ai-ml",
    title: `${focuses.ai.eyebrow} | ${profile.shortName}`,
    description: "Explore Chinmay Bitne's work in RAG, AI agents, NLP, multimodal systems, and computer vision.",
    image: defaultImage,
  },
  {
    route: "data",
    title: `${focuses.data.eyebrow} | ${profile.shortName}`,
    description: "Explore Chinmay Bitne's work in data science, analytics, dashboards, predictive modeling, and data engineering.",
    image: defaultImage,
  },
  ...projects.map((project) => ({
    route: `projects/${project.slug}`,
    title: `${project.title} Case Study | ${profile.shortName}`,
    description: project.summary,
    image: new URL(project.cover, siteUrl).href,
  })),
];

const escapeAttribute = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function applyMetadata(html, metadata) {
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);
  const canonicalUrl = `${siteUrl}/${metadata.route}/`;
  const replacements = [
    [/<title>.*?<\/title>/s, `<title>${title}</title>`],
    [/<meta\s+name="description"[^>]*>/s, `<meta name="description" content="${description}" />`],
    [/<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`],
    [/<meta\s+property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`],
    [/<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`],
    [/<meta\s+property="og:image"[^>]*>/, `<meta property="og:image" content="${metadata.image}" />`],
    [/<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`],
    [/<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`],
    [/<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${metadata.image}" />`],
    [/<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`],
  ];

  return replacements.reduce((document, [pattern, replacement]) => {
    if (!pattern.test(document)) throw new Error(`Missing metadata element for ${metadata.route}: ${pattern}`);
    return document.replace(pattern, replacement);
  }, html);
}

const sourceHtml = await readFile(source, "utf8");

for (const entry of routeEntries) {
  const routeDirectory = join(dist, ...entry.route.split("/"));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(join(routeDirectory, "index.html"), applyMetadata(sourceHtml, entry));
}

await writeFile(source, applyMetadata(sourceHtml, routeEntries[0]));
await writeFile(join(dist, "404.html"), sourceHtml);
console.log(`Generated ${routeEntries.length} static route entries and a GitHub Pages fallback.`);
