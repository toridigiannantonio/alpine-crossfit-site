---
layout: layouts/page.njk
permalink: /visit/
title: "Location & Hours — Alpine CrossFit in Wheat Ridge, CO"
description: "Alpine CrossFit is at {{ site.address.street }}, {{ site.address.city }}, {{ site.address.region }} {{ site.address.postalCode }}. Staffed hours, 24/7 member access, free on-site parking, and drive times from Applewood, Arvada, Lakewood, and Golden."
canonical: "https://alpinecrossfit.com/visit/"
eyebrow: "Location & Hours"
heading: "Location &amp; hours."
dek: "{{ site.address.street }}, {{ site.address.city }}, {{ site.address.region }} {{ site.address.postalCode }}. Free parking. Every membership includes 24/7 facility access."
heroCtas:
  - { label: "Book a free intro", href: "/free-intro/", style: "btn-primary btn-lg" }
  - { label: "Drop in — {{ site.pricing.visitOptions[1].price }}", href: "{{ site.pricing.visitOptions[1].ctaHref }}", style: "btn-primary btn-lg" }
trustStrip: '<span class="stars">★★★★★</span><span>5.0 from 180 Google reviews</span>'
faqEyebrow: "Getting here"
faqHeading: "Visiting questions."
faqIds:
  - where-located
  - hours
  - parking
  - 24-7-access
  - need-appointment
  - what-to-bring
schemaTypes: ["healthclub", "faq"]
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "Location & Hours", "item": "https://alpinecrossfit.com/visit/"}
      ]
    }
finalCta:
  heading: "Come see the gym."
  ctas:
    - { label: "Book a free intro", href: "/free-intro/", inlineStyle: "background:#000;color:#fff;" }
---

<section class="section">
  <div class="container">
    <span class="eyebrow">Getting here</span>
    <h2 class="section-heading">Address, hours, and parking.</h2>
    <div class="split">
      {% set locationCta = true %}
      {% include "partials/location-card.njk" %}
      {% include "partials/map-embed.njk" %}
    </div>
  </div>
</section>

<section class="section section-dark" id="areas">
  <div class="container container-narrow">
    <span class="eyebrow">Areas we serve</span>
    <h2>Minutes from Applewood, Arvada, Lakewood, and Golden.</h2>
    <p>Alpine is one gym, in Wheat Ridge, just off I-70 near Kipling. Members drive in from across the northwest metro — here's roughly how long it takes:</p>
    {% include "partials/areas-served.njk" %}
    <p class="text-muted mt-6" style="font-size:0.9rem;">Also minutes from the Wheat Ridge/Ward G Line light rail station.</p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">When we train</span>
    <h2>Class times.</h2>
    {%- for block in site.classSchedule %}
    <h3{% if not loop.first %} class="mt-6"{% endif %}>{{ block.heading }}</h3>
    {%- for line in block.lines %}
    <p>{{ line | safe }}</p>
    {%- endfor %}
    {%- endfor %}
    <p class="mt-6"><a class="btn btn-secondary" href="/schedule/">See the full schedule →</a></p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
