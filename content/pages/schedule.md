---
title: Class Schedule — Alpine CrossFit Wheat Ridge
description: Alpine CrossFit's weekly class schedule — CrossFit, Strong AF
  strength, Hybrid (HYROX-style), Downshift yoga, Prime Vitality (55+), and
  wellness center hours. 10+ classes a day in Wheat Ridge, CO.
eyebrow: Schedule
heading: 10+ classes a day, seven days a week.
dek: Drop in anytime. Every class is led by an experienced coach.
heroCtas:
  - label: "Book a free intro"
    href: /free-intro/
    style: btn-primary btn-lg
  - label: "Drop in — {{ site.pricing.visitOptions[1].price }}"
    href: "{{ site.pricing.visitOptions[1].ctaHref }}"
    style: btn-primary btn-lg
layout: layouts/page.njk
permalink: /schedule/
canonical: https://alpinecrossfit.com/schedule/
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "Schedule", "item": "https://alpinecrossfit.com/schedule/"}
      ]
    }
finalCta:
  heading: Ready to train?
  ctas:
    - label: "Book a free intro"
      href: /free-intro/
      inlineStyle: background:var(--color-grit-deep);color:var(--color-glacier);
    - label: "Drop-In"
      href: /pricing/#visiting
      inlineStyle: background:transparent;color:var(--color-grit-deep);border-color:var(--color-grit-deep);
schemaTypes: ["healthclub", "faq"]
faqEyebrow: "Questions"
faqHeading: "Schedule questions."
faqIds:
  - how-often
  - class-length
  - class-size
  - specialty-classes
  - sunday-classes
  - can-i-drop-in
---

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">CrossFit</span>
    <h2>Group classes.</h2>
    <p><strong>Monday–Friday:</strong> 5:30, 6:30, 8:00 AM · 12:00, 3:30, 4:30, 5:30 PM</p>
    <p><strong>Saturday:</strong> 8:00, 9:00 AM</p>
    <p style="margin-top: var(--space-4); font-size: 0.95rem; color: var(--color-text-muted);">Every class is capped at 15 athletes and led by an experienced coach.</p>
  </div>
</section>

<section class="section section-forest" id="specialty">
  <div class="container container-narrow">
    <span class="eyebrow">Specialty classes</span>
    <h2>Strong AF, Hybrid, and Downshift.</h2>
    <div class="class-block" id="strong-af">
      <h3>Strong AF <span class="class-tag">Strength</span></h3>
      <p>Coached strength work. <a href="/classes/#strong-af">About Strong AF →</a></p>
      <p><strong>Monday:</strong> 4:30, 5:30 PM<br>
      <strong>Tuesday &amp; Thursday:</strong> 6:30, 7:30 AM<br>
      <strong>Wednesday:</strong> 5:30 PM<br>
      <strong>Saturday:</strong> 7:00 AM<br>
      Starts October 26.</p>
    </div>
    <div class="class-block" id="hybrid">
      <h3>Hybrid <span class="class-tag">HYROX-style</span></h3>
      <p>Running, stations, and strength-endurance. <a href="/classes/#hybrid">About Hybrid →</a></p>
      <p><strong>Wednesday:</strong> 7:00 AM, 4:30 PM, starting October 26<br>
      <strong>Sunday:</strong> 8:00 – 9:30 AM</p>
      <p>Tuesday is endurance day. Every class that day is built around endurance, which makes it a great fit for hybrid athletes.</p>
    </div>
    <div class="class-block" id="downshift">
      <h3>Downshift <span class="class-tag">Yoga &amp; recovery</span></h3>
      <p>45-minute yoga and recovery. <a href="/classes/#downshift">About Downshift →</a></p>
      <p><strong>Sunday:</strong> 9:45 – 10:30 AM, two Sundays a month starting November 1</p>
    </div>
    <p style="margin-top: var(--space-4); font-size: 0.95rem;">All three are included with Unlimited. On Open Gym, class plans, and punch cards, each class counts as one sign-in.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">Prime Vitality</span>
    <h2>Strength & conditioning for adults 55+.</h2>
    <p><strong>Monday, Wednesday, Friday:</strong> 10:00 AM</p>
    <p style="margin-top: var(--space-4);">Included with Unlimited membership. Designed specifically for the 55+ body — strength work, barbell training, functional movement, scaled appropriately.</p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">Wellness Center</span>
    <h2>Recovery amenities.</h2>
    <p><strong>Mon–Fri:</strong> 5:30 AM – 6:30 PM</p>
    <p><strong>Sat:</strong> 8:00 – 10:00 AM</p>
    <p><strong>Sun:</strong> 8:00 – 9:30 AM</p>
    <p style="margin-top: var(--space-4);">Sauna, cold plunges, compression boots, peptide therapy. Included with every membership.</p>
    <p class="text-muted" style="margin-top: var(--space-4); font-size: 0.9rem;">Unlimited members also have 24/7 facility access.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
