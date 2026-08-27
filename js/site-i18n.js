(function () {
  const STORAGE_KEY = "zakon-lang";
  const LANGUAGES = ["ru", "en", "zh"];
  const DEFAULT_LANG = "ru";

  function dict() {
    return window.ZAKON_SITE_I18N || { ru: {}, en: {}, zh: {} };
  }

  function resolveLang(lang) {
    return LANGUAGES.includes(lang) ? lang : DEFAULT_LANG;
  }

  function getLang() {
    return resolveLang(localStorage.getItem(STORAGE_KEY));
  }

  function setHtmlLang(lang) {
    document.documentElement.setAttribute("lang", lang);
  }

  function t(key, lang) {
    const l = resolveLang(lang || getLang());
    const pack = dict()[l] || {};
    const fallback = dict()[DEFAULT_LANG] || {};
    if (typeof pack[key] === "string") return pack[key];
    if (typeof fallback[key] === "string") return fallback[key];
    return key;
  }

  function getChatDemos(lang) {
    const l = resolveLang(lang || getLang());
    const pack = dict()[l] || {};
    const fallback = dict()[DEFAULT_LANG] || {};
    if (Array.isArray(pack.chatDemos)) return pack.chatDemos;
    if (Array.isArray(fallback.chatDemos)) return fallback.chatDemos;
    return [];
  }

  function getCaseChatDemos(lang) {
    const l = resolveLang(lang || getLang());
    const pack = dict()[l] || {};
    const fallback = dict()[DEFAULT_LANG] || {};
    if (Array.isArray(pack.caseChatDemos)) return pack.caseChatDemos;
    if (Array.isArray(fallback.caseChatDemos)) return fallback.caseChatDemos;
    return [];
  }

  function updateLangSwitcher(lang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function pageMetaKeys() {
    const page = document.body?.dataset?.page || "home";
    const map = {
      home: { title: "meta.home.title", description: "meta.home.description" },
      "your-docs": { title: "meta.docs.title", description: "meta.docs.description" },
      "expert-opinion": { title: "meta.expert.title", description: "meta.expert.description" },
      tenders: { title: "meta.tenders.title", description: "meta.tenders.description" },
      "financial-analysis": { title: "meta.finance.title", description: "meta.finance.description" },
      terms: { title: "meta.terms.title", description: "meta.terms.description" },
      privacy: { title: "meta.privacy.title", description: "meta.privacy.description" },
    };
    return map[page] || map.home;
  }

  function applyI18n(lang) {
    const l = resolveLang(lang || getLang());
    setHtmlLang(l);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.placeholder = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.setAttribute("aria-label", value);
    });

    const metaKeys = pageMetaKeys();
    const title = t(metaKeys.title, l);
    if (title !== metaKeys.title) document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const desc = t(metaKeys.description, l);
      if (desc !== metaKeys.description) metaDesc.setAttribute("content", desc);
    }

    updateLangSwitcher(l);
  }

  function setLang(lang) {
    const l = resolveLang(lang);
    localStorage.setItem(STORAGE_KEY, l);
    applyI18n(l);
    document.dispatchEvent(new CustomEvent("zakon:langchange", { detail: { lang: l } }));
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    updateLangSwitcher(getLang());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangSwitcher();
    applyI18n(getLang());
  });

  setHtmlLang(getLang());

  window.ZakonI18n = {
    getLang,
    setLang,
    t,
    applyI18n,
    getChatDemos,
    getCaseChatDemos,
  };
})();
