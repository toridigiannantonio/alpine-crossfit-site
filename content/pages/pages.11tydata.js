// Shared defaults for content/pages/*.md.
//
// Two jobs:
//
// 1. Give the master FAQ page (/faq/) the full list of canonical FAQ ids
//    automatically, so its FAQPage JSON-LD covers everything it displays
//    without anyone hand-maintaining a second copy of the list. Every other
//    page sets its own short `faqIds` in front matter.
//
// 2. Resolve {{ site.* }} references inside front matter.
//
//    Eleventy 3 removed `dataTemplateEngine`, so front matter is NOT run
//    through Nunjucks any more — a `{{ site.pricing.tiers[0].price }}` in a
//    description or dek renders to the browser verbatim. It did, on /pricing/,
//    /visit/ and /wellness/, in the meta description Google shows and in two
//    hero paragraphs.
//
//    Bodies are fine: those go through the template engine normally. This
//    resolves the front-matter case against the same `site` data, so a price
//    or address stays single-sourced there too. Anything it cannot resolve is
//    left untouched, and the build guard in eleventy.config.js fails the build
//    if an unresolved {{ }} ever reaches the output again.
import faqs from "../../_data/faqs.js";

const REF = /\{\{\s*(site\.[A-Za-z0-9_.[\]]+?)\s*\}\}/g;

function lookup(path, root) {
  return path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .slice(1) // drop the leading "site"
    .reduce((acc, key) => (acc == null ? acc : acc[key]), root);
}

function resolve(value, site) {
  if (typeof value === "string") {
    return value.replace(REF, (whole, path) => {
      const hit = lookup(path, site);
      return hit === undefined || hit === null ? whole : String(hit);
    });
  }
  if (Array.isArray(value)) return value.map((v) => resolve(v, site));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, resolve(v, site)])
    );
  }
  return value;
}

// Front-matter keys that may carry a {{ site.* }} reference. Deliberately a
// whitelist: extraSchemas and friends are left strictly alone.
const RESOLVED = [
  "title",
  "description",
  "dek",
  "heading",
  "trustStrip",
  "ogTitle",
  "ogDescription",
  "finalCta",
  "heroCtas",
];

const computed = Object.fromEntries(
  RESOLVED.map((key) => [key, (data) => resolve(data[key], data.site)])
);

export default {
  eleventyComputed: {
    ...computed,
    faqIds: (data) =>
      data.faqIds ||
      (data.page.url === "/faq/" ? faqs.items.map((i) => i.id) : undefined),
  },
};
