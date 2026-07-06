(function () {
  const STORAGE_KEY = "zakon-lang";
  const root = document.documentElement;
  let lang = localStorage.getItem(STORAGE_KEY);
  if (lang !== "ru" && lang !== "en" && lang !== "zh") {
    lang = "ru";
  }
  root.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
})();
