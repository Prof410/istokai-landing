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
];
