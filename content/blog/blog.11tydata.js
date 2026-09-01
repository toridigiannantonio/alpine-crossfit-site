// Shared defaults for every file in content/blog, so an individual post
// only needs a title, description, and date.
//
// Two things happen here:
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

const isFuture = (data) => {
  if (!data.page || !data.page.date) return false;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return data.page.date.getTime() > today.getTime();
};

export default {
  layout: "layouts/post.njk",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => {
      if (isFuture(data)) return false;
      return data.permalinkOverride || `/blog/${data.page.fileSlug}/`;
    },
    eleventyExcludeFromCollections: (data) => isFuture(data),
  },
};
