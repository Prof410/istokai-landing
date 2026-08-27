(function () {
  const STORAGE_KEY = "zakon-theme";
  const root = document.documentElement;
  let theme = localStorage.getItem(STORAGE_KEY);
  if (theme !== "light" && theme !== "dark") {
    theme = "dark";
  }
  root.setAttribute("data-theme", theme);

  function syncFavicon(next) {
    const link = document.getElementById("site-favicon");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const base = href.includes("../") ? "../assets/" : "assets/";
    link.setAttribute(
      "href",
      base + (next === "light" ? "favicon-light.png?v=5" : "favicon-dark.png?v=5")
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => syncFavicon(theme));
  } else {
    syncFavicon(theme);
  }
})();
