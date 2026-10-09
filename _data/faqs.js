// ---------------------------------------------------------------------------
// The canonical FAQ set. ONE answer per question, for the whole site.
//
// Before this file there were 123 distinct questions rendered in <details>
// blocks plus 34 more written as question-shaped <h2>/<h3> headings, spread
// across 19 pages — and 19 of those questions appeared on two or more pages
// with different wording. "How much does Alpine cost?" had four different
// answers, one of which quoted a $165 tier that no longer exists.
//
// Now: every question lives here exactly once. Pages list the ids they want
// in `faqIds` front matter; the faq-list partial renders them and
// schema-org.njk builds that page's FAQPage JSON-LD from the SAME resolved
// list, so the visible FAQ and the structured data can never drift apart.
//
// Prices and amenities interpolate from _data/site.js — change a price there
// and every answer that quotes it updates.
//
// To add a question: add one entry here, then add its id to the page(s) that
// should show it. /faq/ shows all of them automatically.
// ---------------------------------------------------------------------------

import site from "./site.js";

const p = Object.fromEntries(site.pricing.tiers.map((t) => [t.name, t.price]));
const OPEN_GYM = p["Open Gym"]; // $99
const UNLIMITED = p["Unlimited"]; // $205
const PUNCH = site.pricing.punchCards; // 10 and 20 punch cards
const DROP_IN = site.pricing.visitOptions.find((o) => o.name === "Drop-In Class").price; // $30
const WEEK = site.pricing.visitOptions.find((o) => o.name === "Week Pass").price; // $95
const WELLNESS = site.wellness.prose;
const ADDRESS = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

// group order controls the section order on /faq/
export const groups = [
  { id: "getting-started", heading: "Getting started" },
  { id: "first-visit", heading: "Your first visit" },
  { id: "crossfit", heading: "About CrossFit" },
  { id: "classes", heading: "Classes & programming" },
  { id: "pricing", heading: "Pricing & membership" },
  { id: "visiting", heading: "Visiting & drop-ins" },
  { id: "wellness", heading: "Wellness + CoWork" },
  { id: "programs", heading: "Specialty programs" },
  { id: "location", heading: "Location & hours" },
  { id: "coaches", heading: "Coaches & ownership" },
  { id: "safety", heading: "Safety, scaling & injuries" },
  { id: "race", heading: "HYROX Denver 2026" },
  { id: "not-offered", heading: "What Alpine doesn't offer" },
];

