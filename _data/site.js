// Site-wide data accessible in every template as `site.*`.
// Anything Lisa shouldn't have to know about (URLs, schema constants,
// nav structure, etc.) lives here, NOT in editable content files.

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Short content hash of a static asset, used as a ?v= cache-busting token.
// The value only changes when the file's contents change, so browsers keep
// using their cached copy until we actually ship a new version of the file.
// Without this, a returning visitor can sit on a stale stylesheet for a year
// (see the immutable cache header in netlify.toml).
function assetHash(path) {
  try {
    return createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 8);
  } catch {
    return "dev";
  }
}

export default {
  // Cache-busting tokens for /assets — see assetHash() above.
  cssVersion: assetHash("assets/css/styles.css"),
  mainJsVersion: assetHash("assets/js/main.js"),
  imagesJsVersion: assetHash("assets/js/images.js"),
  // The favicon keeps its filename across redesigns but sits under the
  // year-long immutable cache for /assets/img, so it needs a token too —
  // otherwise a returning visitor's browser tab keeps the old icon.
  faviconVersion: assetHash("assets/img/favicon.png"),

  name: "Alpine CrossFit",
  url: "https://alpinecrossfit.com",
  tagline: "CrossFit gym in Wheat Ridge, CO",

  // Contact / location — used in footer, schema.org, and headers
  address: {
    street: "12090 West 50th Place",
    city: "Wheat Ridge",
    region: "CO",
    postalCode: "80033",
    country: "US",
  },
  geo: { latitude: "39.788365", longitude: "-105.135648" },
  phone: "+1-720-964-1505",
  phoneDisplay: "(720) 964-1505",
  phoneSms: "+17209641505",
  founded: "2010",
  ownershipSince: "2026",

  // Social
  instagram: "https://www.instagram.com/alpine_fitness_co/",

  // Reviews — surfaced in schema and on homepage
  rating: { value: "5.0", count: "180" },

  // Hours, used by schedule schema
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "18:30",
    },
    { days: ["Saturday", "Sunday"], opens: "08:00", closes: "10:00" },
  ],

  serviceAreas: ["Wheat Ridge", "Lakewood", "Arvada", "Applewood", "Golden"],

  // Primary nav (top of every page)
  primaryNav: [
    { label: "About", url: "/about/" },
    { label: "Pricing", url: "/pricing/" },
    { label: "Blog", url: "/blog/" },
    { label: "Location", url: "/visit/" },
  ],

  // Footer columns (locked layout — content edits should not change this)
  footerColumns: {
    train: [
      { label: "CrossFit", url: "/crossfit/" },
      { label: "HYROX", url: "/hyrox/" },
      { label: "Personal Training", url: "/personal-training/" },
      { label: "Wellness Center", url: "/wellness/" },
      { label: "Prime Vitality", url: "/prime-vitality/" },
      { label: "Beginners", url: "/beginners/" },
    ],
    info: [
      { label: "About", url: "/about/" },
      { label: "Coaches", url: "/coaches/" },
      { label: "Pricing", url: "/pricing/" },
      { label: "Schedule", url: "/schedule/" },
      { label: "Blog", url: "/blog/" },
      { label: "FAQ", url: "/faq/" },
      { label: "What to Expect", url: "/what-to-expect/" },
      { label: "Drop-In", url: "/drop-in/" },
      { label: "Location & Hours", url: "/visit/" },
    ],
    areas: [
      { label: "Wheat Ridge", url: "/gym/wheat-ridge/" },
      { label: "Arvada", url: "/gym/arvada/" },
      { label: "Lakewood", url: "/gym/lakewood/" },
      { label: "Applewood", url: "/gym/applewood/" },
      { label: "Golden", url: "/gym/golden/" },
    ],
  },
};
