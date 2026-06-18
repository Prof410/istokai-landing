const LOGO_VARIANTS = [
  {
    current: true,
    title: "Текущий — исток с 3 потоками",
    desc: "Родник на холме, три ручья вниз. Метафора «истока» максимально явная.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cur-water" x1="8" y1="6" x2="40" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="0.55" stop-color="#3B82F6"/><stop offset="1" stop-color="#6366F1"/></linearGradient><linearGradient id="cur-hill" x1="24" y1="8" x2="24" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#1E3A5F"/><stop offset="1" stop-color="#0F172A"/></linearGradient><radialGradient id="cur-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 13) rotate(90) scale(12 8)"><stop stop-color="#38BDF8" stop-opacity="0.45"/><stop offset="1" stop-color="#38BDF8" stop-opacity="0"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><ellipse cx="24" cy="13" rx="14" ry="6" fill="url(#cur-glow)"/><path d="M12 18C16 14 20 12 24 12C28 12 32 14 36 18C34 16 29 15 24 15C19 15 14 16 12 18Z" fill="url(#cur-hill)"/><circle cx="24" cy="13" r="4.2" fill="url(#cur-water)"/><circle cx="24" cy="13" r="6.8" stroke="url(#cur-water)" stroke-opacity="0.35" stroke-width="1.2"/><path d="M24 16.8C24 20.5 18.5 24 13 34" stroke="url(#cur-water)" stroke-width="2.4" stroke-linecap="round"/><path d="M24 16.8C24 22.5 24 27.5 24 36" stroke="url(#cur-water)" stroke-width="2.6" stroke-linecap="round"/><path d="M24 16.8C24 20.5 29.5 24 35 34" stroke="url(#cur-water)" stroke-width="2.4" stroke-linecap="round"/><circle cx="13" cy="34" r="1.6" fill="#38BDF8" fill-opacity="0.8"/><circle cx="24" cy="36" r="1.6" fill="#3B82F6" fill-opacity="0.9"/><circle cx="35" cy="34" r="1.6" fill="#6366F1" fill-opacity="0.8"/></svg>`,
  },
  {
    title: "1. Минималистичный исток",
    desc: "Один родник и один поток. Чище и спокойнее, лучше в маленьком размере.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v1-water" x1="24" y1="10" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient><radialGradient id="v1-glow" cx="24" cy="14" r="8" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8" stop-opacity="0.4"/><stop offset="1" stop-color="#38BDF8" stop-opacity="0"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="14" r="10" fill="url(#v1-glow)"/><circle cx="24" cy="14" r="4.5" fill="url(#v1-water)"/><path d="M24 18.5C24 24 22 30 20 38" stroke="url(#v1-water)" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  {
    title: "2. RAG-узлы",
    desc: "Источник и три узла — поиск, фрагменты, ответ. Технологичный акцент.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v2-line" x1="24" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="13" r="5" fill="url(#v2-line)"/><path d="M24 17.5L12 33" stroke="url(#v2-line)" stroke-width="2.2" stroke-linecap="round"/><path d="M24 17.5V33" stroke="url(#v2-line)" stroke-width="2.4" stroke-linecap="round"/><path d="M24 17.5L36 33" stroke="url(#v2-line)" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="33" r="3.2" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/><circle cx="24" cy="33" r="3.2" fill="#0F172A" stroke="#3B82F6" stroke-width="2"/><circle cx="36" cy="33" r="3.2" fill="#0F172A" stroke="#6366F1" stroke-width="2"/></svg>`,
  },
  {
    title: "3. Буква I",
    desc: "Стилизованная «I» с засечками и свечением внизу — связь с названием Istok.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v3-i" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="0.5" stop-color="#3B82F6"/><stop offset="1" stop-color="#6366F1"/></linearGradient><radialGradient id="v3-glow" cx="24" cy="36" r="10" gradientUnits="userSpaceOnUse"><stop stop-color="#3B82F6" stop-opacity="0.35"/><stop offset="1" stop-color="#3B82F6" stop-opacity="0"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><ellipse cx="24" cy="36" rx="12" ry="5" fill="url(#v3-glow)"/><rect x="20" y="11" width="8" height="3" rx="1" fill="url(#v3-i)"/><rect x="21.5" y="14" width="5" height="20" rx="1" fill="url(#v3-i)"/><rect x="20" y="34" width="8" height="3" rx="1" fill="url(#v3-i)"/></svg>`,
  },
  {
    title: "4. Волны поиска",
    desc: "Концентрические круги от центра — умный поиск, sonar, RAG-retrieval.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v4-stroke" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="24" r="4" fill="url(#v4-stroke)"/><circle cx="24" cy="24" r="9" stroke="url(#v4-stroke)" stroke-width="2" stroke-opacity="0.85"/><circle cx="24" cy="24" r="14" stroke="url(#v4-stroke)" stroke-width="1.8" stroke-opacity="0.55"/><circle cx="24" cy="24" r="19" stroke="url(#v4-stroke)" stroke-width="1.5" stroke-opacity="0.3"/></svg>`,
  },
  {
    title: "5. Чат-ассистент",
    desc: "Пузырь сообщения с источником внутри — сразу про ИИ-помощник.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v5-bubble" x1="12" y1="10" x2="36" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M12 14C12 11.8 13.8 10 16 10H32C34.2 10 36 11.8 36 14V26C36 28.2 34.2 30 32 30H22L16 36V30H16C13.8 30 12 28.2 12 26V14Z" stroke="url(#v5-bubble)" stroke-width="2.2" stroke-linejoin="round"/><circle cx="24" cy="20" r="4.5" fill="url(#v5-bubble)"/><circle cx="24" cy="20" r="7" stroke="url(#v5-bubble)" stroke-width="1.2" stroke-opacity="0.35"/></svg>`,
  },
  {
    title: "6. Слои документов",
    desc: "Стопка листов сходится к точке-источнику — корпоративная база знаний.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v6-doc" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M14 16H30L34 20V34C34 35.1 33.1 36 32 36H16C14.9 36 14 35.1 14 34V16Z" stroke="url(#v6-doc)" stroke-width="2" stroke-linejoin="round" stroke-opacity="0.45"/><path d="M16 12H28L32 16V30C32 31.1 31.1 32 30 32H16C14.9 32 14 31.1 14 30V12Z" stroke="url(#v6-doc)" stroke-width="2" stroke-linejoin="round" stroke-opacity="0.7"/><path d="M18 10H30L34 14V28C34 29.1 33.1 30 32 30H18C16.9 30 16 29.1 16 28V10Z" fill="#0F172A" stroke="url(#v6-doc)" stroke-width="2" stroke-linejoin="round"/><circle cx="25" cy="36" r="3" fill="url(#v6-doc)"/><path d="M25 33V28M22 36H28" stroke="url(#v6-doc)" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.6"/></svg>`,
  },
  {
    title: "7. Поток со стрелкой",
    desc: "Источник сверху и направленный поток вниз — движение ответа к пользователю.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v7-g" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="12" r="4.5" fill="url(#v7-g)"/><path d="M24 16.5V30" stroke="url(#v7-g)" stroke-width="2.8" stroke-linecap="round"/><path d="M19 26L24 31L29 26" stroke="url(#v7-g)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 34H30" stroke="url(#v7-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/></svg>`,
  },
  {
    title: "8. Извилистая река",
    desc: "Волнистый ручей от истока — живая метафора потока знаний.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v8-g" x1="20" y1="8" x2="28" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="11" r="4" fill="url(#v8-g)"/><path d="M24 15C30 18 18 22 24 26C30 30 18 34 24 38" stroke="url(#v8-g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20C22 21 26 21 28 20M20 28C22 29 26 29 28 28" stroke="url(#v8-g)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.35"/></svg>`,
  },
  {
    title: "9. Капля воды",
    desc: "Капля из истока и кольца на воде — чистый знак, хорошо в favicon.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v9-g" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M24 10C24 10 17 20 17 26C17 30.4 20.1 34 24 34C27.9 34 31 30.4 31 26C31 20 24 10 24 10Z" fill="url(#v9-g)"/><ellipse cx="24" cy="38" rx="9" ry="2.2" stroke="url(#v9-g)" stroke-width="1.5" stroke-opacity="0.45"/><ellipse cx="24" cy="38" rx="5" ry="1.2" stroke="url(#v9-g)" stroke-width="1.2" stroke-opacity="0.7"/></svg>`,
  },
  {
    title: "10. Лучи из источника",
    desc: "Световые лучи от родника — ориентир и подсказка в потоке информации.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v10-g" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="14" r="5" fill="url(#v10-g)"/><path d="M24 19V36" stroke="url(#v10-g)" stroke-width="2.5" stroke-linecap="round"/><path d="M24 22L14 34" stroke="url(#v10-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.75"/><path d="M24 22L34 34" stroke="url(#v10-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.75"/><path d="M24 22L10 28" stroke="url(#v10-g)" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.45"/><path d="M24 22L38 28" stroke="url(#v10-g)" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.45"/></svg>`,
  },
  {
    title: "11. Дельта реки",
    desc: "Один исток расходится на два русла — разветвление знаний по темам.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v11-g" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="12" r="4.5" fill="url(#v11-g)"/><path d="M24 16.5V24" stroke="url(#v11-g)" stroke-width="2.8" stroke-linecap="round"/><path d="M24 24C24 24 14 28 10 36" stroke="url(#v11-g)" stroke-width="2.6" stroke-linecap="round"/><path d="M24 24C24 24 34 28 38 36" stroke="url(#v11-g)" stroke-width="2.6" stroke-linecap="round"/><circle cx="10" cy="36" r="2" fill="#38BDF8" fill-opacity="0.8"/><circle cx="38" cy="36" r="2" fill="#6366F1" fill-opacity="0.8"/></svg>`,
  },
  {
    title: "12. Компас",
    desc: "Навигация по базе знаний — найти нужное направление среди документов.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v12-g" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="24" r="14" stroke="url(#v12-g)" stroke-width="2" stroke-opacity="0.35"/><path d="M24 12V16M24 32V36M12 24H16M32 24H36" stroke="url(#v12-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/><path d="M24 14L28 28L24 24L20 28L24 14Z" fill="url(#v12-g)"/><circle cx="24" cy="24" r="2" fill="#0F172A" stroke="#93C5FD" stroke-width="1.2"/></svg>`,
  },
  {
    title: "13. Лупа и документ",
    desc: "Поиск по документам — прямое попадание в суть RAG-платформы.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v13-g" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="11" y="13" width="16" height="20" rx="2" stroke="url(#v13-g)" stroke-width="2" stroke-opacity="0.45"/><path d="M14 18H24M14 22H22M14 26H20" stroke="url(#v13-g)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/><circle cx="30" cy="28" r="7" stroke="url(#v13-g)" stroke-width="2.2"/><path d="M35 33L39 37" stroke="url(#v13-g)" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  },
  {
    title: "14. Слияние потоков",
    desc: "Два ручья сходятся в исток — объединение разрозненных знаний в одну базу.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v14-g" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M10 34C16 28 20 22 24 14" stroke="url(#v14-g)" stroke-width="2.6" stroke-linecap="round"/><path d="M38 34C32 28 28 22 24 14" stroke="url(#v14-g)" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="12" r="5" fill="url(#v14-g)"/><path d="M24 17V36" stroke="url(#v14-g)" stroke-width="2.4" stroke-linecap="round" stroke-opacity="0.55"/></svg>`,
  },
  {
    title: "15. Мост через поток",
    desc: "Мост над водой — связь между вопросом сотрудника и базой документов.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v15-g" x1="10" y1="20" x2="38" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M8 30C14 24 34 24 40 30" stroke="url(#v15-g)" stroke-width="2.8" stroke-linecap="round"/><path d="M12 30V34M20 27V34M28 27V34M36 30V34" stroke="url(#v15-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.55"/><path d="M10 32C18 28 30 28 38 32" stroke="url(#v15-g)" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="16" r="4" fill="url(#v15-g)"/></svg>`,
  },
  {
    title: "16. Спираль потока",
    desc: "Закрученный поток от истока — непрерывный цикл поиска и ответа.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v16-g" x1="16" y1="12" x2="32" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="13" r="4" fill="url(#v16-g)"/><path d="M24 17C32 17 34 22 34 26C34 32 28 34 24 34C18 34 14 30 14 26C14 23 16 21 19 21" stroke="url(#v16-g)" stroke-width="2.6" stroke-linecap="round"/><path d="M28 30L32 34L28 34" stroke="url(#v16-g)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "17. Контур мозга",
    desc: "Узнаваемый силуэт мозга — интеллект и аналитика.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v17-g" x1="14" y1="10" x2="34" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M24 11C17 11 13 16 13 22C13 28 16 33 20 35C20 32 21 30 24 30C27 30 28 32 28 35C32 33 35 28 35 22C35 16 31 11 24 11Z" stroke="url(#v17-g)" stroke-width="2.2" stroke-linejoin="round"/><path d="M24 14V30" stroke="url(#v17-g)" stroke-width="1.5" stroke-opacity="0.4"/><path d="M18 18C20 20 22 20 24 18M24 18C26 20 28 20 30 18M18 24C20 26 22 26 24 24M24 24C26 26 28 26 30 24" stroke="url(#v17-g)" stroke-width="1.3" stroke-linecap="round" stroke-opacity="0.45"/></svg>`,
  },
  {
    title: "18. Мозг + схема",
    desc: "Мозг с линиями-связями — мышление, подкреплённое данными.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v18-g" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M22 12C16 12 12 17 12 23C12 28 15 32 19 34V30C19 28 21 27 23 27H25C27 27 29 28 29 30V34C33 32 36 28 36 23C36 17 32 12 26 12C25 10 23 10 22 12Z" stroke="url(#v18-g)" stroke-width="2"/><circle cx="16" cy="36" r="2.5" fill="#38BDF8"/><circle cx="24" cy="38" r="2.5" fill="#3B82F6"/><circle cx="32" cy="36" r="2.5" fill="#6366F1"/><path d="M19 34L16 36M29 34L32 36M24 34V38" stroke="url(#v18-g)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.6"/></svg>`,
  },
  {
    title: "19. Нейросеть",
    desc: "Классическая схема слоёв нейросети — машинное обучение и RAG.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v19-g" x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="12" cy="16" r="2.5" fill="url(#v19-g)"/><circle cx="12" cy="24" r="2.5" fill="url(#v19-g)"/><circle cx="12" cy="32" r="2.5" fill="url(#v19-g)"/><circle cx="24" cy="12" r="2.5" fill="url(#v19-g)"/><circle cx="24" cy="20" r="2.5" fill="url(#v19-g)"/><circle cx="24" cy="28" r="2.5" fill="url(#v19-g)"/><circle cx="24" cy="36" r="2.5" fill="url(#v19-g)"/><circle cx="36" cy="24" r="3.5" fill="url(#v19-g)"/><path d="M14.5 16L21.5 12M14.5 16L21.5 20M14.5 24L21.5 20M14.5 24L21.5 28M14.5 32L21.5 28M14.5 32L21.5 36M26.5 12L33.5 24M26.5 20L33.5 24M26.5 28L33.5 24M26.5 36L33.5 24" stroke="url(#v19-g)" stroke-width="1.2" stroke-opacity="0.55"/></svg>`,
  },
  {
    title: "20. Мозг и исток",
    desc: "Мозг питаетcя из истока — ИИ на базе корпоративных знаний.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v20-g" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="11" r="4" fill="url(#v20-g)"/><path d="M24 15V19" stroke="url(#v20-g)" stroke-width="2" stroke-linecap="round"/><path d="M24 19C17 19 13 24 13 29C13 33 16 36 20 37V33C20 31 22 30 24 30C26 30 28 31 28 33V37C32 36 35 33 35 29C35 24 31 19 24 19Z" stroke="url(#v20-g)" stroke-width="2" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "21. ИИ-чип",
    desc: "Процессор с контактами — вычислительное ядро платформы.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v21-g" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="14" y="14" width="20" height="20" rx="4" stroke="url(#v21-g)" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="url(#v21-g)"/><path d="M18 14V10M22 14V10M26 14V10M30 14V10M18 34V38M22 34V38M26 34V38M30 34V38M14 18H10M14 22H10M14 26H10M14 30H10M34 18H38M34 22H38M34 26H38M34 30H38" stroke="url(#v21-g)" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.7"/></svg>`,
  },
  {
    title: "22. Синапс",
    desc: "Два нейрона и искра связи — передача знания от документа к ответу.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v22-g" x1="12" y1="16" x2="36" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="14" cy="24" r="6" stroke="url(#v22-g)" stroke-width="2"/><circle cx="34" cy="24" r="6" stroke="url(#v22-g)" stroke-width="2"/><circle cx="14" cy="24" r="2.5" fill="url(#v22-g)"/><circle cx="34" cy="24" r="2.5" fill="url(#v22-g)"/><path d="M20 24H28" stroke="url(#v22-g)" stroke-width="2"/><path d="M24 20L28 24L24 28" stroke="#93C5FD" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "23. Полушария",
    desc: "Два полушария мозга — баланс логики и контекста в ответе.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v23-g" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M24 12C18 12 14 17 14 24C14 31 18 36 24 36V12Z" fill="url(#v23-g)" fill-opacity="0.25" stroke="url(#v23-g)" stroke-width="2"/><path d="M24 12C30 12 34 17 34 24C34 31 30 36 24 36" stroke="url(#v23-g)" stroke-width="2"/><path d="M20 18H22M26 18H28M20 24H22M26 24H28M20 30H22M26 30H28" stroke="url(#v23-g)" stroke-width="1.3" stroke-linecap="round" stroke-opacity="0.5"/></svg>`,
  },
  {
    title: "24. Граф знаний",
    desc: "Узлы и рёбра вокруг центра — связи между документами и фрагментами.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v24-g" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="24" r="5" fill="url(#v24-g)"/><circle cx="12" cy="14" r="2.5" fill="#38BDF8"/><circle cx="36" cy="14" r="2.5" fill="#38BDF8"/><circle cx="10" cy="32" r="2.5" fill="#6366F1"/><circle cx="38" cy="32" r="2.5" fill="#6366F1"/><circle cx="24" cy="38" r="2.5" fill="#3B82F6"/><path d="M21 20L13.5 15.5M27 20L34.5 15.5M21 28L11.5 31M27 28L36.5 31M24 29V35.5M15 16L33 16" stroke="url(#v24-g)" stroke-width="1.3" stroke-opacity="0.5"/></svg>`,
  },
  {
    title: "25. ИИ-искра",
    desc: "Четырёхлучевая искра — генерация ответа языковой моделью.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v25-g" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M24 10L26 20H36L28 26L31 36L24 30L17 36L20 26L12 20H22L24 10Z" fill="url(#v25-g)"/><circle cx="24" cy="24" r="3" fill="#0F172A" stroke="#93C5FD" stroke-width="1.2"/></svg>`,
  },
  {
    title: "26. Мозг в круге",
    desc: "Мозг внутри технологичного контура — корпоративный ИИ в контуре.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v26-g" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="24" r="15" stroke="url(#v26-g)" stroke-width="2" stroke-opacity="0.4"/><path d="M24 14C19 14 16 18 16 23C16 27 18 30 21 31C21 29 22 28 24 28C26 28 27 29 27 31C30 30 32 27 32 23C32 18 29 14 24 14Z" fill="url(#v26-g)" fill-opacity="0.35" stroke="url(#v26-g)" stroke-width="1.8"/></svg>`,
  },
  {
    title: "27. Нейро-гексагон",
    desc: "Шестиугольник с узлами — tech-эстетика, структура и порядок.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v27-g" x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M24 10L34 16V28L24 34L14 28V16L24 10Z" stroke="url(#v27-g)" stroke-width="2"/><circle cx="24" cy="22" r="3" fill="url(#v27-g)"/><circle cx="24" cy="10" r="1.8" fill="#38BDF8"/><circle cx="34" cy="16" r="1.8" fill="#38BDF8"/><circle cx="34" cy="28" r="1.8" fill="#6366F1"/><circle cx="24" cy="34" r="1.8" fill="#6366F1"/><circle cx="14" cy="28" r="1.8" fill="#6366F1"/><circle cx="14" cy="16" r="1.8" fill="#38BDF8"/></svg>`,
  },
  {
    title: "28. Спираль данных",
    desc: "Двойная спираль — кодирование и структурирование информации.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v28-g" x1="16" y1="10" x2="32" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M20 12C14 12 12 18 12 24C12 30 14 36 20 36" stroke="url(#v28-g)" stroke-width="2.4" stroke-linecap="round"/><path d="M28 36C34 36 36 30 36 24C36 18 34 12 28 12" stroke="url(#v28-g)" stroke-width="2.4" stroke-linecap="round" stroke-opacity="0.65"/><circle cx="24" cy="24" r="2.5" fill="url(#v28-g)"/></svg>`,
  },
  {
    title: "29. Нейро-глаз",
    desc: "Глаз с сеткой — внимание модели к нужному фрагменту документа.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v29-g" x1="12" y1="18" x2="36" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M8 24C14 16 34 16 40 24C34 32 14 32 8 24Z" stroke="url(#v29-g)" stroke-width="2"/><circle cx="24" cy="24" r="6" stroke="url(#v29-g)" stroke-width="2"/><circle cx="24" cy="24" r="2.5" fill="url(#v29-g)"/><path d="M20 22H28M20 26H28M22 20V28M26 20V28" stroke="#93C5FD" stroke-width="0.9" stroke-opacity="0.4"/></svg>`,
  },
  {
    title: "30. Мозг из узлов",
    desc: "Силуэт мозга, собранный из точек-синапсов.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v30-g" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="13" r="2" fill="url(#v30-g)"/><circle cx="17" cy="17" r="2" fill="url(#v30-g)"/><circle cx="31" cy="17" r="2" fill="url(#v30-g)"/><circle cx="14" cy="24" r="2" fill="url(#v30-g)"/><circle cx="24" cy="22" r="2" fill="url(#v30-g)"/><circle cx="34" cy="24" r="2" fill="url(#v30-g)"/><circle cx="18" cy="31" r="2" fill="url(#v30-g)"/><circle cx="30" cy="31" r="2" fill="url(#v30-g)"/><circle cx="24" cy="35" r="2" fill="url(#v30-g)"/><path d="M24 15L17 17M24 15L31 17M17 17L14 24M31 17L34 24M14 24L18 31M34 24L30 31M18 31L24 35M30 31L24 35M24 22L24 15" stroke="url(#v30-g)" stroke-width="1.2" stroke-opacity="0.45"/></svg>`,
  },
  {
    title: "31. Нейро-сфера",
    desc: "Сфера с сеткой меридианов — глобальная модель и контекст.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v31-g" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="24" r="13" stroke="url(#v31-g)" stroke-width="2"/><ellipse cx="24" cy="24" rx="6" ry="13" stroke="url(#v31-g)" stroke-width="1.3" stroke-opacity="0.55"/><path d="M11 24H37M14 17H34M14 31H34" stroke="url(#v31-g)" stroke-width="1.3" stroke-opacity="0.45"/><circle cx="24" cy="24" r="3" fill="url(#v31-g)"/></svg>`,
  },
  {
    title: "32. Импульс",
    desc: "Молния между узлами — быстрый вывод и активация нейросети.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v32-g" x1="16" y1="10" x2="32" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="16" cy="14" r="3" fill="url(#v32-g)"/><circle cx="32" cy="34" r="3" fill="url(#v32-g)"/><path d="M19 16L26 22L22 26L29 34" stroke="url(#v32-g)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "33. Слои модели",
    desc: "Три слоя с узлами — эмбеддинги, поиск, генерация ответа.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v33-g" x1="12" y1="14" x2="36" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="10" y="12" width="28" height="7" rx="2" stroke="url(#v33-g)" stroke-width="1.5" stroke-opacity="0.45"/><rect x="10" y="21" width="28" height="7" rx="2" stroke="url(#v33-g)" stroke-width="1.5" stroke-opacity="0.65"/><rect x="10" y="30" width="28" height="7" rx="2" stroke="url(#v33-g)" stroke-width="1.5"/><circle cx="16" cy="15.5" r="1.5" fill="#38BDF8"/><circle cx="24" cy="15.5" r="1.5" fill="#38BDF8"/><circle cx="32" cy="15.5" r="1.5" fill="#38BDF8"/><circle cx="16" cy="24.5" r="1.5" fill="#3B82F6"/><circle cx="24" cy="24.5" r="1.5" fill="#3B82F6"/><circle cx="32" cy="24.5" r="1.5" fill="#3B82F6"/><circle cx="20" cy="33.5" r="1.5" fill="#6366F1"/><circle cx="28" cy="33.5" r="1.5" fill="#6366F1"/></svg>`,
  },
  {
    title: "34. Мозг + чат",
    desc: "Интеллект и диалог — ассистент, который понимает и отвечает.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v34-g" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M14 28C12 28 11 27 11 25V15C11 13 12 12 14 12H28C30 12 31 13 31 15V23C31 25 30 26 28 26H22L18 30V26H14Z" stroke="url(#v34-g)" stroke-width="1.8"/><path d="M30 16C33 16 35 18 35 21V29C35 31 34 32 32 32H30" stroke="url(#v34-g)" stroke-width="1.5" stroke-opacity="0.5"/><path d="M22 10C18 10 15 13 15 17C15 21 18 24 22 24C24 24 25 23 26 22C27 23 28 24 30 24C32 24 34 22 34 19C34 15 31 12 27 12C26 10 24 10 22 10Z" fill="url(#v34-g)" fill-opacity="0.35" stroke="url(#v34-g)" stroke-width="1.6"/></svg>`,
  },
  {
    title: "35. Чип и поток",
    desc: "Процессор питает поток — вычисление + поток знаний Istok.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v35-g" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="17" y="9" width="14" height="14" rx="3" stroke="url(#v35-g)" stroke-width="2"/><circle cx="24" cy="16" r="2.5" fill="url(#v35-g)"/><path d="M19 12H17M24 9V7M29 12H31M19 20H17M29 20H31" stroke="url(#v35-g)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.55"/><path d="M24 23V28M20 32C22 30 26 30 28 32M20 36C23 34 25 34 28 36" stroke="url(#v35-g)" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  },
  {
    title: "36. Созвездие",
    desc: "Узлы-созвездие с центральным истоком — навигация по базе знаний.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v36-g" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><circle cx="24" cy="16" r="4" fill="url(#v36-g)"/><circle cx="13" cy="22" r="2" fill="#38BDF8"/><circle cx="35" cy="20" r="2" fill="#38BDF8"/><circle cx="18" cy="34" r="2" fill="#6366F1"/><circle cx="32" cy="32" r="2" fill="#6366F1"/><circle cx="24" cy="38" r="2" fill="#3B82F6"/><path d="M22 18L14 21M26 18L34 20M21 19L19 33M27 19L31 31M24 20V36" stroke="url(#v36-g)" stroke-width="1.2" stroke-opacity="0.5"/></svg>`,
  },
  {
    title: "37. Трансформер",
    desc: "Блоки внимания (attention) — архитектура современных LLM.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v37-g" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="13" y="11" width="22" height="8" rx="2" stroke="url(#v37-g)" stroke-width="1.8"/><rect x="13" y="21" width="22" height="8" rx="2" stroke="url(#v37-g)" stroke-width="1.8" stroke-opacity="0.75"/><rect x="13" y="31" width="22" height="8" rx="2" stroke="url(#v37-g)" stroke-width="1.8" stroke-opacity="0.55"/><path d="M24 19V21M24 29V31" stroke="url(#v37-g)" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="15" r="1.5" fill="#38BDF8"/><circle cx="24" cy="25" r="1.5" fill="#3B82F6"/><circle cx="24" cy="35" r="1.5" fill="#6366F1"/></svg>`,
  },
  {
    title: "38. Нейро-волна",
    desc: "ЭЭГ-подобная волна — анализ, понимание, генерация.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v38-g" x1="8" y1="24" x2="40" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M8 26H14L17 18L21 32L25 14L29 30L32 22H40" stroke="url(#v38-g)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="10" r="3.5" fill="url(#v38-g)"/></svg>`,
  },
  {
    title: "39. Бот-ассистент",
    desc: "Дружелюбный ИИ-робот — понятный символ для пользователей.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v39-g" x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><rect x="14" y="16" width="20" height="18" rx="6" stroke="url(#v39-g)" stroke-width="2"/><circle cx="20" cy="24" r="2" fill="url(#v39-g)"/><circle cx="28" cy="24" r="2" fill="url(#v39-g)"/><path d="M20 30H28" stroke="url(#v39-g)" stroke-width="1.8" stroke-linecap="round"/><path d="M24 10V14M18 12H30" stroke="url(#v39-g)" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="10" r="2" fill="url(#v39-g)"/></svg>`,
  },
  {
    title: "40. Векторное пространство",
    desc: "Стрелки осей и точка — семантические эмбеддинги документов.",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="v40-g" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#0F172A"/><path d="M14 36H34M14 36V16" stroke="url(#v40-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/><path d="M14 36L20 30M14 36L20 36" stroke="url(#v40-g)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/><circle cx="22" cy="28" r="2" fill="#38BDF8" fill-opacity="0.8"/><circle cx="28" cy="22" r="2" fill="#3B82F6"/><circle cx="30" cy="30" r="2" fill="#6366F1"/><circle cx="26" cy="18" r="2.5" fill="url(#v40-g)"/><path d="M22 28L26 18M28 22L26 18M30 30L26 18" stroke="url(#v40-g)" stroke-width="1.2" stroke-opacity="0.4"/></svg>`,
  },
];
