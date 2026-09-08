// /blog/ archive search.
//
// Progressive enhancement: every note is already in the HTML, grouped by
// theme in <details> elements. This only filters what's there — with
// JavaScript off the page is still a complete, browsable archive.
(function () {
  var input = document.getElementById("archive-search");
  var groupsEl = document.getElementById("archive-groups");
  var emptyEl = document.getElementById("archive-empty");
  var statusEl = document.getElementById("archive-status");
  if (!input || !groupsEl) return;

  var groups = Array.prototype.slice.call(
    groupsEl.querySelectorAll(".archive-group")
  );
  // The Articles list sits in its own section above the archive, but a
  // reader searching "murph" means the Murph guide as much as any note, so
  // it filters alongside them.
  var articles = Array.prototype.slice.call(
    document.querySelectorAll(".archive-article")
  );
  var articlesSection = document.getElementById("articles");
  var articlesEmpty = document.getElementById("articles-empty");
  var items = Array.prototype.slice.call(groupsEl.querySelectorAll(".note-item"));
  var total = items.length;

  // Remember whether a group was open before a search forced it open, so
  // clearing the box restores what the reader had rather than collapsing
  // everything underneath them.
  var openedBySearch = [];

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function reset() {
    items.forEach(function (li) {
      li.hidden = false;
    });
    articles.forEach(function (a) {
      a.hidden = false;
    });
    if (articlesEmpty) articlesEmpty.hidden = true;
    if (articlesSection) articlesSection.hidden = false;
    groups.forEach(function (g) {
      g.hidden = false;
      var badge = g.querySelector(".archive-count");
      if (badge) badge.textContent = badge.getAttribute("data-count");
      if (openedBySearch.indexOf(g) !== -1) g.open = false;
    });
    openedBySearch = [];
    if (emptyEl) emptyEl.hidden = true;
    setStatus("");
  }

  function filter(qRaw) {
    var q = qRaw.trim().toLowerCase();
    if (!q) return reset();

    var terms = q.split(/\s+/);
    var shown = 0;

    var matches = function (el) {
      var hay = el.getAttribute("data-search") || "";
      return terms.every(function (t) {
        return hay.indexOf(t) !== -1;
      });
    };

    var articleHits = 0;
    articles.forEach(function (a) {
      var hit = matches(a);
      a.hidden = !hit;
      if (hit) articleHits++;
    });
    if (articlesEmpty) articlesEmpty.hidden = articleHits !== 0;

    groups.forEach(function (g) {
      var groupHits = 0;
      var lis = g.querySelectorAll(".note-item");
      Array.prototype.forEach.call(lis, function (li) {
        // every term must appear somewhere in title/description/theme/source
        var hit = matches(li);
        li.hidden = !hit;
        if (hit) groupHits++;
      });

      g.hidden = groupHits === 0;
      var badge = g.querySelector(".archive-count");
      if (badge) badge.textContent = groupHits;
      if (groupHits > 0 && !g.open) {
        g.open = true;
        if (openedBySearch.indexOf(g) === -1) openedBySearch.push(g);
      }
      shown += groupHits;
    });

    if (emptyEl) emptyEl.hidden = shown !== 0;

    var parts = [];
    if (articleHits) parts.push(articleHits + (articleHits === 1 ? " article" : " articles"));
    if (shown) parts.push(shown + (shown === 1 ? " note" : " notes") + " of " + total);
    setStatus(
      parts.length === 0
        ? "Nothing matches “" + qRaw.trim() + "”."
        : parts.join(" and ") + " match."
    );
  }

  var t;
  input.addEventListener("input", function () {
    clearTimeout(t);
    var v = input.value;
    t = setTimeout(function () {
      filter(v);
    }, 120);
  });

  // Escape clears, the way a search field should behave.
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && input.value) {
      input.value = "";
      reset();
    }
  });

  // /blog/#discomfort opens that theme and scrolls to it.
  function openFromHash() {
    var id = (location.hash || "").replace(/^#/, "");
    if (!id) return;
    var target = document.getElementById(id);
    if (target && target.classList.contains("archive-group")) target.open = true;
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
