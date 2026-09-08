// Theme and source definitions for the /blog/ archive, re-exported from
// _lib/blog-taxonomy.js so templates can read them as `blogThemes.*`.
// The classifier itself lives in _lib so content/blog/blog.11tydata.js can
// import it without going through Eleventy's data cascade.
import { THEMES, SOURCES, themeById, sourceById } from "../_lib/blog-taxonomy.js";

export default { THEMES, SOURCES, themeById, sourceById };
