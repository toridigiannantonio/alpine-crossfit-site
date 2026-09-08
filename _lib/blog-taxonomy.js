// ---------------------------------------------------------------------------
// Blog taxonomy: what kind of post is this, and what is it about?
//
// content/blog/ holds two different things that look alike in a folder listing:
//
//   ARTICLES (6)  Hand-written, 300-900 words, real slugs, each answering a
//                 question someone actually searches for. These earn their
//                 own indexed URL.
//
//   NOTES  (147)  The daily Stoic post, auto-published by
//                 .github/workflows/daily-publish.yml. Median 144 visible
//                 words, dated slugs, 13 titles repeated across the set.
//                 Worth reading; not worth asking Google to index 147 of.
//
// The split is derived, not hand-maintained: a dated filename prefix
// (YYYY-MM-DD-) means it came from the daily generator. Nothing here edits
// the post files themselves.
//
// Notes are also tagged with a THEME and a SOURCE so /blog/ can be browsed
// and searched by topic instead of being a 147-item reverse-chronological
// wall. Both are inferred from the post text; OVERRIDES below wins when the
// inference gets one wrong.
// ---------------------------------------------------------------------------

// Theme definitions. `match` terms are scored against the post's title,
// description and body; highest score wins. Title matches count double,
// since the title is the most deliberate signal in the file.
export const THEMES = [
  {
    id: "control",
    label: "What you control",
    blurb: "The dichotomy of control — effort and attention are yours, outcomes are not.",
    match: ["control", "controls", "controlled", "external", "externals", "internal", "up to us", "circumstance", "circumstances", "accept", "acceptance", "beyond your", "cannot change", "dichotomy", "outside your"],
  },
  {
    id: "discomfort",
    label: "Discomfort & adversity",
    blurb: "Hard things on purpose, and what they build.",
    match: ["discomfort", "uncomfortable", "adversity", "hardship", "struggle", "struggles", "obstacle", "obstacles", "suffer", "suffering", "pain", "difficult", "difficulty", "tough", "endure", "endurance", "persevere", "persistence"],
  },
  {
    id: "consistency",
    label: "Consistency & practice",
    blurb: "Habits, repetition, and showing up when it isn't interesting.",
    match: ["habit", "habits", "practice", "practices", "practicing", "consistent", "consistency", "repetition", "repetitions", "routine", "daily", "showing up", "show up", "permanent", "discipline", "reps"],
  },
  {
    id: "effort",
    label: "Effort over outcome",
    blurb: "Doing the work well, whatever the scoreboard says.",
    match: ["effort", "efforts", "process", "outcome", "outcomes", "result", "results", "reward", "your best", "do your best", "score", "scoreboard", "win", "winning", "progress"],
  },
  {
    id: "focus",
    label: "Focus & distraction",
    blurb: "Attention as a finite resource, and the present moment.",
    match: ["focus", "focused", "distraction", "distractions", "distracted", "attention", "present moment", "the present", "here and now", "scroll", "phone", "noise", "clarity", "mindfulness", "presence"],
  },
  {
    id: "self-mastery",
    label: "Self-mastery",
    blurb: "Impulses, reactions, and the pause between the two.",
    match: ["impulse", "impulses", "reaction", "reactions", "react", "anger", "angry", "emotion", "emotions", "temper", "restraint", "respond", "self-control", "master your", "inner citadel", "inner fortress", "urge"],
  },
  {
    id: "purpose",
    label: "Purpose & duty",
    blurb: "Why you're here, and doing the thing you said you'd do.",
    match: ["purpose", "duty", "duties", "meaning", "obligation", "role", "service", "your why", "calling", "responsibility", "commitment", "no excuses"],
  },
  {
    id: "character",
    label: "Character & ego",
    blurb: "Who you are when it costs something, and who you're performing for.",
    match: ["character", "virtue", "virtuous", "integrity", "honest", "honesty", "ego", "humility", "humble", "pride", "comparison", "compare", "opinion", "opinions", "judgment", "validation", "approval", "reputation"],
  },
  {
    id: "resilience",
    label: "Strength & resilience",
    blurb: "Building something that holds under load — physical and otherwise.",
    match: ["resilience", "resilient", "strength", "strong", "stronger", "fortitude", "inner strength", "toughness", "capacity", "withstand", "recover", "recovery", "sleep", "rest"],
  },
];

// The Stoic being quoted. Unambiguous — read straight off the attribution
// line — so it makes a reliable second filter.
export const SOURCES = [
  { id: "epictetus", label: "Epictetus", match: ["epictetus"] },
  { id: "seneca", label: "Seneca", match: ["seneca", "lucilius"] },
  { id: "marcus-aurelius", label: "Marcus Aurelius", match: ["marcus aurelius", "meditations"] },
];

