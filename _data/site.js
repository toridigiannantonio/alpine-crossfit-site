// Site-wide data accessible in every template as `site.*`.
// Anything Lisa shouldn't have to know about (URLs, schema constants,
// nav structure, etc.) lives here, NOT in editable content files.

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Business facts a non-developer may need to change — prices, hours, address,
// phone, wellness amenities, drive times — live in _data/gym.json so Decap CMS
// can edit them (admin/config.yml -> "Gym details"). They are re-exported
// below, so templates still read everything from `site.*` and nothing else in
// the repo hard-codes a price or an address.
import gym from "./gym.json" with { type: "json" };

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
  archiveJsVersion: assetHash("assets/js/blog-archive.js"),
  // The favicon keeps its filename across redesigns but sits under the
  // year-long immutable cache for /assets/img, so it needs a token too —
  // otherwise a returning visitor's browser tab keeps the old icon.
  faviconVersion: assetHash("assets/img/favicon.png"),

  // Set true to show the "Workout of the Day" block on blog posts again.
  // The workouts are still in the post files — this only controls display.
  showWods: false,

  name: "Alpine CrossFit",
  url: "https://alpinecrossfit.com",
  tagline: "CrossFit gym in Wheat Ridge, CO",

  // Contact / location — used in footer, schema.org, and headers
  address: gym.address,
  geo: { latitude: "39.788365", longitude: "-105.135648" },
  phone: gym.phone,
  phoneDisplay: gym.phoneDisplay,
  phoneSms: gym.phoneSms,
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

  // ------------------------------------------------------------------
  // Nearby cities and REAL drive times to 12090 W 50th Pl.
  //
  // These used to live on five near-duplicate /gym/<city>/ landing pages
  // (40–46% word-for-word identical to each other — a doorway-page pattern
  // Google's spam policy treats as a problem for a single physical
  // location). The pages are gone; the useful part — the actual drive
  // times — is here and renders in one "Areas we serve" block on /visit/.
  // ------------------------------------------------------------------
  areas: gym.areas,

  // Flat list of city names — used by the HealthClub areaServed schema.
  serviceAreas: ["Wheat Ridge", "Lakewood", "Arvada", "Applewood", "Golden"],

  // ------------------------------------------------------------------
  // Hours, in display form. site.hours (above) stays machine-readable for
  // schema.org; these are the strings the location card and schedule render.
  // ------------------------------------------------------------------
  hoursDisplay: gym.hoursDisplay,
  memberAccess: gym.memberAccess,
  parking: gym.parking,

  // Google Maps embed for the location partial.
  mapEmbed:
    "https://www.google.com/maps?q=12090+West+50th+Pl,+Wheat+Ridge,+CO+80033&output=embed",

  // ------------------------------------------------------------------
  // Class schedule — single source for /schedule/ and the homepage strip.
  // ------------------------------------------------------------------
  classSchedule: [
    {
      heading: "CrossFit",
      lines: [
        "<strong>Mon–Fri:</strong> 5:30, 6:30, 8:00 AM · 12:00, 3:30, 4:30, 5:30 PM",
        "<strong>Saturday:</strong> 8:00, 9:00 AM",
        "<strong>Sunday:</strong> 9:00 AM",
      ],
      note: "Every class is capped at 15 athletes and coached by a CF-L2 certified professional.",
    },
    {
      heading: "Prime Vitality (55+)",
      lines: ["<strong>Mon · Wed · Fri:</strong> 10:00 AM"],
      note: "Included with Unlimited. Strength work, barbell training, and functional movement scaled for the 55+ body.",
    },
    {
      heading: "Wellness Center",
      lines: [
        "<strong>Mon–Fri:</strong> 5:30 AM – 6:30 PM",
        "<strong>Sat &amp; Sun:</strong> 8:00 – 10:00 AM",
      ],
      note: "Included with every membership tier.",
    },
  ],

  // ------------------------------------------------------------------
  // PRICING — the single source of truth. Change a price here and it
  // changes on /pricing/, the homepage price strip, and every JSON-LD
  // offer that references it. Nothing else hard-codes a dollar amount.
  // ------------------------------------------------------------------
  pricing: {
    range: `${gym.tiers[0].price}–${gym.tiers[gym.tiers.length - 1].price}/month`,
    tiers: gym.tiers,

    // Ways in that aren't a monthly membership. Rendered by the
    // visit-options partial on /pricing/#visiting.
    visitOptions: gym.visitOptions,
  },

  // ------------------------------------------------------------------
  // Wellness center — included in every tier. One list, many pages.
  // ------------------------------------------------------------------
  wellness: {
    amenities: gym.wellnessAmenities,
    // Prose form for sentences: "a, b, c, and d"
    prose:
      gym.wellnessAmenities.slice(0, -1).join(", ") +
      ", and " +
      gym.wellnessAmenities[gym.wellnessAmenities.length - 1],
    included: "Included in every membership tier.",
  },

  // ------------------------------------------------------------------
  // ONE primary CTA sitewide. The header used to run two competing
  // buttons ("Not sure where to start?" and "Drop-In") side by side, so
  // neither won. Everything now points here.
  // ------------------------------------------------------------------
  primaryCta: { label: "Book a free intro", url: "/free-intro/" },

  // Primary nav — what people actually arrive looking for.
  // About and Blog moved to the footer.
  primaryNav: [
    { label: "Classes", url: "/crossfit/" },
    { label: "Schedule", url: "/schedule/" },
    { label: "Pricing", url: "/pricing/" },
    { label: "Coaches", url: "/coaches/" },
    { label: "Visit", url: "/visit/" },
  ],

  // Footer — 12 links across 3 columns. The Areas column is gone with
  // the city pages.
  footerColumns: {
    train: [
      { label: "CrossFit", url: "/crossfit/" },
      { label: "HYROX", url: "/hyrox/" },
      { label: "Personal Training", url: "/personal-training/" },
      { label: "Wellness Center", url: "/wellness/" },
      { label: "Prime Vitality (55+)", url: "/prime-vitality/" },
    ],
    visit: [
      { label: "Schedule", url: "/schedule/" },
      { label: "Pricing", url: "/pricing/" },
      { label: "Location & Hours", url: "/visit/" },
      { label: "FAQ", url: "/faq/" },
    ],
    about: [
      { label: "About", url: "/about/" },
      { label: "Coaches", url: "/coaches/" },
      { label: "Blog", url: "/blog/" },
    ],
  },
};
