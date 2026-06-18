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
];
