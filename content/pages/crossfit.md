---
layout: layouts/page.njk
permalink: /crossfit/
title: "CrossFit Classes in Wheat Ridge — Alpine CrossFit"
description: "Coach-led CrossFit classes in Wheat Ridge — every class led by a CF-L2 professional, capped at 15, programmed in-house by a 2× CrossFit Games Semifinalist. New to CrossFit? Start with Foundations. Free intro."
canonical: "https://alpinecrossfit.com/crossfit/"
eyebrow: "CrossFit"
heading: "Coach-led CrossFit classes in <span class=\"accent\">Wheat Ridge</span>."
dek: "Every class is led by a CF-L2 certified coach, capped at 15 athletes, and programmed in-house. Beginners and lifelong athletes train the same workout, scaled to their version of hard."
heroCtas:
  - { label: "Book a free intro", href: "/free-intro/", style: "btn-primary btn-lg" }
trustStrip: "<span>Every class CF-L2 coached</span><span class=\"sep\">·</span><span>Capped at 15 athletes</span><span class=\"sep\">·</span><span>Scaled to every level</span>"
faqEyebrow: "Common questions"
faqHeading: "CrossFit and beginner questions."
faqIds:
  - class-length
  - class-size
  - who-programs
  - is-crossfit-safe
  - crossfit-vs-gym
  - in-shape-first
  - foundations
  - first-class
schemaTypes: ["healthclub", "faq"]
extraSchemas:
  - {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alpinecrossfit.com/"},
        {"@type": "ListItem", "position": 2, "name": "CrossFit", "item": "https://alpinecrossfit.com/crossfit/"}
      ]
    }
finalCta:
  heading: "Ready to train?"
  body: "Book a free No Sweat Intro — 30 minutes with a coach to talk through goals, tour the gym, and find the right way in."
  ctas:
    - { label: "Book a free intro", href: "/free-intro/", inlineStyle: "background:#000;color:#fff;" }
---

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">The short answer</span>
    <h2>What a class looks like.</h2>
    <p>Every Alpine CrossFit class is a 60-minute coached session with five parts:</p>
    <ul class="feature-list">
      <li><strong>Introduction (5 min):</strong> The coach explains the day's workout and talks through scaling options.</li>
      <li><strong>General warm-up (10 min):</strong> Movement prep and mobility work.</li>
      <li><strong>Strength or skill (15 min):</strong> Progressive barbell work or movement practice.</li>
      <li><strong>Workout of the Day (20 min):</strong> Timed or scored metabolic conditioning.</li>
      <li><strong>Cool-down (10 min):</strong> Recovery breathing, mobility, and accessory work.</li>
    </ul>
    <p>A CF-L2 certified coach is on the floor the entire hour, and every class is capped at <strong>15 athletes</strong>. Scaling — load, range of motion, complexity — happens in real time. Beginners aren't held back and advanced athletes aren't held back; everyone trains the same workout, scaled to their version of hard.</p>
  </div>
</section>

<section class="section section-dark">
  <div class="container container-narrow">
    <span class="eyebrow">In-house programming</span>
    <h2>Who writes the workouts.</h2>
    <p>Every workout is programmed in-house by Megan Markee (CSCS, 2× CrossFit Games Semifinalist) in collaboration with owner April DiGiannantonio (CSCS, SCCC, former Division I Director of Sports Performance). Constantly varied — true CrossFit methodology, not a franchise template, not a subscription service, not a random WOD generator.</p>
    <p>Megan trains at Alpine every day and does the workouts she writes, alongside the members doing them with her. That keeps the programming honest.</p>
  </div>
</section>

{# Absorbed from the former /beginners/ page. #}
<section class="section" id="beginners">
  <div class="container container-narrow">
    <span class="eyebrow">New to CrossFit</span>
    <h2>Brand new? Start here.</h2>
    <p>Most Alpine members started with zero CrossFit experience, and many hadn't stepped into a gym in years. You do not need to get in shape first — that's the single most common reason people put this off, and it's backwards. Every movement scales down as far as it needs to.</p>
    <p>The path from "I've never done this" to "I'm in a group class with a coach who knows my name":</p>
    <ol class="feature-list" style="list-style-type: decimal;">
      <li><strong>Free No Sweat Intro.</strong> Thirty minutes with a coach. Tour the gym, talk through your goals, leave with a recommendation. No workout, no cost, no pressure.</li>
      <li><strong>Foundations on-ramp.</strong> Private one-on-one sessions teaching the core movements — squat, deadlift, press, pull, carry — before you join a group class. Typically three to five sessions; your coach calls it based on movement quality, not a calendar.</li>
      <li><strong>Group classes.</strong> Join the regular schedule, with a CF-L2 coach in every class.</li>
    </ol>
    <p class="text-muted mt-6">Group classes work better when you already know the basics: you move with confidence, you understand the coach's cues, and you spend your energy on effort instead of on "what am I doing?"</p>
  </div>
</section>

{# Absorbed from the former /what-to-expect/ page. #}
<section class="section section-dark" id="first-visit">
  <div class="container container-narrow">
    <span class="eyebrow">Your first visit</span>
    <h2>What to expect when you walk in.</h2>
    <p>Which visit you're booking changes what the day looks like, so it's worth knowing the difference before you arrive.</p>
    <p>A <strong>free No Sweat Intro</strong> is a conversation, not a class. Thirty minutes with a CF-L2 coach: you'll tour the gym, talk through your goals and training history, and leave with a recommendation. You won't work out, so there's nothing to bring and nothing to be nervous about. It also includes time to sit and watch a class in progress if you'd like.</p>
    <p>A <strong>drop-in</strong> is a real class. You'll train alongside members in a coached session, scaled to whatever you can do that day. Drop-ins are {{ site.pricing.visitOptions[1].price }} and you can <a href="/pricing/#visiting">book and pay online</a> before you arrive.</p>
    <p>Either way: workout clothes, athletic shoes, a water bottle. We provide everything else — towels, sanitizing spray, movement modifications, and coaching.</p>
    <p class="text-muted mt-6">Address, hours, parking, and drive times are on the <a href="/visit/">Location &amp; Hours</a> page.</p>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    {% include "partials/faq-list.njk" %}
  </div>
</section>
