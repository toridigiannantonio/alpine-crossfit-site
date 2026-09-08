---
layout: layouts/page.njk
permalink: /hyrox/
title: "HYROX Training Near Denver — Alpine CrossFit, Wheat Ridge"
description: "Train for HYROX at Alpine CrossFit in Wheat Ridge — an official HYROX affiliate serving the northwest Denver metro. Coached, race-specific programming and Friday run clubs. Free intro available."
canonical: "https://alpinecrossfit.com/hyrox/"
eyebrow: "HYROX"
heading: "HYROX training in <span class=\"accent\">Wheat Ridge</span>, near Denver."
dek: "Alpine CrossFit is an official HYROX Training Center in Wheat Ridge, Colorado — coached, race-specific programming and Friday run clubs for athletes across the northwest Denver metro prepping for a HYROX event."
heroCtas:
  - { label: "Book a free intro", href: "/free-intro/", style: "btn-primary btn-lg" }
trustStrip: "<span>Official HYROX affiliate</span><span class=\"sep\">·</span><span>Coached programming</span><span class=\"sep\">·</span><span>Friday run clubs</span>"
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "HYROX Training", "item": "https://alpinecrossfit.com/hyrox/"}
      ]
    }
  - {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      "name": "HYROX Denver 2026",
      "startDate": "2026-11-12",
      "endDate": "2026-11-15",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": { "@type": "Place", "name": "Colorado Convention Center", "address": { "@type": "PostalAddress", "streetAddress": "700 14th Street", "addressLocality": "Denver", "addressRegion": "CO", "postalCode": "80202", "addressCountry": "US" } },
      "organizer": { "@type": "Organization", "name": "HYROX", "url": "https://hyrox.com" },
      "sport": "HYROX",
      "url": "https://alpinecrossfit.com/hyrox-denver-2026/"
    }
finalCta:
  heading: "Ready to train for HYROX?"
  body: "Come do a HYROX-prep class. It's {{ site.pricing.visitOptions[1].price }} for a single class — no membership, no commitment. New to CrossFit entirely? Start with a free No Sweat Intro instead."
  ctas:
    - { label: "Drop in — {{ site.pricing.visitOptions[1].price }}", href: "{{ site.pricing.visitOptions[1].ctaHref }}", inlineStyle: "background:#000;color:#fff;" }
    - { label: "Book a free intro", href: "/free-intro/", inlineStyle: "background:transparent;color:#000;border-color:#000;" }
schemaTypes: ["healthclub", "faq"]
faqEyebrow: "Common questions"
faqHeading: "HYROX training questions."
faqIds:
  - hyrox-where
  - hyrox-vs-crossfit
  - hyrox-stations
  - hyrox-cost
  - race-experience-needed
---

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">Where to train</span>
    <h2>Where can you train for HYROX near Denver?</h2>
    <p>Alpine CrossFit is an official HYROX Training Center in Wheat Ridge, Colorado — a practical home base for HYROX athletes across the northwest Denver metro, including Arvada, Lakewood, Applewood, and Golden. We're at {{ site.address.street }}, just off I-70.</p>
    <p>HYROX training here is coached, race-specific, and scaled to every level — from someone eyeing their first race to an athlete chasing a qualifying time.</p>
  </div>
</section>

{# /hyrox/ is the HYROX hub. Both of these pages were live, indexed and
   doing a real job, but had zero inbound links from anywhere on the site —
   /hyrox-prep/ is a separate lead-capture form for the 12-week plan, and
   /hyrox-denver-2026/ is the race landing page. They are linked from here
   now so they are reachable by a human, not only by a search engine. #}
<section class="section section-dark" id="hub">
  <div class="container">
    <span class="eyebrow">Start here</span>
    <h2 class="section-heading">Racing, or thinking about it?</h2>
    <div class="grid grid-2">
      <div class="card">
        <h3>HYROX Denver 2026</h3>
        <p>Denver's first regional HYROX lands November 12–15, 2026 at the Colorado Convention Center — 12 minutes from the gym. Race format, divisions, timings, and how to register.</p>
        <a href="/hyrox-denver-2026/">Race details →</a>
      </div>
      <div class="card card-featured">
        <h3>Free 12-week prep plan</h3>
        <p>A complete 12-week plan to take you from CrossFit-fit to race-ready, written by a 2× CrossFit Games Semifinalist. Compromised running, station work, race-pace targets, taper.</p>
        <a href="/hyrox-prep/">Get the plan →</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">What is HYROX</span>
    <h2>A fixed-format fitness race.</h2>
    <p>HYROX is a global fitness competition: eight 1-kilometer runs, each followed by a functional workout station. It's the same format every race, in every city — which means training is about pacing, running under fatigue, and station efficiency.</p>
    <p>Athletes compete in men's, women's, doubles, and relay categories, with qualifying times leading to international finals.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">The race</span>
    <h2>The 8 HYROX stations.</h2>
    <p>Between each 1-kilometer run, athletes complete one station. Alpine programs every one of these into HYROX training:</p>
    <ul class="feature-list">
      <li><strong>1000m SkiErg</strong> — upper-body and aerobic output.</li>
      <li><strong>50m sled push</strong> — heavy leg drive under load.</li>
      <li><strong>50m sled pull</strong> — posterior-chain pulling power.</li>
      <li><strong>80m burpee broad jumps</strong> — full-body conditioning and explosiveness.</li>
      <li><strong>1000m row</strong> — sustained aerobic pacing.</li>
      <li><strong>200m farmers carry</strong> — grip and loaded-carry endurance.</li>
      <li><strong>100m sandbag lunges</strong> — loaded single-leg strength.</li>
      <li><strong>100 wall balls</strong> — the classic closer, legs and lungs.</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">At Alpine</span>
    <h2>How we train for HYROX.</h2>
    <p>HYROX training at Alpine combines four elements, coached by CF-L2 trainers and scaled to your level:</p>
    <ul class="feature-list">
      <li><strong>Strength work</strong> — the barbell base and movement prep that powers the sleds, carries, and lunges.</li>
      <li><strong>Conditioning</strong> — high-intensity metabolic work that builds the engine for back-to-back runs and stations.</li>
      <li><strong>Running</strong> — Friday run clubs focused on race-specific pacing and running on tired legs.</li>
      <li><strong>Station practice</strong> — drills on the SkiErg, row, sled, and wall ball so race-day movements feel automatic.</li>
    </ul>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">Friday run clubs</span>
    <h2>Every Friday at Alpine.</h2>
    <p>HYROX-focused run clubs run every Friday morning — coached sessions built to develop running endurance and teach pacing for the 8-kilometer format. The hardest part of HYROX is running well after a workout station, and that's exactly what these sessions train.</p>
    <p>Whether you're racing solo, in doubles, or on a relay team, Friday run clubs prep you for race day.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
