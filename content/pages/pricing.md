---
layout: layouts/page.njk
permalink: /pricing/
title: "CrossFit Pricing in Wheat Ridge — Alpine CrossFit"
description: "Alpine CrossFit memberships: Open Gym {{ site.pricing.tiers[0].price }}/mo, Unlimited {{ site.pricing.tiers[1].price }}/mo, Personal Training {{ site.pricing.tiers[2].price }}/mo. Every tier includes the wellness center and 24/7 access. Drop-ins {{ site.pricing.visitOptions[1].price }}, week pass {{ site.pricing.visitOptions[2].price }}. Free No Sweat Intro."
canonical: "https://alpinecrossfit.com/pricing/"
eyebrow: "Pricing"
heading: "What it costs to train at Alpine."
dek: "Three tiers, month-to-month, no contracts and no initiation fees. Every tier includes the wellness center and 24/7 facility access."
heroCtas:
  - { label: "Book a free intro", href: "/free-intro/", style: "btn-primary btn-lg" }
  - { label: "Drop in — {{ site.pricing.visitOptions[1].price }}", href: "{{ site.pricing.visitOptions[1].ctaHref }}", style: "btn-primary btn-lg" }
trustStrip: "<span>Month-to-month</span><span class=\"sep\">·</span><span>No contracts</span><span class=\"sep\">·</span><span>No initiation fees</span>"
faqEyebrow: "Pricing FAQ"
faqHeading: "Pricing questions."
faqIds:
  - how-much
  - which-membership
  - unlimited-worth-it
  - open-gym-included
  - pt-tier
  - contract
  - freeze
  - cancel
  - buy-online
  - payment-methods
  - discounts
  - price-comparison
schemaTypes: ["healthclub", "faq"]
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://alpinecrossfit.com/pricing/"}
      ]
    }
finalCta:
  heading: "Still have questions?"
  body: "The fastest way to figure out if Alpine fits is to come meet a coach. Free, 30 minutes, no pressure."
  ctas:
    - { label: "Book a free intro", href: "/free-intro/", inlineStyle: "background:#000;color:#fff;" }
---

<section class="section section-dark">
  <div class="container">
    <span class="eyebrow">Memberships</span>
    <h2 class="section-heading">Three tiers. Month-to-month.</h2>
    {% set pricingNote = "Unlimited is our most popular membership — coached classes, recovery, and 24/7 access bundled into one price." %}
    {% include "partials/pricing-tiers.njk" %}
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">Why we publish it</span>
    <h2>No sales call required.</h2>
    <p>Most boutique gyms hide pricing behind a lead form. If you're trying to work out whether a gym fits your budget, you shouldn't need a phone call to find out. Every membership above is month-to-month: no annual contract, no initiation fee, cancel anytime with 30 days notice.</p>
    <p><strong>Not sure which tier?</strong> Pick by how you'll actually train. Facility and wellness center without coached classes, {{ site.pricing.tiers[0].price }}. Training three or more times a week in coached classes, {{ site.pricing.tiers[1].price }} — what roughly two-thirds of members choose. A specific performance goal like a HYROX race or a return to sport, {{ site.pricing.tiers[2].price }}. If you're between two, start with the cheaper one; upgrading later takes about 30 seconds.</p>
  </div>
</section>

{# Absorbed from the former /drop-in/ page. #}
<section class="section section-dark" id="visiting">
  <div class="container">
    <span class="eyebrow">Visiting or trying us out</span>
    <h2 class="section-heading">Ways in that aren't a membership.</h2>
    <p class="hero-dek">Travelling through the metro, visiting from another affiliate, or just want to see the place first.</p>
    {% include "partials/visit-options.njk" %}
    <p class="text-center text-muted mt-8" style="font-size:0.9rem;max-width:64ch;margin-left:auto;margin-right:auto;">Book and pay online and the waiver is part of the same checkout — nothing to sort out at the door. 24 hours notice is helpful but not required; text <a href="sms:{{ site.phoneSms }}">{{ site.phoneDisplay }}</a> and we'll fit you in. The free No Sweat Intro is a conversation, not a class — if you already train and just want a workout, take the drop-in instead.</p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">Included with every membership</span>
    <h2>What you actually get.</h2>
    <ul class="feature-list" style="font-size:1rem;">
      <li><strong>Wellness center access.</strong> {{ site.wellness.prose | capitalize }} — recovery tools usually reserved for high-end clinics, bundled into every tier.</li>
      <li><strong>24/7 facility access.</strong> Train on your schedule, not ours.</li>
      <li><strong>A gym where the owners train alongside you.</strong> Programming stays in-house, written by Megan Markee (2× CrossFit Games Semifinalist) in collaboration with owner April DiGiannantonio.</li>
      <li><strong>No hidden fees.</strong> No initiation, no annual fee, no surcharges.</li>
      <li><strong>Month-to-month freedom.</strong> No contracts. Cancel with 30 days notice.</li>
    </ul>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
