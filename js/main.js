/**
 * Настройка формы заявок.
 *
 * Для GitHub Pages (статический сайт) зарегистрируйтесь на https://formspree.io,
 * создайте форму и вставьте ID ниже:
 *   https://formspree.io/f/ВАШ_ID
 *
 * Альтернатива: https://web3forms.com — тогда замените FORM_MODE на "web3forms"
 * и укажите ACCESS_KEY.
 */
const FORM_CONFIG = {
  mode: "formspree", // "formspree" | "web3forms" | "disabled"
  formspreeEndpoint: "https://formspree.io/f/xlgkyrqa",
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  /** Лист ожидания: по умолчанию тот же Formspree — заявки видны в dashboard с темой «Лист ожидания: …» */
  waitlistFormspreeEndpoint: "https://formspree.io/f/xlgkyrqa",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

function formatRuPhoneMask(raw) {
  let digits = String(raw || "").replace(/\D/g, "");
  if (!digits.length) return "";
  if (digits[0] === "7") digits = "8" + digits.slice(1);
  else if (digits[0] !== "8") digits = "8" + digits;
  digits = digits.slice(0, 11);
  if (digits.length <= 1) return "8";
  let out = "8(" + digits.slice(1, 4);
  if (digits.length < 4) return out;
  out = "8(" + digits.slice(1, 4) + ")";
  if (digits.length <= 4) return out;
  out += digits.slice(4, 7);
  if (digits.length <= 7) return out;
  out += "-" + digits.slice(7, 9);
  if (digits.length <= 9) return out;
  out += "-" + digits.slice(9, 11);
  return out;
}

function bindPhoneMask(input) {
  if (!input || input.dataset.maskBound === "1") return;
  input.dataset.maskBound = "1";
  input.setAttribute("inputmode", "tel");
  input.setAttribute("autocomplete", "tel");
  input.setAttribute("maxlength", "15");

  input.addEventListener("focus", () => {
    if (!input.value) {
      input.value = "8(";
    }
  });

  input.addEventListener("blur", () => {
    if (input.value === "8(" || input.value === "8") {
      input.value = "";
    }
  });

  input.addEventListener("input", () => {
    const formatted = formatRuPhoneMask(input.value);
    input.value = formatted;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Backspace" || input.selectionStart !== input.selectionEnd) return;
    const value = input.value;
    if (!value) return;
    const pos = input.selectionStart;
    if (pos > 0 && /[()\-\s]/.test(value[pos - 1])) {
      event.preventDefault();
      input.value = formatRuPhoneMask(value.slice(0, pos - 1) + value.slice(pos));
      const nextPos = Math.max(0, pos - 1);
      input.setSelectionRange(nextPos, nextPos);
    }
  });
}

function bindEmailInput(input) {
  if (!input || input.dataset.maskBound === "1") return;
  input.dataset.maskBound = "1";
  input.setAttribute("inputmode", "email");
  input.setAttribute("autocomplete", "email");
  input.setAttribute("spellcheck", "false");
  input.setAttribute(
    "pattern",
    "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"
  );

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\s+/g, "");
  });

  input.addEventListener("blur", () => {
    input.value = input.value.trim().toLowerCase();
    input.classList.toggle("input-invalid", input.value.length > 0 && !EMAIL_RE.test(input.value));
  });

  input.addEventListener("focus", () => {
    input.classList.remove("input-invalid");
  });
}

function initLeadFormFields() {
  document.querySelectorAll("#lead-form").forEach((form) => {
    bindPhoneMask(form.querySelector('[name="phone"]'));
    bindEmailInput(form.querySelector('[name="email"]'));
  });
}

const WAITLIST_PACKAGES = {
  finance: {
    subject: "Лист ожидания: Финансовый анализ",
    titleKey: "waitlist.finance.title",
    leadKey: "waitlist.finance.lead",
  },
};

function setWaitlistStatus(message, type) {
  const status = document.querySelector("#waitlist-form .waitlist-modal__status");
  if (!status) return;
  status.textContent = message;
  status.className = `waitlist-modal__status${type ? ` waitlist-modal__status--${type}` : ""}`;
}

