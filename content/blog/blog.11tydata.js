// Shared defaults for every file in content/blog, so an individual post
// only needs a title, description, and date.
//
// Four things happen here:
//
// 1. Future-dated posts stay dormant. Posts are written in batches and dated
//    ahead; a post builds no page and appears in no listing or sitemap until
//    its date arrives. The scheduled rebuild in
//    .github/workflows/daily-publish.yml is what brings each day's post to life.
//
// 2. permalinkOverride wins. When two posts would land on the same URL (the
//    old auto-publisher occasionally produced two posts with the same title),
//    the newer one carries a permalinkOverride in its front matter to break
//    the tie. Without this, a build fails outright with
//    DuplicatePermalinkOutputError.
//
// 3. Every post is classified — article or note, plus a theme and the Stoic
//    being quoted — by _lib/blog-taxonomy.js, which reads the post file and
//    infers all three. Nothing is stored in the post's own front matter, so
//    the 153 files stay exactly as they were written.
//
// 4. Notes are noindexed. The daily post is worth reading and not worth
//    asking Google to index 147 of: median 144 visible words, 13 repeated
//    titles, and almost no inbound links. Before this, blog posts were 82%
//    of the sitemap. Notes stay live, linked, and searchable at /blog/ —
//    they just carry robots noindex,follow and stay out of sitemap.xml.
//    The six hand-written articles are unaffected and still indexed.

import { readFileSync } from "node:fs";
import { classify } from "../../_lib/blog-taxonomy.js";

const isFuture = (data) => {
  if (!data.page || !data.page.date) return false;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return data.page.date.getTime() > today.getTime();
};

// Read + classify once per file per build rather than once per computed key.
const cache = new Map();
function taxonomy(data) {
  const path = data.page && data.page.inputPath;
  if (!path) return { theme: null, source: null, type: "note" };
  if (cache.has(path)) return cache.get(path);
  let raw = "";
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    /* a missing file just means no classification, not a broken build */
  }
  const result = classify({
    filename: path,
    title: data.title || "",
    description: data.description || "",
    raw,
  });
  cache.set(path, result);
  return result;
}

export default {
  layout: "layouts/post.njk",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => {
      if (isFuture(data)) return false;
      return data.permalinkOverride || `/blog/${data.page.fileSlug}/`;
    },
    eleventyExcludeFromCollections: (data) => isFuture(data),

    // article | note
    postType: (data) => taxonomy(data).type,
    // theme id, see THEMES in _lib/blog-taxonomy.js
    theme: (data) => taxonomy(data).theme,
    // epictetus | seneca | marcus-aurelius | null
    source: (data) => taxonomy(data).source,

    // Notes are readable but not indexed, and stay out of the sitemap.
    // Articles are untouched.
    noindex: (data) => taxonomy(data).type === "note",
    sitemap: (data) => taxonomy(data).type !== "note",
  },
};
