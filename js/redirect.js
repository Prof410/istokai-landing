(function () {
  var host = window.location.hostname.toLowerCase().replace(/^www\./, "");
  if (host !== "istokai.ru") return;

  var target =
    "https://zakon-ai.ru" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(target);
})();