function ensureWaitlistModal() {
  let modal = document.getElementById("waitlist-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "waitlist-modal";
  modal.className = "waitlist-modal";
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="waitlist-modal__backdrop" data-waitlist-close tabindex="-1"></div>
    <div class="waitlist-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="waitlist-modal-title">
      <button type="button" class="waitlist-modal__close" data-waitlist-close data-i18n-aria="waitlist.close" aria-label="Закрыть">×</button>
      <h2 id="waitlist-modal-title" class="waitlist-modal__title" data-i18n="waitlist.finance.title">Лист ожидания: Финансовый анализ</h2>
      <p class="waitlist-modal__lead" data-i18n="waitlist.finance.lead">Оставьте email — напишем, когда пакет будет готов в приложении.</p>
      <form id="waitlist-form" class="waitlist-modal__form" novalidate>
        <input type="hidden" name="package" value="finance">
        <label class="waitlist-modal__field">
          <span class="waitlist-modal__label" data-i18n="waitlist.email.label">Email</span>
          <input type="email" name="email" required autocomplete="email" data-i18n-placeholder="waitlist.email.placeholder" placeholder="you@company.ru">
        </label>
        <p class="waitlist-modal__consent" data-i18n-html="waitlist.consent">Нажимая «Отправить», вы соглашаетесь на обработку email для уведомления о запуске. <a href="/legal/privacy.html">Политика конфиденциальности</a>.</p>
        <button type="submit" class="btn btn-primary btn-contact-shimmer waitlist-modal__submit" data-i18n="waitlist.submit">Отправить</button>
        <p class="waitlist-modal__status" aria-live="polite"></p>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelectorAll("[data-waitlist-close]").forEach((el) => {
    el.addEventListener("click", closeWaitlistModal);
  });

  modal.querySelector("#waitlist-form")?.addEventListener("submit", submitWaitlistForm);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeWaitlistModal();
  });

  window.ZakonI18n?.applyI18n?.(window.ZakonI18n.getLang());
  bindEmailInput(modal.querySelector('input[name="email"]'));
  return modal;
}

function updateWaitlistModalCopy(packageId) {
  const config = WAITLIST_PACKAGES[packageId] || WAITLIST_PACKAGES.finance;
  const modal = document.getElementById("waitlist-modal");
  if (!modal) return;

  const title = modal.querySelector(".waitlist-modal__title");
  const lead = modal.querySelector(".waitlist-modal__lead");
  const pkgInput = modal.querySelector('input[name="package"]');

  if (title && config.titleKey) {
    title.dataset.i18n = config.titleKey;
    title.textContent = i18n(config.titleKey);
  }
  if (lead && config.leadKey) {
    lead.dataset.i18n = config.leadKey;
    lead.textContent = i18n(config.leadKey);
  }
  if (pkgInput) pkgInput.value = packageId;

  setWaitlistStatus("", "");
  const form = modal.querySelector("#waitlist-form");
  if (form) {
    form.classList.remove("waitlist-modal__form--done");
    form.querySelector('button[type="submit"]').disabled = false;
    const emailInput = form.querySelector('input[name="email"]');
    if (emailInput) emailInput.disabled = false;
  }
}

function openWaitlistModal(packageId = "finance") {
  const modal = ensureWaitlistModal();
  updateWaitlistModalCopy(packageId);
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("waitlist-modal-open");
  const emailInput = modal.querySelector('input[name="email"]');
  window.setTimeout(() => emailInput?.focus(), 50);
}

