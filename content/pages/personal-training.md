---
layout: layouts/page.njk
permalink: /personal-training/
title: "Personal Training in Wheat Ridge — 1-on-1 with CF-L2 Coaches at Alpine CrossFit"
description: "One-on-one personal training in Wheat Ridge with CF-L2 certified coaches. Injury recovery, sports performance, strength goals. 12 sessions/month included. Serving Arvada, Lakewood, Applewood, and Golden."
canonical: "https://alpinecrossfit.com/personal-training/"
eyebrow: "Personal Training"
heading: "1-on-1 personal training in <span class=\"accent\">Wheat Ridge</span>."
dek: "Work one-on-one with a CF-L2 certified coach on your specific goals — injury recovery, sports performance, or measurable strength. Programming designed for your body. 12 sessions a month, included with the Personal Training tier."
heroCtas:
  - { label: "Book a consultation", href: "/free-intro/", style: "btn-primary btn-lg" }
  - { label: "See membership pricing", href: "/pricing/", style: "btn-secondary btn-lg" }
trustStrip: "<span>12 sessions/month included</span><span class=\"sep\">·</span><span>Individualized programming</span><span class=\"sep\">·</span><span>CF-L2 coached</span>"
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "Personal Training", "item": "https://alpinecrossfit.com/personal-training/"}
      ]
    }
finalCta:
  heading: "Ready to start?"
  body: "Book a free consultation — 30 minutes with a coach to talk through your goals and see if personal training is the right fit."
  ctas:
    - { label: "Schedule a consultation", href: "/free-intro/", inlineStyle: "background:#000;color:#fff;" }
schemaTypes: ["healthclub", "faq"]
faqEyebrow: "Common questions"
faqHeading: "Personal training questions."
faqIds:
  - personal-training
  - pt-tier
  - pt-vs-classes
  - pt-injury-recovery
  - who-coaches
---

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">What it is</span>
    <h2>Custom coaching for your specific goals.</h2>
    <p>One-on-one personal training at Alpine is exactly what you need and nothing you do not. Your coach designs programming specific to your goals, your body, and your schedule — and coaches every session personally.</p>
    <ul class="feature-list">
      <li><strong>Injury recovery</strong> — work around limitations, progress carefully, coordinate with your PT if needed.</li>
      <li><strong>Sports performance</strong> — train specifically for your sport: speed, power, agility, endurance.</li>
      <li><strong>Strength goals</strong> — build toward specific benchmarks: your first strict pull-up, a heavy squat, a faster mile.</li>
      <li><strong>Life goals</strong> — get back in shape after kids, build strength to keep up with grandchildren, feel better in your body.</li>
    </ul>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">PT vs. group</span>
    <h2>What's the difference between personal training and group CrossFit classes?</h2>
    <p>Group CrossFit at Alpine is a 60-minute coached class — that day's programming, scaled to the up-to-15 athletes in the room. It is excellent and the right fit for most members.</p>
    <p>Personal training is one-on-one. Your coach builds programming specific to your body and your goals, and coaches the entire session for you alone. Many members do both — PT for specific work (injury rehab, a stubborn goal, a sport), group classes for community and intensity.</p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">The tier</span>
    <h2>What does personal training cost?</h2>
    <p><strong>{{ site.pricing.tiers[2].price }}/month</strong> — month-to-month, no contract, no initiation fee.</p>
    <p>The Personal Training membership includes:</p>
    <ul class="feature-list">
      <li>12 one-on-one PT sessions per month (roughly three per week)</li>
      <li>Individualized programming written for your body and goals</li>
      <li>Unlimited group CrossFit classes</li>
      <li>Prime Vitality (55+) access</li>
      <li>Full wellness center access — steam sauna, cold plunges, compression boots, peptide therapy</li>
      <li>24/7 facility access</li>
    </ul>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">Your coaches</span>
    <h2>Who are the trainers?</h2>
    <p>Personal training at Alpine is coached by one of Lisa Arcangel, Liz Kushner, Dean Weeks, or owner April DiGiannantonio — all CF-L2 certified, with years of one-on-one coaching experience. Your coach builds your program and coaches every session personally. <a href="/coaches/">Meet the coaches →</a></p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
