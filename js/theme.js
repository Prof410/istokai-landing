(function () {
  const STORAGE_KEY = "zakon-theme";
  const root = document.documentElement;
  let theme = localStorage.getItem(STORAGE_KEY);
  if (theme !== "light" && theme !== "dark") {
    theme = "dark";
  }
  root.setAttribute("data-theme", theme);
})();