function closeWaitlistModal() {
  const modal = document.getElementById("waitlist-modal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("waitlist-modal-open");
}

async function submitWaitlistForm(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const email = form.email.value.trim();
  const packageId = form.package.value || "finance";
  const config = WAITLIST_PACKAGES[packageId] || WAITLIST_PACKAGES.finance;

  if (!EMAIL_RE.test(email)) {
    setWaitlistStatus(i18n("waitlist.error.email"), "error");
    return;
  }

  const endpoint = FORM_CONFIG.waitlistFormspreeEndpoint || FORM_CONFIG.formspreeEndpoint;
  if (FORM_CONFIG.mode === "disabled" || endpoint.includes("YOUR_FORM_ID")) {
    setWaitlistStatus(i18n("form.error.notConfigured"), "error");
    return;
  }

  submitBtn.disabled = true;
  setWaitlistStatus(i18n("waitlist.error.sending"), "");

  const payload = {
    email,
    _subject: config.subject,
    waitlist_package: packageId,
    source_page: window.location.pathname,
    form_type: "waitlist",
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("waitlist submit failed");
    }

    form.classList.add("waitlist-modal__form--done");
    form.email.disabled = true;
    setWaitlistStatus(i18n("waitlist.success"), "success");
  } catch {
    submitBtn.disabled = false;
    setWaitlistStatus(i18n("waitlist.error.generic"), "error");
  }
}

function initWaitlist() {
  document.querySelectorAll("[data-waitlist-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openWaitlistModal(trigger.dataset.waitlistOpen || "finance");
    });
  });
}

function i18n(key) {
  return window.ZakonI18n?.t?.(key) || key;
}

function getChatDemos() {
  return window.ZakonI18n?.getChatDemos?.() || [];
}

function getCaseChatDemos() {
  return window.ZakonI18n?.getCaseChatDemos?.() || [];
}

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeInto(element, cursor, text, speed = 28, isPaused = () => false) {
  if (!element) return;
  element.textContent = "";
  if (cursor) cursor.hidden = false;
  for (const char of text) {
    if (isPaused()) return;
    element.textContent += char;
    await wait(speed);
    if (isPaused()) return;
  }
  if (cursor) cursor.hidden = true;
}

async function initHeroTitleTypewriter() {
  const textEl = document.getElementById("hero-title-text");
  const cursor = document.getElementById("hero-title-cursor");
  const title = document.getElementById("hero-title");
  if (!textEl || !title) return;

  const fullText = title.dataset.typingText?.trim() || "";
  if (!fullText) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    textEl.textContent = fullText;
    if (cursor) cursor.hidden = true;
    return;
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  textEl.textContent = fullText;
  if (cursor) cursor.hidden = true;
  title.style.visibility = "hidden";
  title.style.minHeight = `${title.offsetHeight}px`;
  textEl.textContent = "";
  title.style.visibility = "";
  if (cursor) cursor.hidden = false;

  await wait(350);
  await typeInto(textEl, cursor, fullText, 26);
  title.style.minHeight = "";
  syncHeroChatHeight();
}

function syncHeroChatHeight() {
  const main = document.querySelector(".hero-main");
  const demo = document.querySelector(".chat-demo");
  if (!main || !demo) return;

  if (window.innerWidth <= 960) {
    demo.style.minHeight = "";
    return;
  }

  demo.style.minHeight = `${main.offsetHeight}px`;
}

