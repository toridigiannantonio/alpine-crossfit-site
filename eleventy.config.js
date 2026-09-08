// Eleventy build configuration for Alpine CrossFit.
//
// Content lives in /content as markdown files. Templates and partials
// live in /_includes. Everything renders to /_site, which Netlify serves.
//
// Two content collections feed into Decap CMS:
//   - content/pages/   -> generic pages (homepage, about, pricing, etc.)
//   - content/coaches/ -> individual coach bio pages

export default function (eleventyConfig) {
  // ----- Files / dirs to ignore -----
  // The 26-file `originalPages` list that used to live here is gone along
  // with the files it named: pre-11ty HTML pages (~14,400 words) that were
  // still on disk, still looked authoritative, and were never built. Editing
  // one changed nothing on the live site. The hand-maintained sitemap.xml
  // went with them — sitemap.njk generates it from the real page list.
  eleventyConfig.ignores.add("CMS-SETUP.md");
  eleventyConfig.ignores.add("DEPLOY.md");
  // Internal ownership/handoff notes — never meant to be a public page.
  eleventyConfig.ignores.add("HANDOFF.md");
  eleventyConfig.ignores.add("_backup/**");
  eleventyConfig.ignores.add("README.md");

  // ----- Passthrough copy: assets and CMS files served as-is -----
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  // Image-block JSON files (existing CMS pattern for hero swaps)
  eleventyConfig.addPassthroughCopy("content/images");

  // ----- Collections -----
  eleventyConfig.addCollection("coaches", (api) =>
    api
      .getFilteredByGlob("content/coaches/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  eleventyConfig.addCollection("pages", (api) =>
    api.getFilteredByGlob("content/pages/*.md")
  );

  // Blog posts, newest first. Shared layout/permalink live in
  // content/blog/blog.json so a post file only needs title/description/date.
  eleventyConfig.addCollection("blog", (api) =>
    api
      .getFilteredByGlob("content/blog/*.md")
      .sort((a, b) => b.date - a.date)
  );

  // All published URLs (for the auto-generated sitemap)
  eleventyConfig.addCollection("sitemapEntries", (api) => {
    const all = api.getAll();
    return all
      .filter((item) => {
        if (item.data.eleventyExcludeFromCollections) return false;
        if (item.data.sitemap === false) return false;
        // A noindex page in the sitemap is a contradictory signal to Google:
        // "crawl this" and "don't index this" at once. /intro/ was doing
        // exactly that. Excluding by the noindex flag means a page can never
        // fall back into this state by someone forgetting `sitemap: false`.
        if (item.data.noindex) return false;
        // The CMS login screen carries its own noindex meta tag but was
        // still listed here — same contradictory signal.
        if (item.url && item.url.startsWith("/admin")) return false;
        if (!item.url || !item.url.endsWith("/")) {
          if (item.url && !item.url.endsWith(".html")) return false;
        }
        return Boolean(item.url);
      })
      .sort((a, b) => (a.data.sitemapOrder || 99) - (b.data.sitemapOrder || 99));
  });

  // ----- Filters used in templates -----
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    const baseUrl = base || "https://alpinecrossfit.com";
    if (!url) return baseUrl;
    if (url.startsWith("http")) return url;
    return baseUrl.replace(/\/$/, "") + url;
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toISOString().slice(0, 10);
  });

  // Human-readable date for blog posts, e.g. "May 18, 2026". UTC avoids an
  // off-by-one day when front-matter dates parse as midnight UTC.
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("jsonStringify", (value) => JSON.stringify(value));

  // Resolve a list of FAQ ids from front matter into the canonical entries in
  // _data/faqs.js. Both the visible <details> list and that page's FAQPage
  // JSON-LD run through this same filter, so a page's structured data can
  // never disagree with what a visitor reads. An unknown id fails the build
  // instead of silently rendering nothing.
  eleventyConfig.addFilter("faqPick", (ids, faqs) => {
    if (!ids || !faqs) return [];
    const byId = new Map(faqs.items.map((i) => [i.id, i]));
    return ids.map((id) => {
      const hit = byId.get(id);
      if (!hit) throw new Error(`Unknown FAQ id "${id}" — see _data/faqs.js`);
      return hit;
    });
  });

  // All canonical FAQ entries in one group, for the /faq/ master page.
  eleventyConfig.addFilter("faqGroup", (faqs, groupId) =>
    faqs.items.filter((i) => i.group === groupId)
  );

  // Hides the "Workout of the Day" block at the end of a blog post without
  // deleting it. The workouts stay in the markdown files and in git; flip
  // site.showWods to true in _data/site.js to bring them back everywhere.
  eleventyConfig.addFilter("hideWod", (html, show) => {
    if (show) return html;
    return String(html).replace(
      /(?:<hr\s*\/?>\s*)?<h2[^>]*>\s*Workout of the Day\s*<\/h2>[\s\S]*$/i,
      ""
    );
  });

  // Custom Nunjucks "split" filter — used by coach.njk to derive a
  // first name from the full name. Some Nunjucks builds don't ship it.
  eleventyConfig.addFilter("split", (value, sep) => String(value).split(sep));

  // ----- Directory layout -----
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
