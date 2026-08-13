(function () {
  const STORAGE_KEY = "zakon-lang";
  const LANGUAGES = ["ru", "en"];
  const DEFAULT_LANG = "ru";

  const I18N = {
    ru: {
      "meta.title": "Zakon-AI — Умный ИИ-поиск по законам, нормативке и корпоративным документам",
      "meta.description":
        "Zakon-AI — технология RAG для компаний: ИИ отвечает по вашим документам и нормативной базе с цитатами и ссылками на пункт источника. zakon-ai.ru",

      "ui.langGroup": "Язык интерфейса",
      "ui.themeGroup": "Тема оформления",
      "ui.themeDark": "Тёмная",
      "ui.themeLight": "Светлая",
      "ui.menu": "Меню",

      "header.tagline": "ИИ-помощник для работы<br>с Вашими документами",

      "nav.rag": "Что такое RAG",
      "nav.how": "Как работает",
      "nav.benefits": "Для бизнеса",
      "nav.pricing": "Тарифы",
      "nav.case": "Кейс",
      "nav.faq": "FAQ",
      "nav.contact": "Связаться",

      "hero.eyebrow": "ИИ-помощник для работы с Вашими документами",
      "hero.title": "Ответ по вашим документам за минуты — со ссылкой на источник",
      "hero.lead1":
        "Zakon-AI — ИИ-помощник, который отвечает по вашим документам и нормативке: договоры, регламенты, инструкции, отраслевые акты.",
      "hero.lead2":
        "Сотрудник задаёт вопрос обычными словами — система находит нужный текст в базе и формулирует ответ с цитатой и ссылкой на пункт. Ниже — как это устроено и сколько стоит.",
      "hero.stat1.value": "~1,5 мин",
      "hero.stat1.label": "среднее время ответа",
      "hero.stat2.value": "Цитата",
      "hero.stat2.label": "и пункт документа в каждом ответе",
      "hero.stat3.value": "24/7",
      "hero.stat3.label": "доступ к базе знаний",
      "hero.stat4.value": "1 база",
      "hero.stat4.label": "все документы в одном чате",
      "hero.btnTry": "Начать бесплатно",
      "hero.btnPricing": "Тарифы",
      "hero.btnEnterprise": "Внедрение в компанию",

      "chat.title": "Zakon-AI Chat",
      "chat.online": "● онлайн",
      "chat.demoDotsAria": "Примеры запросов",
      "chat.demo1Aria": "Пример 1",
      "chat.demo2Aria": "Пример 2",
      "chat.demo3Aria": "Пример 3",

      "rag.label": "Технология",
      "rag.title": "Что такое RAG и зачем он нужен",
      "rag.subtitle1":
        "Обычный чат с ИИ не знает всех внутренних документов Вашей организации и будет отвечать неточно или с ошибками. Технология RAG решает эту задачу: перед ответом система ищет в корпоративной базе знаний нужную информацию по смыслу вопроса и только потом генерирует ответ на основе найденного.",
      "rag.subtitle2": "Это и есть умный поиск с ИИ.",
      "rag.node1.title": "1. База знаний",
      "rag.node1.text": "Документы компании: PDF, Word, Excel, презентации, картинки и сканы.",
      "rag.node2.title": "2. Поиск (Retrieval)",
      "rag.node2.text": "Семантический поиск находит релевантные фрагменты по смыслу вопроса",
      "rag.node3.title": "3. Ответ (Generation)",
      "rag.node3.text": "Модель ИИ формулирует ответ только на основе найденного контекста",
      "rag.card1.title": "Понимает смысл, не только слова",
      "rag.card1.text":
        "Вопрос можно задать своими словами — система найдёт нужный раздел даже при другой формулировке.",
      "rag.card2.title": "Ваши документы, Ваши правила",
      "rag.card2.text":
        "Ответ опирается на загруженную корпоративную базу — Вы сами определяете, какие материалы в системе.",
      "rag.card3.title": "Проверяемый результат",
      "rag.card3.text":
        "Каждый вывод можно сверить: цитата, документ, раздел. Решение остаётся за человеком.",

      "how.label": "Процесс",
      "how.title": "Как это работает на практике",
      "how.subtitle":
        "Неважно, юридический ли у Вас отдел, HR, IT или производство — схема одна: документы компании становятся доступны для умного поиска через чат.",
      "how.tabsAria": "Шаги процесса",
      "how.prevAria": "Предыдущий шаг",
      "how.nextAria": "Следующий шаг",
      "how.step1.tab": "База",
      "how.step1.title": "Собираете базу",
      "how.step1.text":
        "Загружаете Ваши документы: регламенты, договоры, инструкции, FAQ, отраслевые материалы. Система анализирует и индексирует данные.",
      "how.step2.tab": "Вопрос",
      "how.step2.title": "Задаёте вопрос",
      "how.step2.text":
        "На естественном, обычном языке — как коллеге спрашиваете: «где прописано…», «как оформить…», «чем отличается…».",
      "how.step2.quote": "«Где прописаны штрафные санкции в договоре?»",
      "how.step3.tab": "Поиск",
      "how.step3.title": "Система ищет",
      "how.step3.text":
        "RAG находит наиболее релевантные фрагменты среди тысяч страниц Вашей базы знаний и готовит структурированный ответ.",
      "how.step4.tab": "Ответ",
      "how.step4.title": "Получаете ответ",
      "how.step4.text":
        "С формулировкой, цитатой и указанием, из какого документа взят вывод. Ответ системы занимает в среднем 1,5 минуты.",
      "how.step4.source": "п. 8.3 · Договор поставки",
      "how.step5.tab": "Проверка",
      "how.step5.title": "Проверяете",
      "how.step5.text": "Открываете источник и принимаете решение — полный контроль сотрудника за результатом.",
      "how.step5.visual": "Источник открыт",

      "outcomes.label": "Результат",
      "outcomes.title": "Что изменится в Вашем бизнесе",
      "outcomes.subtitle":
        "Не «ещё один чат с ИИ», а инструмент, который влияет на выручку, риски и загрузку команды.",
      "outcomes.card1.title": "Больше заработаете",
      "outcomes.card1.text":
        "Быстрее готовите ответы по тендерам, договорам и клиентским запросам — не теряете сделки из‑за долгого поиска в документах.",
      "outcomes.card2.title": "Меньше потеряете",
      "outcomes.card2.text":
        "Меньше риска пропустить пункт в договоре, норме или регламенте — каждый вывод можно проверить по источнику.",
      "outcomes.card3.title": "Больше с тем же штатом",
      "outcomes.card3.text":
        "Рутинный поиск занимает минуты вместо часов: юристы и эксперты фокусируются на решениях, а не на «где это написано».",
      "outcomes.card4.title": "Быстрее принимаете решения",
      "outcomes.card4.text":
        "Типовые вопросы не зависают в ожидании эксперта — ответ со ссылкой на документ за минуты, а не за дни согласований.",
      "outcomes.card5.title": "Знания остаются в компании",
      "outcomes.card5.text":
        "Опыт не уходит вместе с сотрудником: регламенты, кейсы и ответы накапливаются в общей базе, а не в переписке и личных папках.",
      "outcomes.card6.title": "Единая позиция для всех",
      "outcomes.card6.text":
        "Продажи, HR и юристы отвечают клиентам и коллегам одинаково — по актуальным документам компании, а не «как помнят».",

      "benefits.label": "Ценность",
      "benefits.title": "Что получит Ваш бизнес",
      "benefits.subtitle":
        "Меньше часов на поиск в папках и почте — больше времени на решения. Корпоративная база становится доступным ассистентом с проверяемыми источниками.",
      "benefits.card1.title": "Скорость работы",
      "benefits.card1.text":
        " Было «Найди в договоре все штрафные санкции и возможную ответственность за них» — 2-3 часа.<br><strong>Стало:</strong> ответ за 1,5 минуты с указанием пункта договора.",
      "benefits.card2.title": "Точность ответа",
      "benefits.card2.text":
        "Ответ строится на Ваших документах, а не на общей «памяти» модели без привязки к компании.",
      "benefits.card3.title": "Масштабируемость",
      "benefits.card3.text":
        "Неважно насколько большая Ваша база документов — система работает со всей базой и находит связи между документами.",
      "benefits.card4.title": "Конфиденциальность",
      "benefits.card4.text":
        "Можно развернуть на вашем сервере или в выделенном контуре. Доступ разграничивается по ролям и подразделениям вашей компании.",
      "benefits.card5.title": "Актуальные документы",
      "benefits.card5.text":
        "Меньше ошибок и неточностей из-за устаревших версий документов и «устных договорённостей». База документов регулярно обновляется.",
      "benefits.card6.title": "Быстрый онбординг",
      "benefits.card6.text":
        "Новый сотрудник быстрее входит в контекст через ответы с ссылками на внутренние материалы.",
      "benefits.card7.title": "Доступность 24/7",
      "benefits.card7.text":
        "Помощь Zakon-AI доступна в любое время суток, в любой день недели, из любой точки мира.",
      "benefits.card8.title": "Экономия времени и средств",
      "benefits.card8.text":
        "Снижает нагрузку на юридический и экспертный блок — рутинный поиск по документам занимает минуты, а не часы.",
      "benefits.compare.bad.title": "Обычный чат с ИИ",
      "benefits.compare.bad.item1": "Не знает внутренних документов Вашей компании",
      "benefits.compare.bad.item2": "Может уверенно ответить неверно",
      "benefits.compare.bad.item3": "Сложно проверить источник",
      "benefits.compare.bad.item4": "Не учитывает Ваши редакции и версии файлов",
      "benefits.compare.good.title": "Чат Zakon-AI по базе знаний",
      "benefits.compare.good.item1": "Ищет в корпоративных документах перед ответом",
      "benefits.compare.good.item2": "Цитирует конкретные фрагменты и разделы",
      "benefits.compare.good.item3": "Ответ можно проверить в один клик",
      "benefits.compare.good.item4": "База обновляется под Ваши актуальные материалы",

      "start.label": "Старт",
      "start.title": "Попробовать самостоятельно",
      "start.subtitle":
        "Для личного или пилотного доступа — без долгого согласования. Загрузите свои материалы и задайте первый вопрос.",
      "start.step1.title": "Регистрация",
      "start.step1.text":
        "Создайте аккаунт на платформе — бесплатный стартовый лимит для знакомства с сервисом.",
      "start.step2.title": "Загрузка документов",
      "start.step2.text":
        "Добавьте PDF, Word, Excel и другие файлы — система проиндексирует их для поиска по смыслу.",
      "start.step3.title": "Первый вопрос",
      "start.step3.text":
        "Спросите как коллегу — получите ответ с цитатой и ссылкой на фрагмент документа.",
      "start.btn": "Перейти в приложение",

      "pricing.label": "Тарифы",
      "pricing.title": "Планы для команды и компании",
      "pricing.subtitle":
        "Оплата по объёму базы и числу запросов. Корпоративное внедрение — на вашем сервере или в выделенном контуре.",
      "pricing.tier1.name": "Старт",
      "pricing.tier1.desc": "Для знакомства и личных задач",
      "pricing.tier1.f1": "До 1 ГБ документов",
      "pricing.tier1.f2": "Сотни запросов в месяц",
      "pricing.tier1.f3": "Ответы с цитатами источника",
      "pricing.tier1.btn": "Начать бесплатно",
      "pricing.tier2.badge": "Популярный",
      "pricing.tier2.name": "Бизнес",
      "pricing.tier2.desc": "Для отдела или небольшой команды",
      "pricing.tier2.f1": "До 10 ГБ документов",
      "pricing.tier2.f2": "Расширенный лимит запросов",
      "pricing.tier2.f3": "Несколько пользователей",
      "pricing.tier2.btn": "Подключить",
      "pricing.tier3.name": "Про",
      "pricing.tier3.desc": "Для компании и отраслевых баз",
      "pricing.tier3.f1": "Большой объём базы",
      "pricing.tier3.f2": "Роли и разграничение доступа",
      "pricing.tier3.f3": "Развёртывание на вашем сервере",
      "pricing.tier3.btn": "Обсудить внедрение",
      "pricing.packages.title": "Готовые пакеты",
      "pricing.packages.lead":
        "База для своих документов и отраслевые режимы — подключаются в приложении Zakon-AI.",
      "pricing.pkg1.title": "Ваши документы",
      "pricing.pkg1.text":
        "Ваша личная или командная база знаний — договоры, регламенты, инструкции и любые файлы. Задавайте вопросы обычным языком и получайте ответы со ссылками на фрагменты ваших документов.",
      "pricing.pkg1.status": "Доступно",
      "pricing.pkg2.title": "Энергетика",
      "pricing.pkg2.text":
        "ИИ-эксперт по нормативной базе рынка электроэнергии и мощности. Ответы по нормам со ссылками на пункты — постановления Правительства, приказы Минэнерго, методические указания ФАС.",
      "pricing.pkg2.status": "Доступно",
      "pricing.pkg2.link": "Читать кейс",
      "pricing.pkg3.title": "Финансовый анализ",
      "pricing.pkg3.text":
        "ИИ-помощник для разбора бухгалтерской, финансовой и налоговой отчётности юридических лиц. Структурированный разбор за минуты: коэффициенты, тренды и риски с опорой на загруженные отчёты.",
      "pricing.pkg3.status": "Скоро",
      "pricing.pkg4.title": "Презентации",
      "pricing.pkg4.text":
        "ИИ-помощник по созданию презентаций: структура, слайды, тексты и спикерские заметки. От идеи до готового каркаса — для совещания, питча, отчёта или обучения.",
      "pricing.pkg4.status": "Доступно",
      "pricing.pkg5.title": "Тендерный специалист",
      "pricing.pkg5.text":
        "Профессиональный ИИ-помощник для работы с госзакупками. Разбор тендера по ссылке с опорой на 44-ФЗ, 223-ФЗ, 135-ФЗ, 63-ФЗ, ПП РФ (1005, 1875, 878 и др.) и ведомственные акты — риски и ключевые факты за минуты.",
      "pricing.pkg5.status": "Доступно",
      "pricing.pkg6.title": "Глубокое размышление",
      "pricing.pkg6.text":
        "Режим для сложных вопросов по документам. Несколько моделей разбирают ситуацию с разных сторон — взвешенный итог с точками согласия, расхождениями и рисками.",
      "pricing.pkg6.status": "Доступно",
      "pricing.pkgLink": "Подробнее",
      "pricing.note":
        "Точные лимиты и стоимость уточняйте при подключении — оставьте заявку ниже.",

      "use.label": "Применение",
      "use.title": "Где используется технология RAG",
      "use.card1.title": "Юридические и compliance-отделы",
      "use.card1.text":
        "Поиск условий в договорах, сравнение версий, быстрый доступ к регламентам и политикам.",
      "use.card2.title": "HR и внутренние сервисы",
      "use.card2.text":
        "Ответы по кадровым процедурам, отпускам, бенефитам — из актуальных внутренних документов.",
      "use.card3.title": "IT и техподдержка",
      "use.card3.text":
        "База знаний по инцидентам, инструкциям, настройкам — без долгого поиска в тикетах.",
      "use.card4.title": "Продажи и консалтинг",
      "use.card4.text":
        "Быстрый доступ к кейсам, презентациям, методичкам и типовым ответам клиентам.",
      "use.card5.title": "Производство и качество",
      "use.card5.text":
        "Технологические карты, стандарты, инструкции по безопасности — в одном умном поиске.",
      "use.card6.title": "Регулируемые отрасли",
      "use.card6.text":
        "Нормативка, отраслевые акты, письма регуляторов — с обязательной ссылкой на пункт источника.",
      "use.card7.title": "Научная деятельность",
      "use.card7.text":
        "Быстрый поиск по публикациям, отчётам, протоколам экспериментов и методичкам — с цитатой из исходного документа.",
      "use.card8.title": "Образование",
      "use.card8.text":
        "Ответы для преподавателей и студентов по учебным материалам, регламентам и внутренним положениям вуза или учебного центра.",

      "case.label": "Внедрение",
      "case.title": "Проект Zakon-AI для энергетической отрасли",
      "case.subtitle":
        "Отраслевой ассистент для консалтинговой компании в сфере электроэнергетики: нормативная база розничного рынка, ответы по документам с цитатой источника. Проект в активной доработке.",
      "case.contentTitle": "ИИ-консультант по электроэнергетике",
      "case.contentText":
        "На базе Zakon-AI создан отраслевой ассистент для консалтинга в электроэнергетике: отвечает по ПП РФ № 442, № 1179, приказам Минэнерго и методическим указаниям ФАС — с цитатами и ссылками на пункты. Для юристов, тарифных специалистов и экспертов по розничному рынку.",
      "case.list1": "База: 450+ документов с актуальными редакциями",
      "case.list2": "Поиск: семантический RAG по векторной базе",
      "case.list3": "Ответ: формулировка + документ + пункт",
      "case.list4": "Статус: пилот, тестирование у коллег",
      "case.button": "Читать о проекте",
      "case.pilotBadge": "пилот",
      "case.chatTitle": "Zakon-AI · ЭЭ",

      "faq.label": "FAQ",
      "faq.title": "Частые вопросы",
      "faq.q1": "Чем RAG отличается от обычного ChatGPT?",
      "faq.a1":
        "ChatGPT отвечает на основе обучения модели и не знает Ваших внутренних файлов. RAG сначала ищет в корпоративной базе знаний и только потом формулирует ответ — с привязкой к конкретным документам.",
      "faq.q2": "Это замена сотрудникам или экспертам?",
      "faq.a2":
        "Нет. RAG ускоряет поиск и подготовку черновика ответа. Окончательное решение, оценка рисков и ответственность остаются за человеком.",
      "faq.q3": "Какие документы можно подключить?",
      "faq.a3":
        "PDF, Word, Excel, текстовые файлы, markdown, материалы из wiki и Confluence — всё, из чего можно извлечь текст. Состав базы определяете Вы.",
      "faq.q4": "Безопасно ли это для корпоративных данных?",
      "faq.a4":
        "Да, при правильном внедрении: развёртывание на Вашем сервере или в выделенном контуре, разграничение доступа, контроль того, какие документы попадают в базу.",
      "faq.q5": "Подойдёт ли только для больших компаний?",
      "faq.a5":
        "Нет. RAG полезен любой организации, где много документов и регулярные вопросы «где это написано?». Масштаб базы и инфраструктуры подбирается под задачу.",
      "faq.q6": "Как считаются запросы и объём базы?",
      "faq.a6":
        "Тариф зависит от объёма загруженных документов (гигабайты) и числа вопросов к системе в месяц. На старте доступен бесплатный лимит для знакомства; для команды и корпоративного контура лимиты и оплата согласуются индивидуально.",
      "faq.q7": "Как начать — личный аккаунт или сразу для команды?",
      "faq.a7":
        "Можно зарегистрироваться и загрузить свои документы самостоятельно. Для нескольких отделов, ролей и развёртывания на вашем сервере — оставьте заявку в форме ниже: обсудим пилот и подключение под задачи компании.",

      "contact.label": "Контакт",
      "contact.title": "Обсудить Zakon-AI",
      "contact.subtitle":
        "Расскажем, как Zakon-AI работает на Вашей базе знаний, покажем пилотный кейс и обсудим пилот для внедрения в Вашей компании.",
      "contact.perk1": "Консультация по архитектуре и внедрению",
      "contact.perk2": "Ответ в течение 1–2 рабочих дней",
      "contact.perk3": "Демо по приглашению",
      "contact.perk4": "Пилот под задачи Вашей компании",
      "contact.nameLabel": "Имя *",
      "contact.namePlaceholder": "Как к Вам обращаться",
      "contact.emailLabel": "Email *",
      "contact.emailPlaceholder": "name@company.ru",
      "contact.phoneLabel": "Телефон *",
      "contact.phonePlaceholder": "+7 900 000-00-00",
      "contact.roleLabel": "Роль",
      "contact.roleEmpty": "Выберите",
      "contact.roleManagement": "Руководитель / собственник",
      "contact.roleIt": "IT / цифровизация",
      "contact.roleLegal": "Юрист / compliance",
      "contact.roleHr": "HR / внутренние сервисы",
      "contact.roleOperations": "Операционный блок",
      "contact.roleConsulting": "Консалтинг / интегратор",
      "contact.roleOther": "Другое",
      "contact.messageLabel": "Комментарий",
      "contact.messagePlaceholder": "Какая база знаний, какие задачи?",
      "contact.consent":
        "Согласен на обработку персональных данных<br>для обратной связи",
      "contact.submit": "Отправить заявку",
      "contact.formNote":
        "Нажимая кнопку, Вы соглашаетесь на обработку данных для связи по заявке.",

      "footer.tagline":
        "ИИ-консультант на базе технологии RAG<br>для корпоративных баз знаний и документов.",
      "footer.copyright": "© 2026 Zakon-AI. Все права защищены.",

      "energy.meta.title": "ИИ-консультант для энергосбытовой компании — кейс Zakon-AI",
      "energy.meta.description":
        "Реальный пилот Zakon-AI: RAG-ассистент по нормативке розничного рынка для энергосбытовой компании — ПП РФ № 442, № 1179, приказы Минэнерго, методические указания ФАС.",
      "energy.back": "← На главную",
      "energy.tag1": "Пилот",
      "energy.tag2": "Энергосбыт",
      "energy.tag3": "Розничный рынок",
      "energy.hero.title": "ИИ-консультант по нормативке для энергосбытовой компании",
      "energy.hero.lead":
        "Реальный проект на базе Zakon-AI: система отвечает по ПП РФ № 442, ПП РФ № 1179, приказам Минэнерго, методическим указаниям ФАС и внутренним регламентам — с цитатой и ссылкой на пункт источника. Сейчас пилот тестируется коллегами и дорабатывается по их обратной связи.",
      "energy.metric1.value": "450+",
      "energy.metric1.label": "документов в базе",
      "energy.metric2.value": "с часов → ~1,5 мин",
      "energy.metric2.label": "поиск нормы по запросу",
      "energy.metric3.value": "Пункт источника",
      "energy.metric3.label": "в каждом ответе",
      "energy.metric4.value": "Закрытый контур",
      "energy.metric4.label": "на сервере заказчика",
      "energy.tab.users": "Для пользователей",
      "energy.tab.developers": "Для разработчиков",
      "energy.tabsAria": "Разделы кейса",
      "energy.users.what.title": "Что это и зачем",
      "energy.users.what.p1":
        "Это не «чат с интернетом», а помощник по <strong>вашей</strong> нормативной базе. Сотрудник задаёт вопрос обычными словами — как коллеге в переписке — и получает ответ с указанием документа и пункта. Система не выдумывает нормы из головы: она ищет в загруженных актах и формулирует ответ только на основе найденного текста.",
      "energy.users.what.p2":
        "Пилот сделан для энергосбытовой компании: юристы, тарифные экономисты, договорной блок и сотрудники розничного сбыта. Сейчас коллеги тестируют систему в рабочих сценариях, мы дорабатываем формулировки и покрытие базы.",
      "energy.users.how.title": "Как это работает — простыми словами",
      "energy.users.how.step1":
        "<strong>Вы задаёте вопрос.</strong> Например: «Учитываются ли точки поставки без ПУ при расчёте НВВ по методу аналогов?»",
      "energy.users.how.step2":
        "<strong>Система ищет по смыслу.</strong> Она понимает формулировку, а не только точные слова — и находит нужные фрагменты в ПП РФ № 442, приказах Минэнерго, методических указаниях ФАС и других документах базы.",
      "energy.users.how.step3":
        "<strong>Вы получаете ответ со ссылкой.</strong> Краткий вывод + документ + пункт. Можно открыть фрагмент источника и проверить цитату.",
      "energy.users.how.step4":
        "<strong>Эксперт принимает решение.</strong> Система ускоряет поиск и черновик позиции; окончательный ответ и ответственность — за специалистом компании.",
      "energy.users.benefits.title": "Какие плюсы для работы",
      "energy.users.benefits.item1":
        "<strong>Экономия времени.</strong> Сложный запрос по нормативке, на который уходили 1–3 часа в Консультанте и PDF, сводится к минутам на черновик со ссылками.",
      "energy.users.benefits.item2":
        "<strong>Меньше риска пропустить пункт.</strong> Один вопрос часто затрагивает несколько актов сразу — система подтягивает связанные фрагменты в одном ответе.",
      "energy.users.benefits.item3":
        "<strong>Проверяемый источник.</strong> Каждый вывод можно открыть в документе — важно при подготовке к проверкам и переписке с регулятором.",
      "energy.users.benefits.item4":
        "<strong>Не как ChatGPT.</strong> Общедоступные чаты не знают актуальную отраслевую нормативку и могут уверенно ошибаться. Здесь ответ строится только из вашей базы.",
      "energy.users.benefits.item5":
        "<strong>Доступ 24/7.</strong> Смежные отделы не ждут «звонка юристу» — есть единая точка входа с источниками.",
      "energy.users.benefits.item6":
        "<strong>Разграничение по ролям.</strong> Внутренние документы видят только те подразделения, которым они предназначены.",
      "energy.users.who.title": "Кому полезно в компании",
      "energy.users.who.legal.title": "Юридическая служба",
      "energy.users.who.legal.text": "Трактовка норм розничного рынка, подготовка позиций, сверка редакций актов.",
      "energy.users.who.tariff.title": "Тарифные экономисты",
      "energy.users.who.tariff.text": "НВВ, сбытовая надбавка, предельные уровни нерегулируемых цен, методики ФАС.",
      "energy.users.who.contracts.title": "Договорной блок",
      "energy.users.who.contracts.text":
        "Договоры энергоснабжения, переход потребителей, ограничение режима потребления, комплект документов.",
      "energy.users.who.retail.title": "Розничный сбыт",
      "energy.users.who.retail.text": "Типовые вопросы по ПП РФ № 442 и внутренним регламентам без очереди к эксперту.",
      "energy.users.examples.title": "Примеры вопросов",
      "energy.users.examples.q1": "Учитываются ли точки поставки без ПУ при расчёте НВВ по методу аналогов?",
      "energy.users.examples.q2":
        "В какой срок энергосбытовая компания обязана опубликовать предельные уровни нерегулируемых цен?",
      "energy.users.examples.q3": "Какие основания для ограничения режима потребления по ПП РФ № 442?",
      "energy.users.examples.q4": "Можно ли применить п. 65(5) при определении нерегулируемых цен?",
      "energy.users.examples.q5": "Какие документы нужны для заключения договора энергоснабжения с потребителем?",
      "energy.users.examples.answer":
        "<strong>Пример ответа из пилота:</strong> «Да, при действующем договоре энергоснабжения такие точки включаются в количество для НВВ. Основание: п. 65(2) Приказа № 1178, п. 13 МУ 1554/17, п. 32 и 42 ПП РФ № 442».",
      "energy.users.results.title": "Что изменилось в пилоте",
      "energy.users.results.th.metric": "Показатель",
      "energy.users.results.th.before": "Было",
      "energy.users.results.th.after": "Стало",
      "energy.users.results.row1.metric": "Поиск нормы по запросу",
      "energy.users.results.row1.before": "1–3 часа (Консультант, PDF, согласование с коллегой)",
      "energy.users.results.row1.after": "~1,5 минуты на черновик со ссылками",
      "energy.users.results.row2.metric": "Сверка нескольких актов",
      "energy.users.results.row2.before": "Ручной поиск по каждому документу",
      "energy.users.results.row2.after": "Один запрос — связанные пункты в одном ответе",
      "energy.users.results.row3.metric": "Доступ для смежных отделов",
      "energy.users.results.row3.before": "Через «звонок юристу»",
      "energy.users.results.row3.after": "Единый чат с источниками",
      "energy.dev.architecture.title": "Архитектура",
      "energy.dev.architecture.lead":
        "Классический RAG-конвейер без готовых фреймворков вроде LangChain — собственный пайплайн на Python. Документы хранятся и индексируются локально; генерация ответа идёт через API языковой модели с жёсткой привязкой к найденным фрагментам.",
      "energy.dev.arch.step1": "Markdown-документы<br><span>нормативка + регламенты</span>",
      "energy.dev.arch.step2": "Чанки + эмбеддинги<br><span>~3000 симв., overlap 400</span>",
      "energy.dev.arch.step3": "FAISS<br><span>векторный поиск</span>",
      "energy.dev.arch.step4": "LLM<br><span>ответ по контексту</span>",
      "energy.dev.stack.title": "Стек и компоненты",
      "energy.dev.stack.ui.title": "Интерфейс",
      "energy.dev.stack.ui.text": "Streamlit — веб-чат, список нормативки, экспорт ответов в Word и Excel.",
      "energy.dev.stack.lang.title": "Язык и RAG",
      "energy.dev.stack.lang.text":
        "Python, собственные модули: загрузка данных, чанкинг, построение индекса, поиск и сбор промпта.",
      "energy.dev.stack.embeddings.title": "Эмбеддинги",
      "energy.dev.stack.embeddings.text":
        "<code>sentence-transformers/paraphrase-multilingual-mpnet-base-v2</code> — мультиязычная модель для русскоязычных юридических текстов.",
      "energy.dev.stack.vector.title": "Векторное хранилище",
      "energy.dev.stack.vector.text":
        "FAISS (<code>IndexFlatL2</code>), индекс собирается офлайн и подгружается при старте приложения.",
      "energy.dev.stack.llm.title": "Языковая модель",
      "energy.dev.stack.llm.text":
        "DeepSeek через OpenRouter (например, <code>deepseek/deepseek-v4-flash</code>) или прямой API — в зависимости от контура развёртывания.",
      "energy.dev.stack.data.title": "Данные и учёт",
      "energy.dev.stack.data.text":
        "SQLite: пользователи, история диалогов, ссылки на документы. Ролевая модель доступа (в т.ч. админ).",
      "energy.dev.stack.docs.title": "Документы",
      "energy.dev.stack.docs.text":
        "Исходники конвертируются в Markdown; в базе 450+ актов и методических материалов по розничному рынку.",
      "energy.dev.stack.deploy.title": "Развёртывание",
      "energy.dev.stack.deploy.text":
        "Закрытый контур на сервере заказчика. Данные и индекс не покидают периметр организации.",
      "energy.dev.pipeline.title": "Пайплайн данных",
      "energy.dev.pipeline.step1":
        "<strong>Конвертация.</strong> Нормативные документы приводятся к единому формату Markdown.",
      "energy.dev.pipeline.step2":
        "<strong>Чанкинг.</strong> Текст режется на фрагменты ~3000 символов с перекрытием 400 символов, чтобы не терять контекст на границах пунктов.",
      "energy.dev.pipeline.step3":
        "<strong>Индексация.</strong> Для каждого чанка считается вектор; строится FAISS-индекс и сохраняется на диск.",
      "energy.dev.pipeline.step4":
        "<strong>Запрос.</strong> Вопрос пользователя эмбеддится, из индекса выбираются top-k релевантных фрагментов.",
      "energy.dev.pipeline.step5":
        "<strong>Генерация.</strong> LLM получает только найденный контекст и инструкцию отвечать со ссылками на пункты; ответ логируется в SQLite.",
      "energy.dev.pipeline.step6":
        "<strong>Обновление.</strong> При загрузке новой редакции документа индекс пересобирается для актуальной базы.",
      "energy.dev.features.title": "Особенности реализации",
      "energy.dev.features.item1":
        "Без LangChain / LlamaIndex — полный контроль над чанкингом, промптом и форматом ответа.",
      "energy.dev.features.item2":
        "Ответ всегда привязан к retrieved-контексту; модель не опирается на «память» из предобучения.",
      "energy.dev.features.item3": "Отдельный экран со списком нормативки: номер, название, даты редакций.",
      "energy.dev.features.item4": "Экспорт диалога в Word (текст) и Excel (таблица) для служебных записок.",
      "energy.dev.features.item5":
        "Пилот в активной доработке: расширение базы, уточнение промптов, обратная связь от тестовых пользователей.",
      "energy.cta.title": "Хотите похожее решение для вашей энергосбытовой компании?",
      "energy.cta.text":
        "Обсудим состав нормативной базы и покажем демо на типовых вопросах по розничному рынку — по приглашению.",
      "energy.cta.button": "Связаться",

      "form.error.required": "Заполните имя, email, телефон и согласие на обработку данных.",
      "form.error.email": "Проверьте корректность email.",
      "form.error.phone": "Проверьте корректность телефона.",
      "form.error.notConfigured":
        "Форма ещё не подключена. Укажите endpoint Formspree в js/main.js (см. README).",
      "form.error.sending": "Отправляем заявку…",
      "form.error.success":
        "Спасибо! Заявка отправлена. Мы свяжемся с Вами в ближайшее время.",
      "form.error.fail":
        "Не удалось отправить заявку. Попробуйте позже.",

      chatDemos: [
        {
          docs: ["Регламент_HR.pdf", "Договор_шаблон.docx", "База знаний IT"],
          question:
            "Можно ли оформить удалёнку на 3 дня без согласования с руководителем отдела?",
          answer:
            "Нет. По регламенту удалённая работа согласуется с непосредственным руководителем не позднее чем за 1 рабочий день.",
          source:
            "Источник: «Положение о дистанционной работе», п. 4.2. → открыть фрагмент документа",
        },
        {
          docs: ["Договор_поставки.pdf", "Реестр_договоров.xlsx", "Типовые_условия.docx"],
          question:
            "Есть ли в договоре с поставщиком право расторгнуть его при просрочке поставки более 10 дней?",
          answer:
            "Да. В разделе 8.3 предусмотрено одностороннее расторжение при нарушении сроков поставки более чем на 10 рабочих дней, с письменным уведомлением за 5 дней.",
          source:
            "Источник: Договор поставки №127/2025, п. 8.3, 8.4. → открыть фрагмент документа",
        },
        {
          docs: ["НК_РФ_выдержки.pdf", "Учётная_политика.docx", "Мемо_НДС.pdf"],
          question:
            "Можно ли принять НДС к вычету по авансовому счёту-фактуре, если оплата ещё не проведена?",
          answer:
            "Нет. По учётной политике компании вычет по авансовому СФ отражается после фактической оплаты поставщику и проведения платежа в учётной системе.",
          source:
            "Источник: Учётная политика 2026, разд. 4; п. 2 ст. 171 НК РФ. → открыть фрагмент документа",
        },
      ],

      caseChatDemos: [
        {
          docs: ["ПП РФ №442", "Приказ №1178", "МУ 1554/17"],
          question:
            "Учитываются ли точки поставки без ПУ при расчёте НВВ по методу аналогов?",
          answer:
            "Да, при действующем договоре энергоснабжения такие точки включаются в количество для НВВ. Основание: п. 65(2) Приказа №1178, п. 13 МУ 1554/17, п. 32 и 42 ПП РФ №442.",
          source: "→ открыть фрагмент документа",
        },
      ],
    },

    en: {
      "meta.title": "Zakon-AI — Intelligent AI Search Across Laws, Regulations, and Corporate Documents",
      "meta.description":
        "Zakon-AI — RAG technology for enterprises: AI answers from your documents and regulatory knowledge base with citations and links to source clauses. zakon-ai.ru",

      "ui.langGroup": "Interface language",
      "ui.themeGroup": "Theme",
      "ui.themeDark": "Dark",
      "ui.themeLight": "Light",
      "ui.menu": "Menu",

      "header.tagline": "AI assistant for working<br>with your documents",

      "nav.rag": "What is RAG",
      "nav.how": "How it works",
      "nav.benefits": "For business",
      "nav.pricing": "Pricing",
      "nav.case": "Case study",
      "nav.faq": "FAQ",
      "nav.contact": "Contact us",

      "hero.eyebrow": "AI assistant for working with your documents",
      "hero.title": "Answers from your documents in minutes — with a link to the source",
      "hero.lead1":
        "Zakon-AI is an AI assistant that answers from your documents and regulations: contracts, policies, instructions, and industry acts.",
      "hero.lead2":
        "An employee asks in plain language — the system finds the right text in the knowledge base and returns an answer with a quote and source reference. Below — how it works and what it costs.",
      "hero.stat1.value": "~1.5 min",
      "hero.stat1.label": "average response time",
      "hero.stat2.value": "Quote",
      "hero.stat2.label": "and source clause in every answer",
      "hero.stat3.value": "24/7",
      "hero.stat3.label": "knowledge base access",
      "hero.stat4.value": "1 base",
      "hero.stat4.label": "all documents in one chat",
      "hero.btnTry": "Start for free",
      "hero.btnPricing": "Pricing",
      "hero.btnEnterprise": "Enterprise rollout",

      "chat.title": "Zakon-AI Chat",
      "chat.online": "● online",
      "chat.demoDotsAria": "Query examples",
      "chat.demo1Aria": "Example 1",
      "chat.demo2Aria": "Example 2",
      "chat.demo3Aria": "Example 3",

      "rag.label": "Technology",
      "rag.title": "What is RAG and why you need it",
      "rag.subtitle1":
        "A standard AI chat does not know your organization's internal documents and may answer inaccurately or with errors. RAG solves this: before generating a response, the system searches your corporate knowledge base for relevant information based on the meaning of the question, and only then produces an answer grounded in what was found.",
      "rag.subtitle2": "This is intelligent AI-powered search.",
      "rag.node1.title": "1. Knowledge base",
      "rag.node1.text": "Company documents: PDF, Word, Excel, presentations, images, and scans.",
      "rag.node2.title": "2. Retrieval",
      "rag.node2.text": "Semantic search finds relevant passages based on the meaning of the question",
      "rag.node3.title": "3. Generation",
      "rag.node3.text": "The AI model formulates an answer only from the retrieved context",
      "rag.card1.title": "Understands meaning, not just keywords",
      "rag.card1.text":
        "Ask in your own words — the system will find the right section even with different phrasing.",
      "rag.card2.title": "Your documents, your rules",
      "rag.card2.text":
        "Answers are grounded in your uploaded corporate knowledge base — you decide which materials are in the system.",
      "rag.card3.title": "Verifiable results",
      "rag.card3.text":
        "Every conclusion can be checked: quote, document, section. The final decision stays with a human.",

      "how.label": "Process",
      "how.title": "How it works in practice",
      "how.subtitle":
        "Whether you have legal, HR, IT, or operations — the flow is the same: company documents become accessible through intelligent chat search.",
      "how.tabsAria": "Process steps",
      "how.prevAria": "Previous step",
      "how.nextAria": "Next step",
      "how.step1.tab": "Base",
      "how.step1.title": "Build your knowledge base",
      "how.step1.text":
        "Upload your documents: policies, contracts, instructions, FAQs, and industry materials. The system analyzes and indexes the content.",
      "how.step2.tab": "Question",
      "how.step2.title": "Ask a question",
      "how.step2.text":
        "In natural language — as you would ask a colleague: \"where is it stated…\", \"how do I process…\", \"what is the difference…\".",
      "how.step2.quote": "\"Where are the penalty clauses in the contract?\"",
      "how.step3.tab": "Search",
      "how.step3.title": "The system searches",
      "how.step3.text":
        "RAG finds the most relevant passages across thousands of pages in your knowledge base and prepares a structured answer.",
      "how.step4.tab": "Answer",
      "how.step4.title": "You get an answer",
      "how.step4.text":
        "With wording, a quote, and the source document. The system typically responds in about 1.5 minutes.",
      "how.step4.source": "cl. 8.3 · Supply contract",
      "how.step5.tab": "Verify",
      "how.step5.title": "You verify",
      "how.step5.text": "Open the source and make the decision — the employee stays in full control of the outcome.",
      "how.step5.visual": "Source opened",

      "outcomes.label": "Outcomes",
      "outcomes.title": "What will change in your business",
      "outcomes.subtitle":
        "Not \"another AI chat\" — a tool that affects revenue, risk, and team workload.",
      "outcomes.card1.title": "Earn more",
      "outcomes.card1.text":
        "Prepare tender, contract, and client responses faster — don't lose deals because document search takes too long.",
      "outcomes.card2.title": "Lose less",
      "outcomes.card2.text":
        "Lower risk of missing a clause in a contract, regulation, or policy — every conclusion can be verified against the source.",
      "outcomes.card3.title": "Do more with the same team",
      "outcomes.card3.text":
        "Routine search takes minutes instead of hours: lawyers and experts focus on decisions, not \"where is it written\".",
      "outcomes.card4.title": "Decide faster",
      "outcomes.card4.text":
        "Routine questions don't stall waiting for an expert — an answer with a document link in minutes, not days of approvals.",
      "outcomes.card5.title": "Knowledge stays in the company",
      "outcomes.card5.text":
        "Expertise doesn't leave with an employee: policies, cases, and answers accumulate in a shared base, not in email threads and personal folders.",
      "outcomes.card6.title": "One consistent position",
      "outcomes.card6.text":
        "Sales, HR, and legal give clients and colleagues the same answers — from current company documents, not from memory.",

      "benefits.label": "Value",
      "benefits.title": "What your business gains",
      "benefits.subtitle":
        "Fewer hours searching folders and email — more time for decisions. Your corporate knowledge base becomes an assistant with verifiable sources.",
      "benefits.card1.title": "Faster operations",
      "benefits.card1.text":
        " Before: \"Find all penalty clauses and potential liability in the contract\" — 2–3 hours.<br><strong>Now:</strong> an answer in 1.5 minutes with the contract clause cited.",
      "benefits.card2.title": "Answer accuracy",
      "benefits.card2.text":
        "Answers are built from your documents, not from the model's general \"memory\" without company context.",
      "benefits.card3.title": "Scalability",
      "benefits.card3.text":
        "No matter how large your document base — the system works across the full corpus and finds connections between documents.",
      "benefits.card4.title": "Confidentiality",
      "benefits.card4.text":
        "Can be deployed on your server or in a dedicated environment. Access is segmented by roles and departments.",
      "benefits.card5.title": "Up-to-date documents",
      "benefits.card5.text":
        "Fewer mistakes from outdated document versions and verbal agreements. The document base is updated regularly.",
      "benefits.card6.title": "Faster onboarding",
      "benefits.card6.text":
        "New hires get up to speed faster with answers linked to internal materials.",
      "benefits.card7.title": "24/7 availability",
      "benefits.card7.text":
        "Zakon-AI assistance is available any time, any day, from anywhere in the world.",
      "benefits.card8.title": "Time and cost savings",
      "benefits.card8.text":
        "Reduces load on legal and expert teams — routine document search takes minutes, not hours.",
      "benefits.compare.bad.title": "Standard AI chat",
      "benefits.compare.bad.item1": "Does not know your company's internal documents",
      "benefits.compare.bad.item2": "May answer incorrectly with confidence",
      "benefits.compare.bad.item3": "Hard to verify the source",
      "benefits.compare.bad.item4": "Does not account for your revisions and file versions",
      "benefits.compare.good.title": "Zakon-AI knowledge-base chat",
      "benefits.compare.good.item1": "Searches corporate documents before answering",
      "benefits.compare.good.item2": "Quotes specific passages and sections",
      "benefits.compare.good.item3": "Answers can be verified in one click",
      "benefits.compare.good.item4": "The knowledge base is updated with your current materials",

      "start.label": "Get started",
      "start.title": "Try it yourself",
      "start.subtitle":
        "For personal or pilot access — no long approval process. Upload your materials and ask your first question.",
      "start.step1.title": "Sign up",
      "start.step1.text":
        "Create an account on the platform — a free starter limit to explore the service.",
      "start.step2.title": "Upload documents",
      "start.step2.text":
        "Add PDF, Word, Excel, and other files — the system indexes them for semantic search.",
      "start.step3.title": "First question",
      "start.step3.text":
        "Ask as you would a colleague — get an answer with a quote and link to the document fragment.",
      "start.btn": "Open the app",

      "pricing.label": "Pricing",
      "pricing.title": "Plans for teams and companies",
      "pricing.subtitle":
        "Billing by knowledge base size and number of queries. Enterprise rollout — on your server or in a dedicated environment.",
      "pricing.tier1.name": "Start",
      "pricing.tier1.desc": "For exploration and personal use",
      "pricing.tier1.f1": "Up to 1 GB of documents",
      "pricing.tier1.f2": "Hundreds of queries per month",
      "pricing.tier1.f3": "Answers with source citations",
      "pricing.tier1.btn": "Start for free",
      "pricing.tier2.badge": "Popular",
      "pricing.tier2.name": "Business",
      "pricing.tier2.desc": "For a department or small team",
      "pricing.tier2.f1": "Up to 10 GB of documents",
      "pricing.tier2.f2": "Extended query limit",
      "pricing.tier2.f3": "Multiple users",
      "pricing.tier2.btn": "Get started",
      "pricing.tier3.name": "Pro",
      "pricing.tier3.desc": "For companies and industry knowledge bases",
      "pricing.tier3.f1": "Large knowledge base volume",
      "pricing.tier3.f2": "Roles and access control",
      "pricing.tier3.f3": "Deployment on your server",
      "pricing.tier3.btn": "Discuss rollout",
      "pricing.packages.title": "Ready-made packages",
      "pricing.packages.lead":
        "Your document base plus industry modes — connect them in the Zakon-AI app.",
      "pricing.pkg1.title": "Your documents",
      "pricing.pkg1.text":
        "Your personal or team knowledge base — contracts, policies, instructions, and any files. Ask questions in plain language and get answers with links to passages in your documents.",
      "pricing.pkg1.status": "Available",
      "pricing.pkg2.title": "Energy",
      "pricing.pkg2.text":
        "AI expert on the electricity and capacity market regulatory base. Answers grounded in specific clauses — government resolutions, Ministry of Energy orders, and FAS guidance.",
      "pricing.pkg2.status": "Available",
      "pricing.pkg2.link": "Read case study",
      "pricing.pkg3.title": "Financial analysis",
      "pricing.pkg3.text":
        "AI assistant for reviewing accounting, financial, and tax reports of legal entities. Structured analysis in minutes: ratios, trends, and risks based on uploaded reports.",
      "pricing.pkg3.status": "Coming soon",
      "pricing.pkg4.title": "Presentations",
      "pricing.pkg4.text":
        "AI assistant for building presentations: structure, slides, copy, and speaker notes. From idea to a working deck — for meetings, pitches, reports, or training.",
      "pricing.pkg4.status": "Available",
      "pricing.pkg5.title": "Tender specialist",
      "pricing.pkg5.text":
        "Professional AI assistant for public procurement. Tender review from a link, grounded in 44-FZ, 223-FZ, 135-FZ, 63-FZ, Government Decrees (1005, 1875, 878, etc.), and departmental acts — risks and key facts in minutes.",
      "pricing.pkg5.status": "Available",
      "pricing.pkg6.title": "Deep reasoning",
      "pricing.pkg6.text":
        "Mode for complex questions about your documents. Several models examine the situation from different angles — a balanced summary of agreement, disagreement, and risks.",
      "pricing.pkg6.status": "Available",
      "pricing.pkgLink": "Learn more",
      "pricing.note":
        "Exact limits and pricing are confirmed when you sign up — leave a request below.",

      "use.label": "Applications",
      "use.title": "Where RAG technology is used",
      "use.card1.title": "Legal and compliance teams",
      "use.card1.text":
        "Search contract terms, compare versions, and get fast access to policies and regulations.",
      "use.card2.title": "HR and internal services",
      "use.card2.text":
        "Answers on HR procedures, leave, and benefits — from current internal documents.",
      "use.card3.title": "IT and support",
      "use.card3.text":
        "Knowledge base for incidents, instructions, and configurations — without long ticket searches.",
      "use.card4.title": "Sales and consulting",
      "use.card4.text":
        "Fast access to case studies, presentations, playbooks, and standard client responses.",
      "use.card5.title": "Manufacturing and quality",
      "use.card5.text":
        "Process maps, standards, and safety instructions — in one intelligent search.",
      "use.card6.title": "Regulated industries",
      "use.card6.text":
        "Regulations, industry acts, and regulator letters — with mandatory links to source clauses.",
      "use.card7.title": "Research",
      "use.card7.text":
        "Fast search across publications, reports, experiment protocols, and manuals — with quotes from source documents.",
      "use.card8.title": "Education",
      "use.card8.text":
        "Answers for faculty and students from course materials, regulations, and internal university or training center policies.",

      "case.label": "Deployment",
      "case.title": "Zakon-AI project for the energy industry",
      "case.subtitle":
        "An industry assistant for a consulting company in electrical energy: retail market regulations, answers from documents with source citations. The project is actively being refined.",
      "case.contentTitle": "AI consultant for the power industry",
      "case.contentText":
        "Built on Zakon-AI for energy consulting: answers questions on RF Government Decrees No. 442 and No. 1179, Ministry of Energy orders, and FAS methodological guidelines — with citations and links to clauses. For lawyers, tariff specialists, and retail market experts.",
      "case.list1": "Knowledge base: 450+ documents with current editions",
      "case.list2": "Search: semantic RAG over a vector database",
      "case.list3": "Answer: wording + document + clause",
      "case.list4": "Status: pilot, internal testing",
      "case.button": "Read about the project",
      "case.pilotBadge": "pilot",
      "case.chatTitle": "Zakon-AI · Power",

      "faq.label": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "How is RAG different from regular ChatGPT?",
      "faq.a1":
        "ChatGPT answers based on model training and does not know your internal files. RAG first searches your corporate knowledge base and only then formulates an answer — tied to specific documents.",
      "faq.q2": "Does it replace employees or experts?",
      "faq.a2":
        "No. RAG speeds up search and draft answers. Final decisions, risk assessment, and accountability remain with people.",
      "faq.q3": "What documents can be connected?",
      "faq.a3":
        "PDF, Word, Excel, text files, markdown, wiki and Confluence content — anything from which text can be extracted. You define what goes into the knowledge base.",
      "faq.q4": "Is it safe for corporate data?",
      "faq.a4":
        "Yes, with proper implementation: deployment on your server or in a dedicated environment, access controls, and governance over which documents enter the knowledge base.",
      "faq.q5": "Is it only for large companies?",
      "faq.a5":
        "No. RAG is useful for any organization with many documents and recurring \"where is this written?\" questions. Base size and infrastructure are tailored to the task.",
      "faq.q6": "How are queries and knowledge base size counted?",
      "faq.a6":
        "Pricing depends on uploaded document volume (gigabytes) and the number of questions per month. A free starter limit is available for exploration; for teams and corporate environments, limits and billing are agreed individually.",
      "faq.q7": "How do I start — personal account or team rollout?",
      "faq.a7":
        "You can sign up and upload your own documents. For multiple departments, roles, and deployment on your server — leave a request in the form below: we will discuss a pilot and rollout for your company.",

      "contact.label": "Contact",
      "contact.title": "Discuss Zakon-AI",
      "contact.subtitle":
        "We will explain how Zakon-AI works on your knowledge base, show the pilot case, and discuss a pilot for your company.",
      "contact.perk1": "Architecture and deployment consultation",
      "contact.perk2": "Response within 1–2 business days",
      "contact.perk3": "Demo by invitation",
      "contact.perk4": "Pilot tailored to your company's needs",
      "contact.nameLabel": "Name *",
      "contact.namePlaceholder": "How should we address you",
      "contact.emailLabel": "Email *",
      "contact.emailPlaceholder": "name@company.com",
      "contact.phoneLabel": "Phone *",
      "contact.phonePlaceholder": "+1 900 000-0000",
      "contact.roleLabel": "Role",
      "contact.roleEmpty": "Select",
      "contact.roleManagement": "Executive / owner",
      "contact.roleIt": "IT / digital transformation",
      "contact.roleLegal": "Legal / compliance",
      "contact.roleHr": "HR / internal services",
      "contact.roleOperations": "Operations",
      "contact.roleConsulting": "Consulting / integrator",
      "contact.roleOther": "Other",
      "contact.messageLabel": "Comment",
      "contact.messagePlaceholder": "What knowledge base, what tasks?",
      "contact.consent":
        "I agree to the processing of personal data<br>for follow-up communication",
      "contact.submit": "Submit request",
      "contact.formNote":
        "By clicking the button, you agree to data processing for follow-up on your request.",

      "footer.tagline":
        "AI consultant powered by RAG technology<br>for corporate knowledge bases and documents.",
      "footer.copyright": "© 2026 Zakon-AI. All rights reserved.",

      "energy.meta.title": "AI Consultant for an Energy Retail Company — Zakon-AI Case Study",
      "energy.meta.description":
        "A real Zakon-AI pilot: a RAG assistant for retail electricity market regulations at an energy retail company — RF Government Decrees No. 442 and No. 1179, Ministry of Energy orders, and FAS methodological guidelines.",
      "energy.back": "← Back to home",
      "energy.tag1": "Pilot",
      "energy.tag2": "Energy retail",
      "energy.tag3": "Retail market",
      "energy.hero.title": "AI regulatory consultant for an energy retail company",
      "energy.hero.lead":
        "A real project built on Zakon-AI: the system answers questions on RF Government Decrees No. 442 and No. 1179, Ministry of Energy orders, FAS methodological guidelines, and internal regulations — with a quote and a link to the source clause. The pilot is currently being tested by colleagues and refined based on their feedback.",
      "energy.metric1.value": "450+",
      "energy.metric1.label": "documents in the knowledge base",
      "energy.metric2.value": "hours → ~1.5 min",
      "energy.metric2.label": "regulation lookup per query",
      "energy.metric3.value": "Source clause",
      "energy.metric3.label": "in every answer",
      "energy.metric4.value": "Closed perimeter",
      "energy.metric4.label": "on the client's server",
      "energy.tab.users": "For users",
      "energy.tab.developers": "For developers",
      "energy.tabsAria": "Case study sections",
      "energy.users.what.title": "What it is and why it matters",
      "energy.users.what.p1":
        "This is not an \"internet chat\" — it is an assistant for <strong>your</strong> regulatory knowledge base. An employee asks a question in plain language — as in a message to a colleague — and gets an answer with the document and clause cited. The system does not invent regulations: it searches uploaded acts and formulates answers only from the text it finds.",
      "energy.users.what.p2":
        "The pilot was built for an energy retail company: legal, tariff economics, contracts, and retail sales teams. Colleagues are now testing the system in real workflows while we refine wording and expand knowledge base coverage.",
      "energy.users.how.title": "How it works — in plain terms",
      "energy.users.how.step1":
        "<strong>You ask a question.</strong> For example: \"Are supply points without meters included when calculating network losses using the analog method?\"",
      "energy.users.how.step2":
        "<strong>The system searches by meaning.</strong> It understands phrasing, not just exact keywords — and finds relevant passages in RF Government Decree No. 442, Ministry of Energy orders, FAS guidelines, and other documents in the knowledge base.",
      "energy.users.how.step3":
        "<strong>You get an answer with a citation.</strong> A brief conclusion + document + clause. You can open the source excerpt and verify the quote.",
      "energy.users.how.step4":
        "<strong>An expert makes the decision.</strong> The system speeds up search and draft positions; the final answer and accountability remain with the company's specialist.",
      "energy.users.benefits.title": "Benefits for day-to-day work",
      "energy.users.benefits.item1":
        "<strong>Time savings.</strong> Complex regulatory queries that took 1–3 hours in Consultant Plus and PDFs are reduced to minutes for a draft with citations.",
      "energy.users.benefits.item2":
        "<strong>Lower risk of missing a clause.</strong> One question often spans several acts — the system pulls related passages into a single answer.",
      "energy.users.benefits.item3":
        "<strong>Verifiable sources.</strong> Every conclusion can be opened in the document — critical for audits and correspondence with regulators.",
      "energy.users.benefits.item4":
        "<strong>Not like ChatGPT.</strong> Public chats do not know current industry regulations and can answer confidently but incorrectly. Here, answers are built only from your knowledge base.",
      "energy.users.benefits.item5":
        "<strong>24/7 access.</strong> Adjacent departments no longer wait for \"a call to legal\" — there is a single entry point with sources.",
      "energy.users.benefits.item6":
        "<strong>Role-based access.</strong> Internal documents are visible only to the departments they are intended for.",
      "energy.users.who.title": "Who benefits in the company",
      "energy.users.who.legal.title": "Legal department",
      "energy.users.who.legal.text":
        "Interpretation of retail market regulations, position papers, and reconciliation of act editions.",
      "energy.users.who.tariff.title": "Tariff economists",
      "energy.users.who.tariff.text":
        "Network losses, sales markup, cap levels for unregulated prices, FAS methodologies.",
      "energy.users.who.contracts.title": "Contracts team",
      "energy.users.who.contracts.text":
        "Energy supply contracts, consumer switching, consumption restriction, document packages.",
      "energy.users.who.retail.title": "Retail sales",
      "energy.users.who.retail.text":
        "Typical questions on RF Government Decree No. 442 and internal regulations without queuing for an expert.",
      "energy.users.examples.title": "Sample questions",
      "energy.users.examples.q1":
        "Are supply points without meters included when calculating network losses using the analog method?",
      "energy.users.examples.q2":
        "What is the deadline for an energy retail company to publish cap levels for unregulated prices?",
      "energy.users.examples.q3":
        "What are the grounds for restricting consumption mode under RF Government Decree No. 442?",
      "energy.users.examples.q4": "Can clause 65(5) be applied when determining unregulated prices?",
      "energy.users.examples.q5":
        "What documents are required to conclude an energy supply contract with a consumer?",
      "energy.users.examples.answer":
        "<strong>Sample answer from the pilot:</strong> \"Yes, with an active energy supply contract such points are included in the quantity for network loss calculation. Basis: clause 65(2) of Order No. 1178, clause 13 of Guideline 1554/17, clauses 32 and 42 of RF Government Decree No. 442.\"",
      "energy.users.results.title": "What changed in the pilot",
      "energy.users.results.th.metric": "Metric",
      "energy.users.results.th.before": "Before",
      "energy.users.results.th.after": "After",
      "energy.users.results.row1.metric": "Regulation lookup per query",
      "energy.users.results.row1.before": "1–3 hours (Consultant Plus, PDF, coordination with a colleague)",
      "energy.users.results.row1.after": "~1.5 minutes for a draft with citations",
      "energy.users.results.row2.metric": "Cross-checking multiple acts",
      "energy.users.results.row2.before": "Manual search in each document",
      "energy.users.results.row2.after": "One query — related clauses in a single answer",
      "energy.users.results.row3.metric": "Access for adjacent departments",
      "energy.users.results.row3.before": "Via \"a call to legal\"",
      "energy.users.results.row3.after": "A single chat with sources",
      "energy.dev.architecture.title": "Architecture",
      "energy.dev.architecture.lead":
        "A classic RAG pipeline without off-the-shelf frameworks like LangChain — a custom Python pipeline. Documents are stored and indexed locally; answer generation runs through a language model API with strict grounding in retrieved passages.",
      "energy.dev.arch.step1": "Markdown documents<br><span>regulations + internal policies</span>",
      "energy.dev.arch.step2": "Chunks + embeddings<br><span>~3000 chars, overlap 400</span>",
      "energy.dev.arch.step3": "FAISS<br><span>vector search</span>",
      "energy.dev.arch.step4": "LLM<br><span>context-grounded answer</span>",
      "energy.dev.stack.title": "Stack and components",
      "energy.dev.stack.ui.title": "Interface",
      "energy.dev.stack.ui.text":
        "Streamlit — web chat, regulation list, export of answers to Word and Excel.",
      "energy.dev.stack.lang.title": "Language and RAG",
      "energy.dev.stack.lang.text":
        "Python, custom modules: data loading, chunking, index building, search, and prompt assembly.",
      "energy.dev.stack.embeddings.title": "Embeddings",
      "energy.dev.stack.embeddings.text":
        "<code>sentence-transformers/paraphrase-multilingual-mpnet-base-v2</code> — a multilingual model for Russian legal texts.",
      "energy.dev.stack.vector.title": "Vector store",
      "energy.dev.stack.vector.text":
        "FAISS (<code>IndexFlatL2</code>), the index is built offline and loaded at application startup.",
      "energy.dev.stack.llm.title": "Language model",
      "energy.dev.stack.llm.text":
        "DeepSeek via OpenRouter (e.g. <code>deepseek/deepseek-v4-flash</code>) or direct API — depending on the deployment environment.",
      "energy.dev.stack.data.title": "Data and audit",
      "energy.dev.stack.data.text":
        "SQLite: users, dialog history, document references. Role-based access control (including admin).",
      "energy.dev.stack.docs.title": "Documents",
      "energy.dev.stack.docs.text":
        "Source files are converted to Markdown; the knowledge base contains 450+ acts and methodological materials on the retail market.",
      "energy.dev.stack.deploy.title": "Deployment",
      "energy.dev.stack.deploy.text":
        "Closed perimeter on the client's server. Data and the index never leave the organization's boundary.",
      "energy.dev.pipeline.title": "Data pipeline",
      "energy.dev.pipeline.step1":
        "<strong>Conversion.</strong> Regulatory documents are normalized to a unified Markdown format.",
      "energy.dev.pipeline.step2":
        "<strong>Chunking.</strong> Text is split into ~3000-character fragments with 400-character overlap to preserve context at clause boundaries.",
      "energy.dev.pipeline.step3":
        "<strong>Indexing.</strong> A vector is computed for each chunk; a FAISS index is built and saved to disk.",
      "energy.dev.pipeline.step4":
        "<strong>Query.</strong> The user's question is embedded; top-k relevant fragments are selected from the index.",
      "energy.dev.pipeline.step5":
        "<strong>Generation.</strong> The LLM receives only retrieved context and instructions to answer with clause citations; the response is logged in SQLite.",
      "energy.dev.pipeline.step6":
        "<strong>Update.</strong> When a new document edition is uploaded, the index is rebuilt for an up-to-date knowledge base.",
      "energy.dev.features.title": "Implementation highlights",
      "energy.dev.features.item1":
        "No LangChain / LlamaIndex — full control over chunking, prompts, and answer format.",
      "energy.dev.features.item2":
        "Answers are always tied to retrieved context; the model does not rely on pretraining \"memory\".",
      "energy.dev.features.item3":
        "A dedicated regulation list screen: number, title, edition dates.",
      "energy.dev.features.item4":
        "Dialog export to Word (text) and Excel (table) for internal memos.",
      "energy.dev.features.item5":
        "Pilot in active refinement: knowledge base expansion, prompt tuning, feedback from test users.",
      "energy.cta.title": "Want a similar solution for your energy retail company?",
      "energy.cta.text":
        "We will discuss the regulatory knowledge base and show a demo on typical retail market questions — by invitation.",
      "energy.cta.button": "Contact us",

      "form.error.required": "Please fill in name, email, phone, and consent to data processing.",
      "form.error.email": "Please check that the email is correct.",
      "form.error.phone": "Please check that the phone number is correct.",
      "form.error.notConfigured":
        "The form is not connected yet. Set the Formspree endpoint in js/main.js (see README).",
      "form.error.sending": "Sending request…",
      "form.error.success": "Thank you! Your request has been sent. We will contact you shortly.",
      "form.error.fail":
        "Could not send the request. Please try again later.",

      chatDemos: [
        {
          docs: ["HR_Policy.pdf", "Contract_Template.docx", "IT Knowledge Base"],
          question:
            "Can I request 3 days of remote work without approval from my department manager?",
          answer:
            "No. Per policy, remote work must be approved by your direct manager at least 1 business day in advance.",
          source:
            "Source: \"Remote Work Policy\", clause 4.2. → open document excerpt",
        },
        {
          docs: ["Supply_Contract.pdf", "Contract_Register.xlsx", "Standard_Terms.docx"],
          question:
            "Does the supplier contract allow termination if delivery is delayed by more than 10 days?",
          answer:
            "Yes. Section 8.3 provides for unilateral termination if delivery deadlines are missed by more than 10 business days, with written notice 5 days in advance.",
          source:
            "Source: Supply Contract No. 127/2025, clauses 8.3, 8.4. → open document excerpt",
        },
        {
          docs: ["Tax_Code_Excerpts.pdf", "Accounting_Policy.docx", "VAT_Memo.pdf"],
          question:
            "Can VAT be deducted from an advance invoice if payment has not been posted yet?",
          answer:
            "No. Per company accounting policy, advance invoice VAT deduction is recorded only after actual payment to the supplier and posting in the accounting system.",
          source:
            "Source: Accounting Policy 2026, section 4; Tax Code Art. 171, clause 2. → open document excerpt",
        },
      ],

      caseChatDemos: [
        {
          docs: ["RF Gov. Decree No. 442", "Order No. 1178", "Guideline 1554/17"],
          question:
            "Are supply points without meters included when calculating network losses using the analog method?",
          answer:
            "Yes, with an active energy supply contract such points are included in the quantity for network loss calculation. Basis: clause 65(2) of Order No. 1178, clause 13 of Guideline 1554/17, clauses 32 and 42 of RF Government Decree No. 442.",
          source: "→ open document excerpt",
        },
      ],
    },

    zh: {
      "meta.title": "Zakon-AI — 面向法规、标准与企业文档的智能 AI 搜索",
      "meta.description":
        "Zakon-AI — 面向企业的 RAG 技术：AI 基于您的文档与法规知识库作答，并提供引用与来源条款链接。zakon-ai.ru",

      "ui.langGroup": "界面语言",
      "ui.themeGroup": "主题",
      "ui.themeDark": "深色",
      "ui.themeLight": "浅色",
      "ui.menu": "菜单",

      "header.tagline": "面向企业文档工作的<br>AI 助手",

      "nav.rag": "什么是 RAG",
      "nav.how": "工作原理",
      "nav.benefits": "商业价值",
      "nav.case": "案例",
      "nav.faq": "常见问题",
      "nav.contact": "联系我们",

      "hero.eyebrow": "面向企业文档工作的 AI 助手",
      "hero.title": "面向知识库与企业文档的智能 AI 搜索",
      "hero.lead1": "Zakon-AI 是将人工智能用于企业文档工作的现代技术方案。",
      "hero.lead2":
        "其核心是 RAG（检索增强生成）架构，将语言模型与企业资料连接：制度、合同、操作说明与内部规章。员工提问 — Zakon-AI 找到相关片段并生成带来源链接的回答。",
      "hero.stat1.label": "搜索时间节省",
      "hero.stat2.label": "来源透明",
      "hero.stat3.label": "知识库访问",
      "hero.stat4.label": "文件集中管理",
      "hero.btnRag": "了解 RAG",
      "hero.btnHow": "工作原理",

      "chat.title": "Zakon-AI Chat",
      "chat.online": "● 在线",
      "chat.demoDotsAria": "查询示例",
      "chat.demo1Aria": "示例 1",
      "chat.demo2Aria": "示例 2",
      "chat.demo3Aria": "示例 3",

      "rag.label": "技术",
      "rag.title": "什么是 RAG，为何需要它",
      "rag.subtitle1":
        "普通 AI 聊天不了解贵组织内部文档，可能回答不准确或有误。RAG 解决这一问题：在生成回答前，系统会按问题语义在企业知识库中检索相关信息，再基于检索结果生成答案。",
      "rag.subtitle2": "这就是智能 AI 搜索。",
      "rag.node1.title": "1. 知识库",
      "rag.node1.text": "企业文档：PDF、Word、Excel、演示文稿、图片与扫描件。",
      "rag.node2.title": "2. 检索（Retrieval）",
      "rag.node2.text": "语义搜索按问题含义找到相关片段",
      "rag.node3.title": "3. 生成（Generation）",
      "rag.node3.text": "AI 模型仅基于检索到的上下文组织回答",
      "rag.card1.title": "理解语义，而非仅匹配关键词",
      "rag.card1.text": "可用自然语言提问 — 即使表述不同，系统也能找到对应章节。",
      "rag.card2.title": "您的文档，您的规则",
      "rag.card2.text": "回答基于已上传的企业知识库 — 由您决定系统中包含哪些资料。",
      "rag.card3.title": "可验证的结果",
      "rag.card3.text": "每个结论都可核对：引用、文档、章节。最终决策仍由人做出。",

      "how.label": "流程",
      "how.title": "实际如何运作",
      "how.subtitle":
        "无论法务、HR、IT 还是生产部门 — 流程一致：企业文档通过智能聊天搜索即可访问。",
      "how.step1.title": "构建知识库",
      "how.step1.text":
        "上传文档：制度、合同、说明、FAQ 与行业资料。系统分析并建立索引。",
      "how.step2.title": "提出问题",
      "how.step2.text":
        "用自然语言 — 如同询问同事：「在哪里写明…」「如何办理…」「有何区别…」。",
      "how.step3.title": "系统检索",
      "how.step3.text":
        "RAG 在数千页知识库中找到最相关片段，并准备结构化回答。",
      "how.step4.title": "获得回答",
      "how.step4.text": "包含表述、引用与来源文档。系统平均约 1.5 分钟给出回答。",
      "how.step5.title": "人工核验",
      "how.step5.text": "打开来源并做出决策 — 员工对结果保持完全控制。",

      "benefits.label": "价值",
      "benefits.title": "企业将获得什么",
      "benefits.subtitle":
        "当知识分散在文件夹、邮件与员工经验中时，查找信息会拖慢工作。RAG 将企业知识库变为 24/7 助手。",
      "benefits.card1.title": "提升效率",
      "benefits.card1.text":
        " 以前：「在合同中找出所有违约金条款及可能责任」— 需 2–3 小时。<br><strong>现在：</strong>约 1.5 分钟给出回答并引用合同条款。",
      "benefits.card2.title": "回答更准确",
      "benefits.card2.text": "回答基于您的文档，而非与贵司无关的模型「通用记忆」。",
      "benefits.card3.title": "可扩展",
      "benefits.card3.text": "无论文档库多大 — 系统可处理全部资料并发现文档间关联。",
      "benefits.card4.title": "保密性",
      "benefits.card4.text": "系统部署在您的服务器上。按角色与部门进行访问控制。",
      "benefits.card5.title": "减少错误",
      "benefits.card5.text": "减少因文档版本过时与口头约定导致的错误。文档库定期更新。",
      "benefits.card6.title": "加快入职",
      "benefits.card6.text": "新员工通过带来源链接的回答更快熟悉业务。",
      "benefits.card7.title": "全天候可用",
      "benefits.card7.text": "Zakon-AI 随时、随地、任意时间可用。",
      "benefits.card8.title": "节省时间与成本",
      "benefits.card8.text": "减轻法务与专家负担 — 常规文档检索以分钟计，而非小时。",
      "benefits.compare.bad.title": "普通 AI 聊天",
      "benefits.compare.bad.item1": "不了解贵司内部文档",
      "benefits.compare.bad.item2": "可能自信地给出错误回答",
      "benefits.compare.bad.item3": "难以核实来源",
      "benefits.compare.bad.item4": "不考虑您的修订版与文件版本",
      "benefits.compare.good.title": "Zakon-AI 知识库聊天",
      "benefits.compare.good.item1": "回答前先检索企业文档",
      "benefits.compare.good.item2": "引用具体片段与章节",
      "benefits.compare.good.item3": "一键核实回答",
      "benefits.compare.good.item4": "知识库随您的最新资料更新",

      "use.label": "应用场景",
      "use.title": "RAG 技术的应用方向",
      "use.card1.title": "法务与合规部门",
      "use.card1.text": "检索合同条款、比对版本、快速访问制度与政策。",
      "use.card2.title": "HR 与内部服务",
      "use.card2.text": "人事流程、休假、福利等问题 — 基于最新内部文档作答。",
      "use.card3.title": "IT 与技术支持",
      "use.card3.text": "事件、说明、配置知识库 — 无需长时间翻找工单。",
      "use.card4.title": "销售与咨询",
      "use.card4.text": "快速访问案例、演示、手册与客户标准答复。",
      "use.card5.title": "生产与质量",
      "use.card5.text": "工艺卡、标准、安全说明 — 统一智能搜索。",
      "use.card6.title": "受监管行业",
      "use.card6.text": "法规、行业文件、监管函件 — 必须附来源条款链接。",
      "use.card7.title": "科研活动",
      "use.card7.text": "快速检索论文、报告、实验记录与方法手册 — 附原文引用。",
      "use.card8.title": "教育",
      "use.card8.text": "为教师与学生提供教材、规章与院校/培训中心内部制度相关回答。",

      "case.label": "落地",
      "case.title": "Zakon-AI 试点项目",
      "case.subtitle":
        "能源销售企业真实案例：零售市场法规库、语义搜索与带来源引用的回答。目前正由同事测试并持续完善。",
      "case.contentTitle": "电力行业 AI 顾问",
      "case.contentText":
        "基于 Zakon-AI 部署的行业助手，可依据俄罗斯联邦政府令第 442、1179 号、能源部命令及联邦反垄断局方法指南作答 — 附引用与条款链接。面向法务、电价专员、合同团队与零售销售。",
      "case.list1": "知识库：450+ 份现行有效文档",
      "case.list2": "检索：面向向量库的语义 RAG",
      "case.list3": "回答：表述 + 文档 + 条款",
      "case.list4": "状态：试点，内部测试中",
      "case.button": "了解项目详情",
      "case.pilotBadge": "试点",
      "case.chatTitle": "Zakon-AI · 电力",

      "faq.label": "FAQ",
      "faq.title": "常见问题",
      "faq.q1": "RAG 与普通 ChatGPT 有何不同？",
      "faq.a1":
        "ChatGPT 基于模型训练作答，不了解您的内部文件。RAG 先检索企业知识库，再生成与具体文档绑定的回答。",
      "faq.q2": "会取代员工或专家吗？",
      "faq.a2": "不会。RAG 加快检索与草稿准备。最终决策、风险评估与责任仍由人承担。",
      "faq.q3": "可接入哪些文档？",
      "faq.a3":
        "PDF、Word、Excel、文本、Markdown、Wiki 与 Confluence 内容 — 凡可提取文本的资料均可。知识库范围由您定义。",
      "faq.q4": "对企业数据是否安全？",
      "faq.a4":
        "在正确实施前提下是安全的：部署在您的服务器或专用环境，进行访问控制，并管理哪些文档进入知识库。",
      "faq.q5": "是否只适合大企业？",
      "faq.a5":
        "不是。任何文档多、常问「写在哪里」的组织都适用。知识库规模与基础设施按任务定制。",

      "contact.label": "联系",
      "contact.title": "洽谈 Zakon-AI",
      "contact.subtitle":
        "我们将介绍 Zakon-AI 如何在您的知识库上运行，展示试点案例，并讨论在贵公司的试点方案。",
      "contact.perk1": "架构与实施咨询",
      "contact.perk2": "1–2 个工作日内回复",
      "contact.perk3": "预约演示",
      "contact.perk4": "按贵公司需求定制试点",
      "contact.nameLabel": "姓名 *",
      "contact.namePlaceholder": "如何称呼您",
      "contact.emailLabel": "邮箱 *",
      "contact.emailPlaceholder": "name@company.com",
      "contact.phoneLabel": "电话 *",
      "contact.phonePlaceholder": "+86 138 0000 0000",
      "contact.roleLabel": "角色",
      "contact.roleEmpty": "请选择",
      "contact.roleManagement": "管理层 / 所有者",
      "contact.roleIt": "IT / 数字化",
      "contact.roleLegal": "法务 / 合规",
      "contact.roleHr": "HR / 内部服务",
      "contact.roleOperations": "运营部门",
      "contact.roleConsulting": "咨询 / 集成商",
      "contact.roleOther": "其他",
      "contact.messageLabel": "备注",
      "contact.messagePlaceholder": "知识库规模与需求？",
      "contact.consent": "同意为后续沟通<br>处理个人数据",
      "contact.submit": "提交申请",
      "contact.formNote": "点击按钮即表示同意为处理申请而使用您的数据。",

      "footer.tagline": "基于 RAG 技术的企业知识库<br>与文档 AI 顾问。",
      "footer.copyright": "© 2026 Zakon-AI. 保留所有权利。",

      "energy.meta.title": "能源销售企业 AI 顾问 — Zakon-AI 案例",
      "energy.meta.description":
        "Zakon-AI 真实试点：面向能源销售企业零售市场法规的 RAG 助手 — 俄联邦政府令第 442、1179 号，能源部命令，联邦反垄断局方法指南。",
      "energy.back": "← 返回首页",
      "energy.tag1": "试点",
      "energy.tag2": "能源销售",
      "energy.tag3": "零售市场",
      "energy.hero.title": "面向能源销售企业的法规 AI 顾问",
      "energy.hero.lead":
        "基于 Zakon-AI 的真实项目：系统依据俄联邦政府令第 442、1179 号、能源部命令、联邦反垄断局方法指南及内部规章作答 — 附引用与来源条款链接。试点目前正由同事测试，并根据反馈持续完善。",
      "energy.metric1.value": "450+",
      "energy.metric1.label": "知识库文档数",
      "energy.metric2.value": "数小时 → ~1.5 分钟",
      "energy.metric2.label": "按查询检索法规",
      "energy.metric3.value": "来源条款",
      "energy.metric3.label": "每条回答均有",
      "energy.metric4.value": "封闭环境",
      "energy.metric4.label": "部署在客户服务器",
      "energy.tab.users": "面向用户",
      "energy.tab.developers": "面向开发者",
      "energy.tabsAria": "案例章节",
      "energy.users.what.title": "是什么，有何用",
      "energy.users.what.p1":
        "这不是「联网聊天」，而是面向<strong>贵司</strong>法规知识库的助手。员工用日常语言提问 — 如同给同事发消息 — 即可获得附文档与条款的回答。系统不会凭空编造法规：它在已上传的法规文件中检索，并仅基于找到的文本组织回答。",
      "energy.users.what.p2":
        "试点面向能源销售企业：法务、电价经济、合同团队与零售销售。同事正在实际工作场景中测试，我们持续优化表述并扩展知识库覆盖。",
      "energy.users.how.title": "工作原理 — 通俗说明",
      "energy.users.how.step1":
        "<strong>您提出问题。</strong>例如：「按类比法计算网损时，无计量表的供电点是否计入？」",
      "energy.users.how.step2":
        "<strong>系统按语义检索。</strong>它理解表述方式，而非仅匹配关键词 — 并在俄联邦政府令第 442 号、能源部命令、联邦反垄断局方法指南及知识库其他文档中找到相关片段。",
      "energy.users.how.step3":
        "<strong>您获得带引用的回答。</strong>简要结论 + 文档 + 条款。可打开来源片段核对引用。",
      "energy.users.how.step4":
        "<strong>专家做出决策。</strong>系统加快检索与立场草稿准备；最终答复与责任仍由公司专员承担。",
      "energy.users.benefits.title": "对工作的益处",
      "energy.users.benefits.item1":
        "<strong>节省时间。</strong>在 Consultant Plus 与 PDF 中需 1–3 小时的复杂法规查询，缩短为几分钟即可得到带引用的草稿。",
      "energy.users.benefits.item2":
        "<strong>降低遗漏条款风险。</strong>一个问题常涉及多部法规 — 系统在一次回答中汇总相关片段。",
      "energy.users.benefits.item3":
        "<strong>可核实来源。</strong>每个结论都可在文档中打开 — 对迎检及与监管机构的往来尤为重要。",
      "energy.users.benefits.item4":
        "<strong>不同于 ChatGPT。</strong>公开聊天不了解最新行业法规，可能自信地答错。此处回答仅基于您的知识库。",
      "energy.users.benefits.item5":
        "<strong>全天候访问。</strong>相关部门无需等待「给法务打电话」— 有统一入口与来源。",
      "energy.users.benefits.item6":
        "<strong>按角色授权。</strong>内部文档仅对指定部门可见。",
      "energy.users.who.title": "公司内适用对象",
      "energy.users.who.legal.title": "法务部门",
      "energy.users.who.legal.text": "零售市场法规解读、立场准备、法规版本核对。",
      "energy.users.who.tariff.title": "电价经济专员",
      "energy.users.who.tariff.text": "网损、销售加价、非管制价格上限、联邦反垄断局方法。",
      "energy.users.who.contracts.title": "合同团队",
      "energy.users.who.contracts.text": "供能合同、用户切换、用电限制、文件套装。",
      "energy.users.who.retail.title": "零售销售",
      "energy.users.who.retail.text": "俄联邦政府令第 442 号及内部规章的常见问题，无需排队等专家。",
      "energy.users.examples.title": "问题示例",
      "energy.users.examples.q1": "按类比法计算网损时，无计量表的供电点是否计入？",
      "energy.users.examples.q2": "能源销售企业须在何时限内公布非管制价格上限？",
      "energy.users.examples.q3": "依据俄联邦政府令第 442 号，限制用电模式的理由有哪些？",
      "energy.users.examples.q4": "确定非管制价格时能否适用第 65(5) 条？",
      "energy.users.examples.q5": "与消费者签订供能合同需要哪些文件？",
      "energy.users.examples.answer":
        "<strong>试点回答示例：</strong>「可以。在有效供能合同下，此类供电点纳入网损计算数量。依据：第 1178 号命令第 65(2) 条、方法指南 1554/17 第 13 条、俄联邦政府令第 442 号第 32、42 条。」",
      "energy.users.results.title": "试点带来的变化",
      "energy.users.results.th.metric": "指标",
      "energy.users.results.th.before": "以前",
      "energy.users.results.th.after": "现在",
      "energy.users.results.row1.metric": "按查询检索法规",
      "energy.users.results.row1.before": "1–3 小时（Consultant Plus、PDF、与同事协调）",
      "energy.users.results.row1.after": "约 1.5 分钟得到带引用的草稿",
      "energy.users.results.row2.metric": "多部法规交叉核对",
      "energy.users.results.row2.before": "逐份文档手工检索",
      "energy.users.results.row2.after": "一次查询 — 相关条款汇总于同一回答",
      "energy.users.results.row3.metric": "相关部门访问",
      "energy.users.results.row3.before": "通过「给法务打电话」",
      "energy.users.results.row3.after": "带来源的统一聊天入口",
      "energy.dev.architecture.title": "架构",
      "energy.dev.architecture.lead":
        "经典 RAG 流水线，未使用 LangChain 等现成框架 — 自研 Python 流水线。文档在本地存储与索引；回答生成通过语言模型 API，并严格绑定检索到的片段。",
      "energy.dev.arch.step1": "Markdown 文档<br><span>法规 + 内部规章</span>",
      "energy.dev.arch.step2": "分块 + 嵌入<br><span>约 3000 字符，重叠 400</span>",
      "energy.dev.arch.step3": "FAISS<br><span>向量检索</span>",
      "energy.dev.arch.step4": "LLM<br><span>基于上下文的回答</span>",
      "energy.dev.stack.title": "技术栈与组件",
      "energy.dev.stack.ui.title": "界面",
      "energy.dev.stack.ui.text": "Streamlit — 网页聊天、法规列表、回答导出为 Word 与 Excel。",
      "energy.dev.stack.lang.title": "语言与 RAG",
      "energy.dev.stack.lang.text": "Python，自研模块：数据加载、分块、索引构建、检索与提示组装。",
      "energy.dev.stack.embeddings.title": "嵌入模型",
      "energy.dev.stack.embeddings.text":
        "<code>sentence-transformers/paraphrase-multilingual-mpnet-base-v2</code> — 面向俄文法律文本的多语言模型。",
      "energy.dev.stack.vector.title": "向量存储",
      "energy.dev.stack.vector.text":
        "FAISS（<code>IndexFlatL2</code>），索引离线构建，应用启动时加载。",
      "energy.dev.stack.llm.title": "语言模型",
      "energy.dev.stack.llm.text":
        "通过 OpenRouter 调用 DeepSeek（如 <code>deepseek/deepseek-v4-flash</code>）或直接 API — 视部署环境而定。",
      "energy.dev.stack.data.title": "数据与审计",
      "energy.dev.stack.data.text": "SQLite：用户、对话历史、文档引用。基于角色的访问控制（含管理员）。",
      "energy.dev.stack.docs.title": "文档",
      "energy.dev.stack.docs.text": "源文件转换为 Markdown；知识库含 450+ 份零售市场法规与方法材料。",
      "energy.dev.stack.deploy.title": "部署",
      "energy.dev.stack.deploy.text": "封闭环境，部署在客户服务器。数据与索引不离开组织边界。",
      "energy.dev.pipeline.title": "数据流水线",
      "energy.dev.pipeline.step1": "<strong>转换。</strong>法规文档统一为 Markdown 格式。",
      "energy.dev.pipeline.step2":
        "<strong>分块。</strong>文本切分为约 3000 字符的片段，重叠 400 字符，以免在条款边界丢失上下文。",
      "energy.dev.pipeline.step3":
        "<strong>索引。</strong>为每个分块计算向量；构建 FAISS 索引并保存到磁盘。",
      "energy.dev.pipeline.step4":
        "<strong>查询。</strong>用户问题嵌入后，从索引中选取 top-k 相关片段。",
      "energy.dev.pipeline.step5":
        "<strong>生成。</strong>LLM 仅接收检索到的上下文及附条款引用的作答指令；回答记录于 SQLite。",
      "energy.dev.pipeline.step6": "<strong>更新。</strong>上传新版文档后重建索引，保持知识库最新。",
      "energy.dev.features.title": "实现特点",
      "energy.dev.features.item1": "未使用 LangChain / LlamaIndex — 对分块、提示与回答格式拥有完全控制。",
      "energy.dev.features.item2": "回答始终绑定检索上下文；模型不依赖预训练「记忆」。",
      "energy.dev.features.item3": "独立法规列表界面：编号、名称、修订日期。",
      "energy.dev.features.item4": "对话导出为 Word（文本）与 Excel（表格），便于内部备忘。",
      "energy.dev.features.item5": "试点持续完善中：扩展知识库、优化提示、收集测试用户反馈。",
      "energy.cta.title": "想为贵司能源销售企业部署类似方案？",
      "energy.cta.text": "我们将讨论法规知识库构成，并预约演示零售市场典型问题 — 需受邀参加。",
      "energy.cta.button": "联系我们",

      "form.error.required": "请填写姓名、邮箱、电话并同意数据处理。",
      "form.error.email": "请检查邮箱格式是否正确。",
      "form.error.phone": "请检查电话号码是否正确。",
      "form.error.notConfigured": "表单尚未配置。请在 js/main.js 中设置 Formspree 端点（见 README）。",
      "form.error.sending": "正在提交申请…",
      "form.error.success": "谢谢！申请已发送。我们将尽快与您联系。",
      "form.error.fail": "提交失败。请稍后重试。",

      chatDemos: [
        {
          docs: ["人事制度.pdf", "合同模板.docx", "IT 知识库"],
          question: "能否在不征得部门经理同意的情况下申请远程办公 3 天？",
          answer: "不能。按规定，远程办公须至少提前 1 个工作日经直属经理批准。",
          source: "来源：《远程办公规定》第 4.2 条。→ 打开文档片段",
        },
        {
          docs: ["供货合同.pdf", "合同台账.xlsx", "标准条款.docx"],
          question: "供货合同是否允许在交货延迟超过 10 天时解除？",
          answer:
            "可以。第 8.3 条规定，交货期延误超过 10 个工作日可单方解除，并须提前 5 日书面通知。",
          source: "来源：供货合同第 127/2025 号，第 8.3、8.4 条。→ 打开文档片段",
        },
        {
          docs: ["税法摘录.pdf", "会计政策.docx", "增值税备忘.pdf"],
          question: "若付款尚未入账，能否对预付款发票抵扣增值税？",
          answer: "不能。按公司会计政策，预付款发票增值税抵扣须在向供应商实际付款并在系统中入账后进行。",
          source: "来源：2026 年会计政策第 4 节；税法第 171 条第 2 款。→ 打开文档片段",
        },
      ],

      caseChatDemos: [
        {
          docs: ["俄联邦政府令第 442 号", "命令第 1178 号", "方法指南 1554/17"],
          question: "按类比法计算网损时，无计量表的供电点是否计入？",
          answer:
            "计入。在有效供能合同下，此类供电点纳入网损计算数量。依据：第 1178 号命令第 65(2) 条、方法指南 1554/17 第 13 条、俄联邦政府令第 442 号第 32、42 条。",
          source: "→ 打开文档片段",
        },
      ],
    },
  };

  function resolveLang(lang) {
    return LANGUAGES.includes(lang) ? lang : DEFAULT_LANG;
  }

  function getLang() {
    return resolveLang(localStorage.getItem(STORAGE_KEY));
  }

  function setHtmlLang(lang) {
    document.documentElement.setAttribute("lang", lang);
  }

  function t(key, lang) {
    const l = resolveLang(lang || getLang());
    const pack = I18N[l] || I18N[DEFAULT_LANG];
    const fallback = I18N[DEFAULT_LANG];
    const value = pack[key];
    if (value !== undefined && typeof value === "string") {
      return value;
    }
    const fb = fallback[key];
    if (fb !== undefined && typeof fb === "string") {
      return fb;
    }
    return key;
  }

  function getChatDemos(lang) {
    const l = resolveLang(lang || getLang());
    return I18N[l]?.chatDemos || I18N[DEFAULT_LANG].chatDemos;
  }

  function getCaseChatDemos(lang) {
    const l = resolveLang(lang || getLang());
    return I18N[l]?.caseChatDemos || I18N[DEFAULT_LANG].caseChatDemos;
  }

  function updateLangSwitcher(lang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function getMetaKeys() {
    if (document.body?.dataset?.page === "energy") {
      return { title: "energy.meta.title", description: "energy.meta.description" };
    }
    return { title: "meta.title", description: "meta.description" };
  }

  function applyI18n(lang) {
    const l = resolveLang(lang || getLang());
    setHtmlLang(l);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) {
        el.placeholder = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) {
        el.setAttribute("aria-label", value);
      }
    });

    const metaKeys = getMetaKeys();
    document.title = t(metaKeys.title, l);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t(metaKeys.description, l));
    }

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
      heroTitle.dataset.typingText = t("hero.title", l);
    }

    updateLangSwitcher(l);
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
      });
    });
    updateLangSwitcher(getLang());
  }

  function setLang(lang) {
    const l = resolveLang(lang);
    localStorage.setItem(STORAGE_KEY, l);
    applyI18n(l);
    document.dispatchEvent(
      new CustomEvent("zakon:langchange", {
        detail: { lang: l },
      })
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangSwitcher();
    applyI18n(getLang());
  });

  setHtmlLang(getLang());

  window.ZakonI18n = {
    getLang,
    setLang,
    t,
    applyI18n,
    getChatDemos,
    getCaseChatDemos,
  };
})();
