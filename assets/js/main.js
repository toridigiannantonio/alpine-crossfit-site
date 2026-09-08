// Alpine CrossFit — minimal JS
// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        links.classList.contains("open") ? "true" : "false"
      );
    });
  }
});

// Keep the page's bottom padding equal to the sticky CTA bar's real height.
// Hard-coded values drifted: at 320px the buttons wrap and the bar grows,
// which left it covering the last line of the footer.
(function () {
  var bar = document.querySelector(".sticky-cta");
  if (!bar) return;
  function sync() {
    document.body.style.paddingBottom = Math.ceil(bar.getBoundingClientRect().height) + 8 + "px";
  }
  sync();
  window.addEventListener("resize", sync);
  if (window.ResizeObserver) new ResizeObserver(sync).observe(bar);
})();