// Posts the keyword scoring gets wrong, corrected by slug. Keeping this
// here rather than in front matter means the 153 post files stay untouched.
export const OVERRIDES = {
  // Corrected by hand after reviewing all 147 assignments. Keyword scoring
  // handles the literal cases well and reads metaphor badly — these are the
  // ones it took at face value ("Breathe First" is not about discomfort;
  // "Someone Else's Program" is not about strength). Keyed by slug, so the
  // post files themselves stay untouched.
  "2026-05-30-perception-is-everything": "control",
  "2026-06-02-action-over-analysis": "effort",
  "2026-07-13-action-over-talk": "effort",
  "2026-08-03-action-over-delay": "effort",
  "2026-09-02-begin-badly": "effort",
  "2026-09-05-nobody-is-watching-you-fail": "character",
  "2026-09-14-your-warm-up-is-the-session": "consistency",
  "2026-09-17-the-whiteboard-is-not-a-verdict": "character",
  "2026-09-20-what-training-is-for": "purpose",
  "2026-09-24-weather-is-not-a-reason": "consistency",
  "2026-09-25-strength-is-borrowed-time": "purpose",
  "2026-09-26-the-set-you-dont-post": "character",
  "2026-09-27-hunger-is-not-an-emergency": "self-mastery",
  "2026-09-28-someone-elses-program": "character",
  "2026-10-01-why-you-started": "purpose",
  "2026-10-02-the-cost-of-optimizing": "focus",
  "2026-10-03-old-injuries-new-rules": "resilience",
  "2026-10-05-dont-chase-the-leaderboard": "character",
  "2026-10-06-the-value-of-being-bad-at-something": "character",
  "2026-10-07-breathe-first": "self-mastery",
  "2026-10-09-the-person-next-to-you-was-new": "character",
  "2026-10-13-dont-argue-with-the-coach-in-your-head": "self-mastery",
  "2026-10-16-your-coach-isnt-impressed-by-pain": "character",
  "2026-10-17-steady-under-load": "resilience",
  "2026-10-18-the-gym-is-not-the-point": "purpose",
  "2026-10-19-ten-years-from-now": "purpose",
  "2026-10-20-gratitude-for-a-working-body": "purpose",
  "2026-10-21-finish-the-year-strong": "consistency",
  "2026-10-24-dont-trust-the-first-ten-minutes": "self-mastery",
  "2026-10-25-the-standard-when-tired": "consistency",
  "2026-10-26-slow-is-a-legitimate-speed": "effort",
  "2026-10-27-the-membership-you-dont-use": "consistency",
  "2026-10-28-two-kinds-of-tired": "resilience",
  "2026-10-30-the-hour-is-yours": "control",
};

const WORD = (term) =>
  new RegExp(`(?<![a-z])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![a-z])`, "gi");

function score(haystack, terms) {
  let n = 0;
  for (const t of terms) {
    const m = haystack.match(WORD(t));
    if (m) n += m.length;
  }
  return n;
}

/** Strip front matter and the hidden Workout of the Day block. */
export function readableBody(raw) {
  const parts = raw.split("---");
  const body = parts.length > 2 ? parts.slice(2).join("---") : raw;
  return body.replace(/(?:<hr\s*\/?>\s*)?##\s*(?:WOD|Workout of the Day)[\s\S]*$/i, "");
}

// Editorial override of the article/note split, in either direction, keyed by
// filename stem. The dated-filename rule is right about 152 of 153 posts;
// this is for the exceptions.
export const FORCE_TYPE = {
  // A 152-word "we're starting a blog" post that also promises a daily
  // workout post — which showWods: false now hides. Thin and no longer
  // accurate, so it reads as a note.
  "welcome-to-the-alpine-blog": "note",
};

/** A post is a NOTE if the daily generator made it, which the YYYY-MM-DD-
 *  filename prefix tells us. Note this must be the FILENAME, not Eleventy's
 *  `page.fileSlug` — Eleventy parses that prefix as the post's date and
 *  strips it, so 2026-09-08-coachable.md has fileSlug "coachable" and every
 *  post would look hand-written. */
export function postType(filename) {
  const stem = String(filename).replace(/^.*\//, "").replace(/\.md$/, "");
  if (FORCE_TYPE[stem]) return FORCE_TYPE[stem];
  return /^\d{4}-\d{2}-\d{2}-/.test(stem) ? "note" : "article";
}

export function classify({ filename, slug, title = "", description = "", raw = "" }) {
  const body = readableBody(raw);
  const hay = `${description} ${body}`;
  const titleHay = title;

  const overridden = OVERRIDES[String(filename).replace(/^.*\//, "").replace(/\.md$/, "")];
  let theme = overridden || null;
  if (!theme) {
    let best = null,
      bestScore = 0;
    for (const t of THEMES) {
      const s = score(hay, t.match) + score(titleHay, t.match) * 3;
      if (s > bestScore) {
        bestScore = s;
        best = t.id;
      }
    }
    theme = best || "resilience"; // the broadest bucket, not a junk drawer
  }

  let source = null,
    sBest = 0;
  for (const s of SOURCES) {
    const n = score(hay, s.match);
    if (n > sBest) {
      sBest = n;
      source = s.id;
    }
  }

  return { theme, source, type: postType(filename) };
}

export const themeById = Object.fromEntries(THEMES.map((t) => [t.id, t]));
export const sourceById = Object.fromEntries(SOURCES.map((s) => [s.id, s]));