export const items = [
  // ---------------- Getting started ----------------
  {
    id: "in-shape-first",
    group: "getting-started",
    q: "Do I need to be in shape before I start?",
    a: "No. Most Alpine members started with zero CrossFit experience, and a significant number started with zero gym experience. Every movement scales down as far as it needs to — your first class might be light air squats, a few step-ups, and a 20-minute walk on the rower. Your hundredth class will look completely different.",
  },
  {
    id: "how-to-start",
    group: "getting-started",
    q: "How do I get started at Alpine?",
    a: 'Three steps. First, a free No Sweat Intro — 30 minutes with one of our coaches, no workout. Second, the Foundations on-ramp, private one-on-one sessions that teach the core movements. Third, group classes. <a href="/free-intro/">Book the intro →</a>',
  },
  {
    id: "no-sweat-intro",
    group: "getting-started",
    q: "What is the No Sweat Intro?",
    a: "A free 30-minute meeting with a coach. You'll tour the gym, talk through your goals and training history, and leave with a personalized recommendation. No workout, no pressure, no cost.",
  },
  {
    id: "foundations",
    group: "getting-started",
    q: "What is the Foundations program?",
    a: "Alpine's on-ramp for new members: private one-on-one sessions where a coach teaches the core CrossFit movements — squat, deadlift, press, pull, carry — in a low-pressure setting before you join group classes. You graduate when your coach is confident you can execute the movements safely in a group class.",
  },
  {
    id: "foundations-length",
    group: "getting-started",
    q: "How long does Foundations take?",
    a: `Four private one-hour sessions with a coach, plus one month of Unlimited classes. It's ${site.pricing.foundations.price}, one-time. <a href="/pricing/#foundations">See Foundations →</a>`,
  },
  {
    id: "good-for-beginners",
    group: "getting-started",
    q: "Is Alpine good for beginners?",
    a: "Yes. Most Alpine members started with zero CrossFit experience and many had not stepped into a gym in years. Every class is led by an experienced coach who scales movements to your body in real time. Nobody is thrown into something they can't handle.",
  },
  {
    id: "how-long-results",
    group: "getting-started",
    q: "How long until I see results?",
    a: "Most new members notice measurable progress inside 8–12 weeks when training 3–4 times per week. Body composition changes generally show up between 12 and 24 weeks, depending on consistency, sleep, and nutrition.",
  },

  // ---------------- Your first visit ----------------
  {
    id: "need-appointment",
    group: "first-visit",
    q: "Do I need an appointment?",
    a: `Yes for the free No Sweat Intro — that's a scheduled 30-minute conversation. For a drop-in class, 24 hours notice is helpful but not required: text or call <a href="tel:${site.phone}">${site.phoneDisplay}</a> and we'll fit you in.`,
  },
  {
    id: "what-to-bring",
    group: "first-visit",
    q: "What should I bring?",
    a: "Workout clothes, athletic shoes, and a water bottle. We provide everything else — towels, sanitizing spray, movement modifications, and coaching. Nothing to bring for the No Sweat Intro, since it isn't a workout.",
  },
  {
    id: "first-class",
    group: "first-visit",
    q: "What happens in my first class?",
    a: "A 60-minute coached class in five parts: introduction (the coach explains the workout and scaling options), general warm-up, a strength or skill segment, the Workout of the Day, and a cool-down with mobility work. A coach is on the floor the entire hour.",
  },
  {
    id: "watch-a-class",
    group: "first-visit",
    q: "Can I watch a class before I join?",
    a: "Yes. Your free No Sweat Intro includes a tour of the gym and time to sit and observe a class in progress if you'd like.",
  },
  {
    id: "brand-new",
    group: "first-visit",
    q: "What if I'm brand new to CrossFit?",
    a: "Every class is scaled to the athlete. Your coach modifies movements and weights to match your level, and nobody will judge you for it — everyone in the room was new once. Most new members start with the private Foundations on-ramp before joining group classes.",
  },

  // ---------------- About CrossFit ----------------
  {
    id: "what-is-crossfit",
    group: "crossfit",
    q: "What is CrossFit?",
    a: "A strength-and-conditioning methodology built on three principles: functional movement (squats, presses, pulls, carries), constant variance (no fixed cycles), and high-intensity effort scaled to your level. The goal is to increase your work capacity across broad time and modal domains.",
  },
  {
    id: "is-crossfit-safe",
    group: "crossfit",
    q: "Is CrossFit safe?",
    a: "CrossFit is as safe as any sport when coached well. Injury rates in coached CrossFit environments are comparable to general weightlifting and lower than contact sports or running. Every Alpine class is led by an experienced coach watching the room, scaling movements, and cueing technique in real time.",
  },
  {
    id: "crossfit-weight-loss",
    group: "crossfit",
    q: "Is CrossFit good for weight loss?",
    a: "Yes, when paired with consistent nutrition. CrossFit combines high-intensity conditioning with progressive strength work that builds muscle and raises your baseline metabolism.",
  },
  {
    id: "crossfit-for-women",
    group: "crossfit",
    q: "Is CrossFit good for women?",
    a: "Yes. The movements scale to any body and any experience level. Alpine's membership is balanced across genders and both owners, April and Tori DiGiannantonio, are women. Our most common member archetype is women 25–40 returning to fitness after kids, careers, or a long break.",
  },
  {
    id: "crossfit-vs-gym",
    group: "crossfit",
    q: "What's the difference between CrossFit and a regular gym?",
    a: "A regular gym gives you access to equipment. CrossFit gives you a coach in every class, a workout programmed for that day with a measurable target, scaling to your level, and a community training alongside you. You never have to guess what to do or whether you're doing it right.",
  },

  // ---------------- Classes & programming ----------------
  {
    id: "class-length",
    group: "classes",
    q: "How long is a class?",
    a: "60 minutes. The schedule runs early-morning, lunch, and evening classes Monday through Friday, plus weekend mornings. Unlimited members also have 24/7 facility access for open gym.",
  },
  {
    id: "class-size",
    group: "classes",
    q: "How many people are in a class?",
    a: "Every CrossFit class is capped at 15 athletes. That keeps every member on the coach's radar and ensures real individual attention, even in the busiest hours.",
  },
  {
    id: "how-often",
    group: "classes",
    q: "How often should I come per week?",
    a: "Three to four classes per week is the sweet spot for most members. Twice a week works for maintenance. Five to six days is typical for competitive athletes. Consistency matters more than frequency.",
  },
  {
    id: "who-programs",
    group: "classes",
    q: "Who writes the workouts?",
    a: "Every workout is programmed in-house by Megan Markee (CSCS) in collaboration with owner April DiGiannantonio (CSCS, SCCC, former Division I Director of Sports Performance). Two CSCS-certified professionals — not a franchise template, not a subscription service, not a random WOD generator.",
  },
  {
    id: "programming-cycles",
    group: "classes",
    q: "Do you follow cycles in your programming?",
    a: "No. Alpine follows true CrossFit methodology — constantly varied, not cycled through predictable progressions. Every class is designed to increase your work capacity across broad time and modal domains.",
  },
  {
    id: "need-experience",
    group: "classes",
    q: "Do I need experience to take a class?",
    a: "No. Most Alpine members started with zero CrossFit experience. New members begin with a free No Sweat Intro and the private Foundations on-ramp, so you walk into your first group class already familiar with the core movements.",
  },
  {
    id: "sunday-classes",
    group: "classes",
    q: "Do you have Sunday classes?",
    a: "Yes. Hybrid runs Sunday 8:00–9:30 AM, and Downshift (yoga and recovery) runs 9:45–10:30 AM two Sundays a month, starting November 1. Most CrossFit gyms in the Denver metro close on Sundays. Unlimited members also have 24/7 facility access, so a Sunday open-gym session is always available.",
  },

  // ---------------- Pricing & membership ----------------
  {
    id: "how-much",
    group: "pricing",
    q: "How much does Alpine cost?",
    a: `Memberships are ${OPEN_GYM} or ${UNLIMITED} per month. Open Gym is ${OPEN_GYM}/month (facility access, 2 classes a month, wellness center, 24/7 entry). For a set number of visits, ${site.pricing.classPlans.map((c) => `${c.name} is ${c.price}/month`).join(" and ")}, where each sign-in is one class, open gym session, or wellness visit (no 24/7 access). Punch cards are ${PUNCH.map((c) => `${c.price} for ${c.visits}`).join(" or ")}, one-time. Unlimited is ${UNLIMITED}/month (everything in Open Gym plus unlimited classes and Prime Vitality). All month-to-month, no contracts. <a href="/pricing/">See full pricing →</a>`,
  },
  {
    id: "which-membership",
    group: "pricing",
    q: "Which membership should I pick?",
    a: `Pick by how you'll actually train. Mostly training on your own, with a class now and then: Open Gym, ${OPEN_GYM}/month, includes 2 classes a month. Training 3+ times a week in coached classes: Unlimited, ${UNLIMITED}/month — roughly two-thirds of members pick this. Traveling or trying us out: a drop-in (${DROP_IN}) or week pass (${WEEK}). Everything is month-to-month, so upgrading later takes about 30 seconds.`,
  },
  {
    id: "unlimited-worth-it",
    group: "pricing",
    q: `Is Unlimited worth it at ${UNLIMITED} a month?`,
    a: `It's our most popular membership. It includes unlimited classes (CrossFit, Hybrid, Strong AF, and Downshift), Prime Vitality (55+), the wellness center (${WELLNESS}), and 24/7 facility access. Roughly two-thirds of members choose it, because the bundle costs less than the pieces and unlocks the recovery amenities.`,
  },
  {
    id: "open-gym-included",
    group: "pricing",
    q: `What's included in the ${OPEN_GYM} Open Gym tier?`,
    a: `Facility access, 2 classes a month (CrossFit, Hybrid, Strong AF, Downshift, and more), the wellness center (${WELLNESS}), and 24/7 entry. Unlimited classes and Prime Vitality start at Unlimited.`,
  },
  {
    id: "punch-cards",
    group: "pricing",
    q: "Do you have punch cards?",
    a: `Yes. ${PUNCH.map((c) => `${c.name}: ${c.price}`).join(". ")}. One-time purchases, no monthly billing. Each sign-in covers one class, one open gym session, or one wellness center visit. No 24/7 access. <a href="/pricing/#punch-cards">See punch cards →</a>`,
  },
  {
    id: "specialty-classes",
    group: "programs",
    q: "What are Strong AF, Hybrid, and Downshift?",
    a: `Strong AF is our strength class, offered across the week starting October 26. Hybrid is our HYROX-style class on Sunday, with Wednesday classes added October 26, and Tuesday is endurance day across every class, a great fit for hybrid athletes. Downshift is a 45-minute yoga and recovery class on Sunday mornings, twice a month starting November 1. Strong AF and Hybrid are set formats. Downshift is the one we'll keep shaping based on feedback from regular attendees. All three are included in Unlimited and count as one sign-in on other plans. <a href="/schedule/#specialty">See the schedule →</a>`,
  },
  {
    id: "contract",
    group: "pricing",
    q: "Is there a contract or initiation fee?",
    a: "No. All memberships are month-to-month with no contract, no initiation fee, no annual fee, and no cancellation fee. Cancel with 30 days written notice.",
  },
  {
    id: "freeze",
    group: "pricing",
    q: "Can I freeze my membership?",
    a: "Yes. Members can freeze for up to 90 days per year for travel, injury, or life events. No charge during a freeze.",
  },
  {
    id: "discounts",
    group: "pricing",
    q: "Do you offer military, first responder, or student discounts?",
    a: "Yes. Reach out and we'll share current offers.",
  },
  {
    id: "cancel",
    group: "pricing",
    q: "How do I cancel?",
    a: "Email us or tell your coach in person. 30 days notice and you're done — no cancellation fee.",
  },
  {
    id: "payment-methods",
    group: "pricing",
    q: "What payment methods do you accept?",
    a: "Credit card and ACH (bank draft). Memberships bill on the same date each month.",
  },
  {
    id: "buy-online",
    group: "pricing",
    q: "Can I buy a membership online without talking to anyone?",
    a: `Drop-ins and week passes, yes. You can buy those online. For memberships, punch cards, and Foundations, book a quick call with us and we'll match you to the right option. <a href="https://link.gymntx.com/widget/booking/D3oYgyrlF9AzrBhpaP60" target="_blank" rel="noopener">Talk to us about membership →</a>`,
  },
  {
    id: "price-comparison",
    group: "pricing",
    q: "How does Alpine's pricing compare to other gyms?",
    a: `Comparable Wheat Ridge and Arvada CrossFit gyms typically run $180–$220/month for an unlimited tier; Alpine's Unlimited is ${UNLIMITED}. Big-box gyms in the area run $30–$80/month for facility access without coached classes. Alpine publishes its pricing — no sales call required.`,
  },

  // ---------------- Visiting & drop-ins ----------------
  {
    id: "can-i-drop-in",
    group: "visiting",
    q: "Can I drop in to a class?",
    a: `Yes, at any coached class on the schedule. A single class is ${DROP_IN} and a week pass is ${WEEK}, both including the wellness center. Book and pay online before you arrive — the waiver is part of the same checkout. <a href="/pricing/#visiting">See visit options →</a>`,
  },
  {
    id: "drop-in-advance",
    group: "visiting",
    q: "Do I need to book a drop-in in advance?",
    a: `24 hours notice is helpful but not required. Text or call <a href="tel:${site.phone}">${site.phoneDisplay}</a> and we'll fit you in. Paying online beforehand means there's nothing to sort out at the door.`,
  },
  {
    id: "first-class-free",
    group: "visiting",
    q: "Is my first class free if I train at another affiliate?",
    a: `Yes. Experienced CrossFitters trying Alpine for the first time get one free class, limited to one use per person. After that, drop-ins are ${DROP_IN} per class. <a href="/about/#from-another-gym">More on visiting from another gym →</a> Reach out to book it: <a href="https://link.gymntx.com/widget/booking/D3oYgyrlF9AzrBhpaP60" target="_blank" rel="noopener">book your free class →</a>`,
  },
  {
    id: "drop-in-wellness",
    group: "visiting",
    q: "Does a drop-in include the wellness center?",
    a: `Yes. Both the ${DROP_IN} drop-in and the ${WEEK} week pass include the wellness center.`,
  },
  {
    id: "new-should-i-drop-in",
    group: "visiting",
    q: "I've never done CrossFit. Should I drop in?",
    a: 'Probably not as your first move. Drop-ins are built for people who already train. If you\'re starting out, book a <a href="/free-intro/">free No Sweat Intro</a> instead — 30 minutes with a coach, no workout, and you\'ll leave knowing the right place to begin.',
  },

  // ---------------- Wellness center ----------------
  {
    id: "wellness-included",
    group: "wellness",
    q: "What's in the wellness center?",
    a: `${site.wellness.prose.charAt(0).toUpperCase() + site.wellness.prose.slice(1)}. It's included in both memberships — ${OPEN_GYM} Open Gym and ${UNLIMITED} Unlimited — and in drop-ins and week passes too.`,
  },
  {
    id: "peptide-therapy",
    group: "wellness",
    q: "How does peptide therapy work?",
    a: "Peptide therapy is included with membership but scoped individually during a consultation, since the right protocol depends on your goals and health history. Ask at your No Sweat Intro or talk to a coach.",
  },
  {
    id: "wellness-hours",
    group: "wellness",
    q: "When is the wellness center open?",
    a: "Monday–Friday 5:30 AM – 6:30 PM, Saturday 8:00–10:00 AM, and Sunday 8:00–9:30 AM. Unlimited members have 24/7 facility access.",
  },
  {
    id: "cowork",
    group: "wellness",
    q: "Is there a place to work at the gym?",
    a: `Yes. Alpine has a CoWork space with day lockers, tables and chairs, a coffee bar, and TVs, so you can get work done before or after you train. <a href="/wellness/#co-work">See Wellness + CoWork →</a>`,
  },
  {
    id: "physical-therapy",
    group: "wellness",
    q: "Do you have a physical therapist on site?",
    a: `Yes. Dr. Juliana Merighi runs Flow State Physical Therapy at Alpine. She is a Doctor of Physical Therapy, board certified as an Orthopedic Clinical Specialist and a Strength and Conditioning Specialist. She treats orthopedic injuries and pelvic health, supports athletes through pregnancy and postpartum, and works in person or virtually. <a href="https://flowstaterehab.com/" target="_blank" rel="noopener">Book with Flow State →</a>`,
  },

  // ---------------- Specialty programs ----------------
  {
    id: "prime-vitality",
    group: "programs",
    q: "What is Prime Vitality?",
    a: 'Alpine\'s strength-and-conditioning program for adults 55+, running Monday, Wednesday, and Friday at 10:00 AM. Where most senior fitness classes stick to low-impact cardio, Prime Vitality teaches barbell lifting, functional movement, and measurable strength progression, scaled appropriately. Included with Unlimited. <a href="/prime-vitality/">Learn more →</a>',
  },
  {
    id: "hyrox-where",
    group: "programs",
    q: "Where can I train for HYROX near Denver?",
    a: 'Alpine is an Official HYROX Training Center in Wheat Ridge, serving the northwest Denver metro — coached, race-specific programming and Friday run clubs focused on the 8-kilometer format. <a href="/hyrox/">See HYROX training →</a>',
  },
  {
    id: "hyrox-stations",
    group: "programs",
    q: "What are the 8 stations in a HYROX race?",
    a: "Eight 1-kilometer runs, each followed by a station: 1000m SkiErg, 50m sled push, 50m sled pull, 80m burpee broad jumps, 1000m row, 200m farmers carry, 100m sandbag lunges, and 100 wall balls. Alpine programs every one of them.",
  },
  {
    id: "hyrox-cost",
    group: "programs",
    q: "How much does HYROX training cost?",
    a: `It's part of Alpine's coached programming, included in the ${UNLIMITED}/month Unlimited membership along with CrossFit classes, the wellness center, and 24/7 access.`,
  },
  {
    id: "hyrox-vs-crossfit",
    group: "programs",
    q: "How is HYROX different from CrossFit?",
    a: "CrossFit is constantly varied strength-and-conditioning across many movements. HYROX is a fixed-format race — the same eight runs and eight stations every time — so training rewards pacing, running endurance, and station efficiency. Alpine builds a strength-and-conditioning base, then layers race-specific running and station work on top.",
  },

  // ---------------- Location & hours ----------------
  {
    id: "where-located",
    group: "location",
    q: "Where is Alpine located?",
    a: `${ADDRESS} — just off I-70 near Kipling. About 5 minutes from Applewood and south Arvada, 10 from Belmar in Lakewood, and 12 from downtown Golden. <a href="/visit/">Directions and map →</a>`,
  },
  {
    id: "hours",
    group: "location",
    q: "What are your hours?",
    a: "Staffed hours are Monday–Friday 5:30 AM – 6:30 PM, Saturday 8:00–10:00 AM, and Sunday 8:00–9:30 AM. Unlimited members have 24/7 facility access.",
  },
  {
    id: "parking",
    group: "location",
    q: "Is there free parking?",
    a: "Yes. Free on-site parking for all members and guests. Pull into the lot at 12090 W Ridge Rd — the Alpine entrance is on the front of the building.",
  },
  {
    id: "24-7-access",
    group: "location",
    q: "What is 24/7 member access?",
    a: "Every membership tier includes keyed facility access outside staffed hours, so you can train on your schedule rather than ours. Coached classes run during the posted schedule.",
  },

  // ---------------- Coaches & ownership ----------------
  {
    id: "who-coaches",
    group: "coaches",
    q: "Who coaches the classes?",
    a: 'Lisa Arcangel, Liz Kushner, Dean Weeks, April DiGiannantonio, and Tori DiGiannantonio coach classes, joined by Maddy Portlock, Mike Reynolds, and Kelley Williams. Tori leads Downshift, our yoga and recovery class. Programming is built collaboratively by Megan Markee and owner April DiGiannantonio, drawing on Games-level competition and five-plus years as a Division I Director of Sports Performance. <a href="/coaches/">Meet the team →</a>',
  },
  {
    id: "owners-coach",
    group: "coaches",
    q: "Do the owners coach the classes?",
    a: `Yes. Owner April DiGiannantonio coaches classes. She holds the CSCS and SCCC and was a Division I Director of Sports Performance for five-plus years. Tori DiGiannantonio leads Downshift, our yoga and recovery class, and coaches the occasional Hybrid class. Lisa, Liz, and Dean lead group classes with 10 to 15+ years of coaching apiece, and Megan Markee (CSCS) writes every workout members follow, in collaboration with April.`,
  },
  {
    id: "how-long-in-wheat-ridge",
    group: "coaches",
    q: "How long has Alpine been in Wheat Ridge?",
    a: "Founded in 2010, owned by Megan Markee and Annie Brunner from 2016 to 2026, and now owned by April and Tori DiGiannantonio. It's one of the longest-running CrossFit affiliates in the Wheat Ridge area.",
  },

  // ---------------- Safety, scaling & injuries ----------------
  {
    id: "injury",
    group: "safety",
    q: "What if I have an injury?",
    a: "Alpine coaches are experienced at coaching around injuries and limitations. Your coach will scale every movement to what your body can and cannot do, progress loads carefully, and coordinate with your PT or doctor if appropriate. We also have in-house physical therapy: Dr. Juliana Merighi runs Flow State out of Alpine. <a href=\"/wellness/#physical-therapy\">More on Flow State →</a>",
  },
  {
    id: "pull-up",
    group: "safety",
    q: "I can't do a pull-up. Is that a problem?",
    a: "No. Pull-ups scale to ring rows, banded pull-ups, or jumping pull-ups. Plenty of Alpine members have built to strict pull-ups during their first year.",
  },
  {
    id: "scaling",
    group: "safety",
    q: "What does scaling actually mean?",
    a: "Your coach adjusts load, range of motion, reps, and complexity in real time so the workout hits the right intensity for your body. Beginners aren't held back and advanced athletes aren't held back — everyone trains the same workout, scaled to their version of hard.",
  },
  {
    id: "age-minimum",
    group: "safety",
    q: "How old do you have to be to train at Alpine?",
    a: "13 and up. Teens train in the regular coached classes alongside adults, scaled appropriately, with a coach watching every movement.",
  },

  // ---------------- Wellness / programs, page-specific ----------------
  {
    id: "wellness-without-crossfit",
    group: "wellness",
    q: "Can I use the wellness center without doing CrossFit?",
    a: `Yes. The ${OPEN_GYM}/month Open Gym tier is exactly that — facility access and the wellness center, plus 2 classes a month if you want them.`,
  },
  {
    id: "prime-vitality-safe",
    group: "programs",
    q: "Is this kind of training safe over 55?",
    a: "Yes, and progressive strength training is one of the best-evidenced interventions for maintaining bone density, muscle mass, and balance with age. Prime Vitality is led by an experienced coach and every movement is scaled. Coach Lisa Arcangel has qualified for the CrossFit Masters Semifinals.",
  },
  {
    id: "prime-vitality-never-lifted",
    group: "programs",
    q: "Can I join Prime Vitality if I've never lifted weights?",
    a: "Yes — that's most of the group. You'll learn the movements from scratch with a coach watching every rep, starting with loads that are appropriate for where you are today.",
  },
  {
    id: "prime-vitality-vs-silversneakers",
    group: "programs",
    q: "How is Prime Vitality different from SilverSneakers?",
    a: "SilverSneakers-style classes are mostly low-impact cardio and mobility. Prime Vitality teaches barbell lifting, functional movement, and measurable strength progression, scaled appropriately. It's real strength and conditioning, in a group your age.",
  },

  // ---------------- HYROX Denver 2026 ----------------
  {
    id: "race-when",
    group: "race",
    q: "When is HYROX Denver 2026?",
    a: 'November 12–15, 2026 at the Colorado Convention Center — Denver\'s first regional HYROX race. <a href="/hyrox-denver-2026/">Race details →</a>',
  },
  {
    id: "race-register",
    group: "race",
    q: "How do I register for HYROX Denver 2026?",
    a: 'Registration is handled by HYROX directly at <a href="https://hyrox.com" target="_blank" rel="noopener">hyrox.com</a>. Regional races sell out, so register early and train backwards from the date.',
  },
  {
    id: "race-experience-needed",
    group: "race",
    q: "Do I need CrossFit experience to race HYROX?",
    a: "No. HYROX rewards running endurance and station efficiency more than technical barbell skill. Training at Alpine is coached and scaled, so first-time racers and experienced athletes work the same program at their own level.",
  },
  {
    id: "race-how-long-to-train",
    group: "race",
    q: "How early should I start training for a HYROX race?",
    a: 'Twelve weeks is the standard runway for someone with a general fitness base. Alpine publishes a <a href="/hyrox-prep/">free 12-week prep plan</a> built for exactly that window.',
  },
  {
    id: "race-duration",
    group: "race",
    q: "How long does a HYROX race take?",
    a: "Most first-time finishers land between 90 minutes and two hours. Competitive open athletes finish in 60–75 minutes; elite times go under an hour.",
  },

  // ---------------- What Alpine doesn't offer ----------------
  {
    id: "no-childcare",
    group: "not-offered",
    q: "Do you offer childcare?",
    a: "No. Our schedule includes 5:30 AM, 6:30 AM, 12:00 PM, and 4:30 PM class times built around school drop-off and pickup windows, which works for many Alpine parents — but it isn't childcare. If on-site childcare is a hard requirement, a big-box gym will fit better.",
  },
  {
    id: "no-kids-program",
    group: "not-offered",
    q: "Do you have a CrossFit Kids program?",
    a: "No. Alpine is built for athletes 13 and up, who train in the regular coached classes. We do run a dedicated Prime Vitality program for adults 55+.",
  },
  {
    id: "no-yoga",
    group: "programs",
    q: "Do you offer yoga or recovery classes?",
    a: `Yes. Downshift starts November 1. It's a 45-minute yoga and recovery class on Sunday mornings, 9:45–10:30 AM, two Sundays a month. Downshift will evolve based on feedback from the people who come regularly, including the style of class and whether to add breath work, meditation, or mindset work. <a href="/schedule/#specialty">See the schedule →</a>`,
  },
  {
    id: "no-weekend-afternoons",
    group: "not-offered",
    q: "Are there weekend afternoon classes?",
    a: "No. Saturday classes run 7:00–10:00 AM and Sunday runs 8:00–10:30 AM. If a weekend afternoon class is essential, we're not the right fit.",
  },
];

// Fail the build loudly on a duplicate id rather than silently rendering
// the wrong answer.
const seen = new Set();
for (const it of items) {
  if (seen.has(it.id)) throw new Error(`Duplicate FAQ id: ${it.id}`);
  seen.add(it.id);
}

export default { groups, items };
