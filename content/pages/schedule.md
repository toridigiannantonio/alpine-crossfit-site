---
title: Class Schedule — Alpine CrossFit Wheat Ridge
description: Alpine CrossFit's weekly class schedule — CrossFit, Prime Vitality
  (55+), and wellness center hours. 10+ classes a day in Wheat Ridge, CO.
eyebrow: Schedule
heading: 10+ classes a day, seven days a week.
dek: Drop in anytime. Every class is coached by a CF-L2 certified professional.
heroCtas:
  - label: "Book a free intro"
    href: /free-intro/
    style: btn-primary btn-lg
  - label: "Drop-In"
    href: /pricing/#visiting
    style: btn-secondary btn-lg
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
      inlineStyle: background:#000;color:#fff;
    - label: "Drop-In"
      href: /pricing/#visiting
      inlineStyle: background:transparent;color:#000;border-color:#000;
schemaTypes: ["healthclub", "faq"]
faqEyebrow: "Questions"
faqHeading: "Schedule questions."
faqIds:
  - how-often
  - class-length
  - class-size
  - sunday-classes
  - can-i-drop-in
---

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">CrossFit</span>
    <h2>Group classes.</h2>
    <p><strong>Monday–Friday:</strong> 5:30, 6:30, 8:00 AM · 12:00, 3:30, 4:30, 5:30 PM</p>
    <p><strong>Saturday:</strong> 8:00, 9:00 AM</p>
    <p><strong>Sunday:</strong> 9:00 AM</p>
    <p style="margin-top: var(--space-4); font-size: 0.95rem; color: var(--color-text-muted);">Every class is capped at 15 athletes and coached by a CF-L2 certified professional.</p>
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
    <p><strong>Sun:</strong> 8:00 – 9:00 AM</p>
    <p style="margin-top: var(--space-4);">Sauna, cold plunges, compression boots, peptide therapy. Included with every membership tier.</p>
    <p class="text-muted" style="margin-top: var(--space-4); font-size: 0.9rem;">Unlimited members also have 24/7 facility access.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