function initChatDemo() {
  const root = document.getElementById("hero-chat-demo");
  if (!root) return;

  const docsEl = document.getElementById("demo-docs");
  const userBubble = document.getElementById("demo-user");
  const userText = document.getElementById("demo-user-text");
  const userCursor = document.getElementById("demo-user-cursor");
  const botBubble = document.getElementById("demo-bot");
  const botText = document.getElementById("demo-bot-text");
  const botCursor = document.getElementById("demo-bot-cursor");
  const sourceEl = document.getElementById("demo-source");
  const typingEl = document.getElementById("demo-typing");
  const inputText = document.getElementById("demo-input-text");
  const inputCursor = document.getElementById("demo-input-cursor");
  const dots = root.querySelectorAll("[data-demo]");

  let demoIndex = 0;
  let runId = 0;
  let paused = false;

  function renderDocs(docs) {
    docsEl.innerHTML = docs.map((name) => `<span class="doc-chip">${name}</span>`).join("");
  }

  function resetStage() {
    userBubble.hidden = true;
    botBubble.hidden = true;
    typingEl.hidden = true;
    sourceEl.hidden = true;
    userText.textContent = "";
    botText.textContent = "";
    sourceEl.textContent = "";
    inputText.textContent = "";
    userCursor.hidden = true;
    botCursor.hidden = true;
    inputCursor.hidden = false;
  }

  async function typeIntoLocal(element, cursor, text, speed = 28) {
    return typeInto(element, cursor, text, speed, () => paused);
  }

  function isDemoStopped(currentRun) {
    return paused || currentRun !== runId;
  }

  async function playDemo(index) {
    const currentRun = ++runId;
    const demos = getChatDemos();
    const demo = demos[index];
    if (!demo) return;

    demoIndex = index;
    resetStage();
    renderDocs(demo.docs);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));

    await wait(400);
    if (isDemoStopped(currentRun)) return;

    inputText.textContent = demo.question;
    inputCursor.hidden = true;
    userBubble.hidden = false;
    userText.textContent = demo.question;
    userCursor.hidden = true;
    botBubble.hidden = false;
    botText.textContent = demo.answer;
    botCursor.hidden = true;
    sourceEl.textContent = demo.source;
    sourceEl.hidden = false;
    syncHeroChatHeight();

    await wait(5000);
    if (isDemoStopped(currentRun)) return;

    playDemo((index + 1) % demos.length);
  }

  function startDemo(index) {
    demoIndex = index;
    runId += 1;
    paused = false;
    playDemo(demoIndex);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      startDemo(Number(dot.dataset.demo));
    });
  });

  root.addEventListener("mouseenter", () => {
    paused = true;
  });

  root.addEventListener("mouseleave", () => {
    if (!paused) return;
    paused = false;
    playDemo(demoIndex);
  });

  startDemo(0);
  syncHeroChatHeight();
  window.addEventListener("resize", syncHeroChatHeight);
  window.__zakonRestartChatDemo = () => startDemo(0);
}

function getCaseChatDemosList() {
  return getCaseChatDemos();
}

function initCaseCarousel() {
  const root = document.getElementById("case-carousel");
  if (!root) return;

  const track = root.querySelector(".case-carousel-track");
  const slides = root.querySelectorAll(".case-slide");
  const dots = root.querySelectorAll("[data-case]");
  const prevBtn = root.querySelector(".case-prev");
  const nextBtn = root.querySelector(".case-next");
  const chatTitle = document.getElementById("case-chat-title");
  const docsEl = document.getElementById("case-demo-docs");
  const userBubble = document.getElementById("case-demo-user");
  const userText = document.getElementById("case-demo-user-text");
  const userCursor = document.getElementById("case-demo-user-cursor");
  const botBubble = document.getElementById("case-demo-bot");
  const botText = document.getElementById("case-demo-bot-text");
  const botCursor = document.getElementById("case-demo-bot-cursor");
  const sourceEl = document.getElementById("case-demo-source");
  const typingEl = document.getElementById("case-demo-typing");
  const inputText = document.getElementById("case-demo-input-text");
  const inputCursor = document.getElementById("case-demo-input-cursor");

  let slideIndex = 0;
  let runId = 0;
  let paused = false;

  function isStopped(currentRun) {
    return paused || currentRun !== runId;
  }

  function resetChat() {
    userBubble.hidden = true;
    botBubble.hidden = true;
    typingEl.hidden = true;
    sourceEl.hidden = true;
    userText.textContent = "";
    botText.textContent = "";
    sourceEl.textContent = "";
    inputText.textContent = "";
    userCursor.hidden = true;
    botCursor.hidden = true;
    inputCursor.hidden = false;
  }

  function renderDocs(docs) {
    docsEl.innerHTML = docs.map((name) => `<span class="doc-chip">${name}</span>`).join("");
  }

  async function playSlideChat(index, currentRun) {
    const demos = getCaseChatDemosList();
    const demo = demos[index];
    if (!demo) return;

    if (chatTitle) chatTitle.textContent = demo.chatTitle;
    resetChat();
    renderDocs(demo.docs);

    await wait(500);
    if (isStopped(currentRun)) return;

    await typeInto(inputText, inputCursor, demo.question, 24, () => isStopped(currentRun));
    if (isStopped(currentRun)) return;

    await wait(350);
    if (isStopped(currentRun)) return;

    inputText.textContent = "";
    inputCursor.hidden = true;
    userBubble.hidden = false;
    await typeInto(userText, userCursor, demo.question, 20, () => isStopped(currentRun));
    if (isStopped(currentRun)) return;

    await wait(450);
    if (isStopped(currentRun)) return;

    typingEl.hidden = false;
    await wait(1100);
    if (isStopped(currentRun)) return;

    typingEl.hidden = true;
    botBubble.hidden = false;
    await typeInto(botText, botCursor, demo.answer, 16, () => isStopped(currentRun));
    if (isStopped(currentRun)) return;

    sourceEl.textContent = demo.source;
    sourceEl.hidden = false;

    await wait(4500);
    if (isStopped(currentRun)) return;

    goToSlide(slideIndex + 1);
  }

  function goToSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === slideIndex));
    runId += 1;
    playSlideChat(slideIndex, runId);
  }

  prevBtn?.addEventListener("click", () => goToSlide(slideIndex - 1));
  nextBtn?.addEventListener("click", () => goToSlide(slideIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => goToSlide(Number(dot.dataset.case)));
  });

  root.addEventListener("mouseenter", () => {
    paused = true;
    runId += 1;
  });

  root.addEventListener("mouseleave", () => {
    if (!paused) return;
    paused = false;
    goToSlide(slideIndex);
  });

  goToSlide(0);
  window.__zakonRestartCaseDemo = () => goToSlide(slideIndex);
}

