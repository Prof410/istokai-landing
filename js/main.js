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
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function initChatCarousel() {
  const carousel = document.getElementById("hero-chat-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".chat-carousel-track");
  const slides = carousel.querySelectorAll(".chat-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const total = slides.length;
  let index = 0;
  let timer = null;

  function goTo(nextIndex) {
    index = (nextIndex + total) % total;
    const viewport = carousel.querySelector(".chat-carousel-viewport");
    const slideWidth = viewport ? viewport.clientWidth : 0;
    track.style.transform = slideWidth
      ? `translate3d(-${index * slideWidth}px, 0, 0)`
      : `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function next() {
    goTo(index + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, 7000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  prevBtn?.addEventListener("click", () => {
    goTo(index - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    next();
    startAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.slide));
      startAutoplay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  window.addEventListener("resize", () => goTo(index));

  goTo(0);
  startAutoplay();
}

function setFormStatus(message, type) {
  const status = document.getElementById("form-status");
  if (!status) return;
  status.textContent = message;
  status.className = `form-status ${type || ""}`;
}

async function submitLeadForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const company = form.company.value.trim();
  const role = form.role.value;
  const message = form.message.value.trim();
  const consent = form.consent.checked;

  if (!name || !email || !consent) {
    setFormStatus("Заполните имя, email и согласие на обработку данных.", "error");
    return;
  }

  if (!EMAIL_RE.test(email)) {
    setFormStatus("Проверьте корректность email.", "error");
    return;
  }

  if (FORM_CONFIG.mode === "disabled" || FORM_CONFIG.formspreeEndpoint.includes("YOUR_FORM_ID")) {
    setFormStatus(
      "Форма ещё не подключена. Укажите endpoint Formspree в js/main.js (см. README).",
      "error"
    );
    return;
  }

  submitBtn.disabled = true;
  setFormStatus("Отправляем заявку…", "");

  const payload = {
    name,
    email,
    company,
    role,
    message,
    _subject: "Заявка с istokai.ru",
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
    setFormStatus("Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.", "success");
  } catch (error) {
    setFormStatus("Не удалось отправить заявку. Попробуйте позже или напишите на почту из футера.", "error");
    console.error(error);
  } finally {
    submitBtn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFaq();
  initChatCarousel();

  const form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", submitLeadForm);
  }
});
