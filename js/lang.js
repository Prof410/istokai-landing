(function () {
  const STORAGE_KEY = "zakon-lang";
  const ALLOWED = ["ru", "en", "zh"];
  const root = document.documentElement;
  let lang = localStorage.getItem(STORAGE_KEY);
  if (!ALLOWED.includes(lang)) {
    lang = "ru";
  }
  root.setAttribute("lang", lang);
})();