function setFormStatus(message, type, form) {
  const root = form || document.querySelector("#lead-form");
  const status = root?.closest(".form-card, .contact-grid, .container")?.querySelector(".form-status")
    || document.getElementById("form-status");
  if (!status) return;
  status.textContent = message;
  status.className = `form-status ${type || ""}`;
}

async function submitLeadForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const name = form.name?.value?.trim() || "";
  const email = form.email?.value?.trim() || "";
  const phone = form.phone?.value?.trim() || "";
  const role = form.role?.value?.trim() || "";
  const message = form.message?.value?.trim() || "";
  const consent = form.consent?.checked;

  if (!name || !email || !phone || !consent) {
    setFormStatus(i18n("form.error.required"), "error", form);
    return;
  }

  if (!EMAIL_RE.test(email)) {
    setFormStatus(i18n("form.error.email"), "error", form);
    return;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!PHONE_RE.test(phone) || phoneDigits.length !== 11 || phoneDigits[0] !== "8") {
    setFormStatus(i18n("form.error.phone"), "error", form);
    return;
  }

  if (FORM_CONFIG.mode === "disabled" || FORM_CONFIG.formspreeEndpoint.includes("YOUR_FORM_ID")) {
    setFormStatus(i18n("form.error.notConfigured"), "error", form);
    return;
  }

  submitBtn.disabled = true;
  setFormStatus(i18n("form.error.sending"), "", form);

  const payload = {
    name,
    email,
    phone,
    role,
    message,
    _subject: "Заявка с zakon-ai.ru",
  };

  try {
    let response;

    if (FORM_CONFIG.mode === "web3forms") {
      response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: FORM_CONFIG.web3formsAccessKey,
          ...payload,
        }),
      });
    } else {
      response = await fetch(FORM_CONFIG.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    form.reset();
    setFormStatus(i18n("form.error.success"), "success", form);
  } catch (error) {
    setFormStatus(i18n("form.error.fail"), "error", form);
    console.error(error);
  } finally {
    submitBtn.disabled = false;
  }
}

function initCasePageTabs() {
  const tabs = document.querySelectorAll("[data-case-tab]");
  if (!tabs.length) return;

  const panels = {
    users: document.getElementById("case-tab-users"),
    developers: document.getElementById("case-tab-developers"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.caseTab;
      if (!key || !panels[key]) return;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      Object.entries(panels).forEach(([name, panel]) => {
        if (!panel) return;
        const show = name === key;
        panel.classList.toggle("active", show);
        panel.hidden = !show;
      });
    });
  });
}

