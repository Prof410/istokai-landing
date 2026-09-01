(function () {
  var STORAGE_KEY = "zakon-footer-variant";
  var VALID = ["v1", "v2", "v3", "v4", "v5"];

  function cloneFooterPreviews() {
    var source = document.getElementById("site-footer");
    if (!source) return;

    document.querySelectorAll(".footer-preview-frame").forEach(function (frame) {
      var variant = frame.getAttribute("data-footer-frame") || "v1";
      var clone = source.cloneNode(true);
      clone.removeAttribute("id");
      VALID.forEach(function (v) {
        clone.classList.remove("footer--" + v);
      });
      clone.classList.add("footer--" + variant);
      frame.textContent = "";
      frame.appendChild(clone);
    });
  }

  function applyVariant(variant, scrollToFooter) {
    if (VALID.indexOf(variant) === -1) variant = "v1";

    var footer = document.getElementById("site-footer");
    if (footer) {
      VALID.forEach(function (v) {
        footer.classList.remove("footer--" + v);
      });
      footer.classList.add("footer--" + variant);
    }

    document.querySelectorAll(".footer-preview-card").forEach(function (card) {
      var active = card.getAttribute("data-footer-variant") === variant;
      card.classList.toggle("is-active", active);
      var btn = card.querySelector(".footer-preview-apply");
      if (btn) {
        btn.classList.toggle("is-active", active);
        btn.textContent = active ? "Выбрано" : "Выбрать";
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, variant);
    } catch (e) {}

    if (scrollToFooter && footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function init() {
    cloneFooterPreviews();

    var saved = "v1";
    try {
      saved = localStorage.getItem(STORAGE_KEY) || "v1";
    } catch (e) {}
    if (VALID.indexOf(saved) === -1) saved = "v1";
    applyVariant(saved, false);
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest(".footer-preview-apply");
    if (!btn) return;
    var card = btn.closest(".footer-preview-card");
    if (!card) return;
    applyVariant(card.getAttribute("data-footer-variant") || "v1", true);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
