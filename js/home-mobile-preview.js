(function () {
  function isMobilePreview() {
    return document.body.classList.contains("page-mobile-preview");
  }

  function initMobAccordions() {
    document.querySelectorAll("[data-mob-accordion]").forEach((root) => {
      const single = root.dataset.mobAccordion === "single";

      root.querySelectorAll(".mob-accordion-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const item = trigger.closest(".mob-accordion-item");
          const panel = item?.querySelector(".mob-accordion-panel");
          if (!panel) return;

          const willOpen = panel.hidden;

          if (single && willOpen) {
            root.querySelectorAll(".mob-accordion-item").forEach((other) => {
              if (other === item) return;
              const otherPanel = other.querySelector(".mob-accordion-panel");
              const otherTrigger = other.querySelector(".mob-accordion-trigger");
              if (otherPanel) otherPanel.hidden = true;
              if (otherTrigger) {
                otherTrigger.setAttribute("aria-expanded", "false");
                const icon = otherTrigger.querySelector(".mob-accordion-icon");
                if (icon) icon.textContent = "+";
              }
            });
          }

          panel.hidden = !willOpen;
          trigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
          const icon = trigger.querySelector(".mob-accordion-icon");
          if (icon) icon.textContent = willOpen ? "−" : "+";
        });
      });
    });

    const compareToggle = document.querySelector(".mob-compare-toggle");
    const comparePanel = document.querySelector(".mob-compare-panel");
    if (compareToggle && comparePanel) {
      compareToggle.addEventListener("click", () => {
        const willOpen = comparePanel.hidden;
        comparePanel.hidden = !willOpen;
        compareToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        const icon = compareToggle.querySelector(".mob-accordion-icon");
        if (icon) icon.textContent = willOpen ? "−" : "+";
      });
    }
  }

  function initFaqShowMore() {
    const btn = document.getElementById("faq-show-more");
    const wrap = document.getElementById("faq-extra-wrap");
    if (!btn || !wrap) return;

    btn.addEventListener("click", () => {
      wrap.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      btn.hidden = true;
    });
  }

  function initStickyCta() {
    const bar = document.getElementById("mob-sticky-cta");
    const hero = document.querySelector(".hero--mobile-preview");
    if (!bar || !hero) return;

    const mq = window.matchMedia("(max-width: 960px)");

    function update() {
      if (!mq.matches) {
        bar.hidden = true;
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      bar.hidden = heroBottom > 0;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!isMobilePreview()) return;
    initMobAccordions();
    initFaqShowMore();
    initStickyCta();
  });
})();