function initHowFlow() {
  const root = document.getElementById("how-flow");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll(".how-flow-tab"));
  const panels = Array.from(root.querySelectorAll(".how-flow-panel"));
  const progress = root.querySelector(".how-flow-progress-fill");
  const dotsWrap = root.querySelector(".how-flow-dots");
  const prevBtn = root.querySelector("#how-flow-prev");
  const nextBtn = root.querySelector("#how-flow-next");
  if (!tabs.length || !panels.length) return;

  let current = 0;
  let autoTimer = null;
  let paused = false;

  if (dotsWrap && !dotsWrap.children.length) {
    tabs.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "how-flow-dot";
      dot.dataset.how = String(index);
      dot.setAttribute("aria-label", `Шаг ${index + 1}`);
      dotsWrap.appendChild(dot);
    });
  }

  const dots = Array.from(root.querySelectorAll(".how-flow-dot"));

  function activate(index, { focusTab = false } = {}) {
    current = (index + tabs.length) % tabs.length;

    tabs.forEach((tab, i) => {
      const active = i === current;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      if (focusTab && active) tab.focus();
    });

    panels.forEach((panel, i) => {
      const active = i === current;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });

    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));

    if (progress) {
      progress.style.width = `${((current + 1) / tabs.length) * 100}%`;
    }
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAuto() {
    stopAuto();
    if (paused) return;
    autoTimer = setInterval(() => activate(current + 1), 5500);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activate(index);
      startAuto();
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      activate(Number(dot.dataset.how));
      startAuto();
    });
  });

  prevBtn?.addEventListener("click", () => {
    activate(current - 1);
    startAuto();
  });

  nextBtn?.addEventListener("click", () => {
    activate(current + 1);
    startAuto();
  });

  root.addEventListener("mouseenter", () => {
    paused = true;
    stopAuto();
  });

  root.addEventListener("mouseleave", () => {
    paused = false;
    startAuto();
  });

  root.addEventListener("focusin", () => {
    paused = true;
    stopAuto();
  });

  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget)) {
      paused = false;
      startAuto();
    }
  });

  activate(0);
  startAuto();
}

function initThemeToggle() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-theme-set]");
  if (!buttons.length) return;

  function faviconFor(theme) {
    const link = document.getElementById("site-favicon");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const base = href.includes("../") ? "../assets/" : "assets/";
    const file = theme === "light" ? "favicon-light.png?v=9" : "favicon-dark.png?v=9";
    link.setAttribute("href", base + file);
  }

  function applyTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("zakon-theme", next);
    faviconFor(next);
    buttons.forEach((btn) => {
      const active = btn.dataset.themeSet === next;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeSet));
  });

  applyTheme(root.getAttribute("data-theme") || "dark");
}

function initExpertExampleCarousel() {
  const root = document.getElementById("expert-example-carousel");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".expert-example-slide"));
  const dots = Array.from(root.querySelectorAll("[data-expert-slide]"));
  const prevBtn = root.querySelector(".expert-example-prev");
  const nextBtn = root.querySelector(".expert-example-next");
  if (!slides.length) return;

  let index = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("is-active", active);
      slide.hidden = !active;
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  function startAuto() {
    if (reducedMotion || slides.length < 2) return;
    stopAuto();
    timer = window.setInterval(() => show(index + 1), 7000);
  }

  function stopAuto() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  prevBtn?.addEventListener("click", () => {
    show(index - 1);
    startAuto();
  });
  nextBtn?.addEventListener("click", () => {
    show(index + 1);
    startAuto();
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      show(Number(dot.dataset.expertSlide) || 0);
      startAuto();
    });
  });

  root.addEventListener("mouseenter", stopAuto);
  root.addEventListener("mouseleave", startAuto);
  root.addEventListener("focusin", stopAuto);
  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget)) startAuto();
  });

  show(0);
  startAuto();
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFaq();
  initHowFlow();
  initHeroTitleTypewriter();
  initChatDemo();
  initCaseCarousel();
  initCasePageTabs();
  initExpertExampleCarousel();
  initThemeToggle();
  window.addEventListener("load", syncHeroChatHeight);

  document.addEventListener("zakon:langchange", () => {
    initHeroTitleTypewriter();
    window.__zakonRestartChatDemo?.();
    window.__zakonRestartCaseDemo?.();
  });

  document.querySelectorAll("#lead-form").forEach((form) => {
    form.addEventListener("submit", submitLeadForm);
  });
  initLeadFormFields();
  initWaitlist();
});
