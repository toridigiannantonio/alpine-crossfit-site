// Shared defaults for content/pages/*.md.
//
// The only job here: give the master FAQ page (/faq/) the full list of
// canonical FAQ ids automatically, so its FAQPage JSON-LD covers everything
// it displays without anyone hand-maintaining a second copy of the list.
// Every other page sets its own short `faqIds` in front matter.
import faqs from "../../_data/faqs.js";

export default {
  eleventyComputed: {
    faqIds: (data) =>
      data.faqIds || (data.page.url === "/faq/" ? faqs.items.map((i) => i.id) : undefined),
  },
};
