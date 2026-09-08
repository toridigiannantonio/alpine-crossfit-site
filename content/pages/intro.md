---
layout: layouts/page.njk
permalink: /intro/
title: "Schedule your No Sweat Intro — Alpine CrossFit"
description: "Pick a time for your free No Sweat Intro at Alpine CrossFit in Wheat Ridge. 30 minutes, no workout, no pressure."
canonical: "https://alpinecrossfit.com/intro/"
ogImage: "https://alpinecrossfit.com/assets/img/hero-alpine-wall.jpg"
noindex: true
schemaTypes: []
eyebrow: "You're in"
heading: "Now pick a <span class=\"accent\">time</span>."
dek: "Thanks for your info. Choose a time below for your free No Sweat Intro — 30 minutes with a coach, no workout, no pressure."
---

{# DO NOT DELETE THIS PAGE.
   It has zero inbound links by design: it is the redirect target of the
   opt-in form on /free-intro/, and it holds the booking calendar. Removing
   it breaks intro bookings outright.

   It used to carry five more sections — reviews, a what-to-wear grid, a
   minute-by-minute walkthrough, a "while you wait" link grid, and a
   directions card. All of that belongs on /free-intro/ and /visit/, BEFORE
   someone commits. By the time a visitor is here they have already opted in
   and only need one thing: to pick a time. Everything else was friction
   between them and the calendar. #}

<section class="section">
  <div class="container container-narrow">
    <span class="eyebrow">Book your intro</span>
    <h2>Pick a time that works.</h2>

    <div class="form-wrap" style="margin-top:var(--space-6); background:#fff; border-radius:var(--radius-lg); overflow:hidden;">
      <iframe
        id="G2tY5mJrTvIXowv2ZcyX_1777058045577"
        src="https://link.gymntx.com/widget/booking/G2tY5mJrTvIXowv2ZcyX"
        style="width:100%; min-height:900px; border:none; display:block;"
        scrolling="no"
        title="Book your No Sweat Intro">
      </iframe>
    </div>
    <script>
      (function () {
        var qs = window.location.search;
        if (!qs || qs.length < 2) return;
        // Forward URL params to the booking iframe (skips re-entry of name/email).
        var iframe = document.getElementById("G2tY5mJrTvIXowv2ZcyX_1777058045577");
        if (iframe) {
          iframe.src = "https://link.gymntx.com/widget/booking/G2tY5mJrTvIXowv2ZcyX" + qs;
        }
        // Visitor just submitted the optin on /free-intro/ and landed here
        // with their info — fire a Lead conversion for Meta Pixel + GA4.
        if (window.fbq) { fbq('track', 'Lead'); }
        if (window.gtag) {
          gtag('event', 'generate_lead', { method: 'no_sweat_intro_optin' });
        }
      })();
    </script>

    <p class="text-muted mt-6" style="font-size:0.95rem;">
      Free on-site parking at {{ site.address.street }} — the Alpine entrance is on the front of the building. Widget slow to load or can't find a time? <a href="sms:{{ site.phoneSms }}">Text us {{ site.phoneDisplay }}</a> and we'll book it for you.
    </p>
  </div>
</section>

<script src="https://link.gymntx.com/js/form_embed.js" type="text/javascript"></script>
