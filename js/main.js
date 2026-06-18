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

const CHAT_DEMOS = [
  {
    docs: ["Регламент_HR.pdf", "Договор_шаблон.docx", "База знаний IT"],
    question: "Можно ли оформить удалёнку на 3 дня без согласования с руководителем отдела?",
    answer:
      "Нет. По регламенту удалённая работа согласуется с непосредственным руководителем не позднее чем за 1 рабочий день.",
    source: "Источник: «Положение о дистанционной работе», п. 4.2. → открыть фрагмент документа",
  },
  {
    docs: ["Договор_поставки.pdf", "Реестр_договоров.xlsx", "Типовые_условия.docx"],
    question:
      "Есть ли в договоре с поставщиком право расторгнуть его при просрочке поставки более 10 дней?",
    answer:
      "Да. В разделе 8.3 предусмотрено одностороннее расторжение при нарушении сроков поставки более чем на 10 рабочих дней, с письменным уведомлением за 5 дней.",
    source: "Источник: Договор поставки №127/2025, п. 8.3, 8.4. → открыть фрагмент документа",
  },
  {
    docs: ["НК_РФ_выдержки.pdf", "Учётная_политика.docx", "Мемо_НДС.pdf"],
    question: "Можно ли принять НДС к вычету по авансовому счёту-фактуре, если оплата ещё не проведена?",
    answer:
      "Нет. По учётной политике компании вычет по авансовому СФ отражается после фактической оплаты поставщику и проведения платежа в учётной системе.",
    source: "Источник: Учётная политика 2026, разд. 4; п. 2 ст. 171 НК РФ. → открыть фрагмент документа",
  },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  async function typeInto(element, cursor, text, speed = 28) {
    element.textContent = "";
    cursor.hidden = false;
    for (const char of text) {
      if (paused) return;
      element.textContent += char;
      await wait(speed);
    }
    cursor.hidden = true;
  }

  async function playDemo(index) {
    const currentRun = ++runId;
    const demo = CHAT_DEMOS[index];
    resetStage();
    renderDocs(demo.docs);

    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));

    await wait(500);
    if (currentRun !== runId) return;

    await typeInto(inputText, inputCursor, demo.question, 24);
    if (currentRun !== runId) return;

    await wait(350);
    if (currentRun !== runId) return;

    inputText.textContent = "";
    inputCursor.hidden = true;
    userBubble.hidden = false;
    await typeInto(userText, userCursor, demo.question, 20);
    if (currentRun !== runId) return;

    await wait(450);
    if (currentRun !== runId) return;

    typingEl.hidden = false;
    await wait(1100);
    if (currentRun !== runId) return;

    typingEl.hidden = true;
    botBubble.hidden = false;
    await typeInto(botText, botCursor, demo.answer, 16);
    if (currentRun !== runId) return;

    sourceEl.textContent = demo.source;
    sourceEl.hidden = false;

    await wait(4500);
    if (currentRun !== runId) return;

    demoIndex = (index + 1) % CHAT_DEMOS.length;
    playDemo(demoIndex);
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
    if (paused) {
      paused = false;
      playDemo(demoIndex);
    }
  });

  startDemo(0);
  syncHeroChatHeight();
  window.addEventListener("resize", syncHeroChatHeight);
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
  initChatDemo();
  window.addEventListener("load", syncHeroChatHeight);

  const form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", submitLeadForm);
  }
});
