/**
 * i18n for the current Zakon-AI homepage (RU / EN).
 * Uses the same storage key as the rest of the site: zakon-lang
 */
(function () {
  const STORAGE_KEY = "zakon-lang";
  const DEFAULT_LANG = "ru";

  const I18N = {
    ru: {
      "meta.title": "Zakon-AI — ответы по вашим документам со ссылкой на источник",
      "meta.description":
        "Zakon-AI ищет в договорах, регламентах и инструкциях, которые загрузили вы. Ответ с цитатой и ссылкой на пункт. Разбор тендера — отдельный сценарий.",

      "ui.langGroup": "Язык интерфейса",
      "ui.themeGroup": "Тема",
      "ui.themeDark": "Тёмная тема",
      "ui.themeLight": "Светлая тема",
      "ui.menu": "Меню",

      "header.tagline": "ИИ-эксперт для работы<br>с вашими документами",
      "nav.why": "Зачем",
      "nav.start": "Как начать",
      "nav.proof": "Как работает",
      "nav.pricing": "Тарифы",
      "nav.paths": "Пакеты",
      "nav.security": "Безопасность",
      "nav.faq": "FAQ",
      "nav.try": "Начать работать",

      "hero.eyebrow": "ИИ-эксперт для работы с вашими документами",
      "hero.title":
        "Сократите время работы с документами в 10 раз и исключите риски человеческих ошибок",
      "hero.lead":
        "Zakon-AI превращает ваши договоры, регламенты и тендерную документацию в мгновенно отвечающую базу знаний. Система находит точный ответ за секунды и всегда даёт ссылку на конкретный пункт файла. Никаких выдуманных фактов — только проверенные цитаты из ваших документов.",
      "hero.ctaPrimary": "Проверить бесплатно",
      "hero.ctaSecondary": "Посмотреть разбор тендера",

      "chat.title": "Zakon-AI Chat",
      "chat.online": "● онлайн",
      "chat.demoDotsAria": "Примеры запросов",
      "chat.demo1Aria": "Пример 1",
      "chat.demo2Aria": "Пример 2",
      "chat.demo3Aria": "Пример 3",

      "why.label": "Почему это стоит денег",
      "why.title": "Почему текущие бизнес-процессы неэффективны?",
      "why.card1.stat": "до 30%",
      "why.card1.title": "Потерянных часов ценных специалистов",
      "why.card1.text":
        "Менеджеры, юристы и тендерные специалисты тратят до 30% рабочего времени на ручной поиск ответов и нужных формулировок в больших объёмах договоров, инструкций и прочих документах.",
      "why.card2.stat": "&gt;&nbsp;1&nbsp;млн&nbsp;₽",
      "why.card2.title": "Риск фатальных ошибок",
      "why.card2.text":
        "Пропущенный пункт о штрафных санкциях в тендерной документации или устаревшая версия регламента могут стоить компании миллионы рублей и репутацию.",
      "why.card3.stat": "1 сотрудник",
      "why.card3.title": "Знания уходят вместе с людьми",
      "why.card3.text":
        "Когда уходит опытный сотрудник, с ним уходит неформальная база: где файлы, история развития проекта, текущее состояние дел. Без цифровой копии отдел собирает это заново месяцами.",

      "roles.label": "Зачем",
      "roles.title": "Кому ИИ-эксперт может помочь?",
      "roles.subtitle":
        "Один инструмент — разная польза. Выберите свою роль и получите максимум преимуществ от приложения.",
      "roles.owner.title": "Собственник бизнеса",
      "roles.owner.lead":
        "Нужно, чтобы знания компании работали без вас и без «человека, у которого всё в голове».",
      "roles.owner.b1":
        "Меньше зависимости от одного эксперта: ответы берутся из документов, а не из памяти сотрудника",
      "roles.owner.b2":
        "Быстрее решения по договорам и закупкам — без ожидания «когда юрист освободится»",
      "roles.owner.b3": "Меньше риска пропустить пункт, который потом стоит денег",
      "roles.owner.b4":
        "Можно начать без IT-проекта: пилот на своих файлах, не внедрение на полгода",
      "roles.manager.title": "Руководитель",
      "roles.manager.lead":
        "Нужно разгрузить команду и держать единую позицию по регламентам и договорам.",
      "roles.manager.b1":
        "Сотрудники сами находят «где написано» — меньше очереди к вам и к эксперту отдела",
      "roles.manager.b2":
        "Одинаковые ответы из актуальной версии документа, а не «как кто запомнил»",
      "roles.manager.b3": "Первичный разбор договора или тендера за минуты, а не за полдня",
      "roles.manager.b4":
        "Новый человек быстрее входит в работу: база уже в чате, не в чужих папках",
      "roles.employee.title": "Менеджер",
      "roles.employee.lead":
        "Нужно быстро найти пункт, подготовить ответ коллеге или клиенту и не гадать.",
      "roles.employee.b1":
        "Вопрос своими словами — ответ с цитатой и ссылкой на файл, без ручного поиска по PDF",
      "roles.employee.b2":
        "Можно проверить формулировку в исходном пункте, а не верить чату «на слово»",
      "roles.employee.b3":
        "Типовые вопросы по договору, ТЗ и регламенту закрываются без эскалации наверх",
      "roles.employee.b4":
        "Для закупок: черновик рисков и вопросов организатору, чтобы не начинать с пустого листа",

      "start.label": "Как начать",
      "start.title": "Три простых шага — без внедрения и IT специалистов",
      "start.subtitle":
        "Без заключения договора, аренды сервера и долгих согласований. Попробуйте прямо сейчас и когда увидите пользу — подключайте коллег.",
      "start.step1.title": "Зарегистрируйтесь",
      "start.step1.text":
        "Откройте приложение и создайте аккаунт. Тестовый лимит — без договора, без сервера, без ожидания.",
      "start.step2.title": "Загрузите файлы",
      "start.step2.text":
        "Договор, инструкция, ТЗ, архив — то, по чему вы обычно ищете вручную. PDF, Word, Excel и другие форматы.",
      "start.step3.title": "Задайте вопрос",
      "start.step3.text":
        "Как коллеге: «где штраф», «какой срок». Откройте цитату в документе и решите сами.",
      "start.cta": "Попробовать на своих файлах",

      "proof.label": "Как работает",
      "proof.title": "Как выглядит ответ",
      "proof.subtitle":
        "Ответ ИИ-эксперта без ссылки на источник — это просто мнение. С источником — рабочий черновик, который можно проверить и использовать в своей работе.",
      "proof.card1.title": "Фрагмент из файла",
      "proof.card1.text":
        "Система ищет смысл вопроса в <strong>ваших</strong> документах, а не выдумывает норму «из головы» модели.",
      "proof.card1.cite": "Договор поставки.pdf, п. 8.3",
      "proof.card2.title": "Цитата в ответе",
      "proof.card2.text":
        "В ответе системы вы видите откуда взялась конкретная формулировка. Можно проверить цитирование по документам.",
      "proof.card2.cite": "«штраф 0,1% за каждый день просрочки…»",
      "proof.card3.title": "Проверка человеком — решение за человеком",
      "proof.card3.text":
        "Zakon-AI значительно ускоряет поиск и обработку информации. Юриста, бухгалтера или тендерного специалиста система не заменит.",
      "proof.card3.cite": "Источник открыт → окончательное решение за вами",
      "proof.compare.title":
        "ИИ-чат удобен для личного использования. Для бизнеса нужен ИИ-эксперт.",
      "proof.compare.lead":
        "Бесплатный ИИ-чат удобен для общих вопросов. Для проверки и составления договоров, ТЗ и регламентов нужен ИИ-эксперт, который ищет ответы по вашей базе документов, даёт цитату со ссылкой на пункт.",
      "proof.bad.title": "Обычная нейросеть (ChatGPT и аналоги)",
      "proof.bad.b1":
        "Файл можно приложить, но это разовый чат — нет постоянной базы документов и актуальных версий",
      "proof.bad.b2": "ИИ может уверенно ответить неверно — без ссылки на ваш файл",
      "proof.bad.b3": "Нет ссылки на документ, который можно открыть и проверить",
      "proof.bad.b4":
        "Документы уходят во внешний сервис: не ваш контур и не общая база команды",
      "proof.bad.b5":
        "Не держит единую базу компании: знания остаются в истории чата",
      "proof.good.title": "Zakon-AI",
      "proof.good.b1": "Система ищет ответ в ваших загруженных документах",
      "proof.good.b2":
        "Ответ с цитатой и указанием файла или пункта конкретного документа",
      "proof.good.b3": "Всегда можно проверить цитирование в источнике за секунду",
      "proof.good.b4":
        "Один раз загрузили в базу знаний — дальше спрашиваете сколько угодно",
      "proof.good.b5":
        "Единая база для команды: все опираются на одни и те же актуальные файлы",

      "pricing.label": "Тарифы",
      "pricing.title": "Сколько стоит",
      "pricing.subtitle": "Сначала тест без оплаты. Дальше — тариф под вашу задачу.",
      "pricing.personal.badge": "Для себя",
      "pricing.personal.name": "Личный",
      "pricing.personal.amount": "1 990 ₽ <span>/ мес</span>",
      "pricing.personal.desc":
        "Чат по документам и экспертное мнение. Тест при регистрации — бесплатно.",
      "pricing.personal.f1": "100 МБ документов",
      "pricing.personal.f2": "Ответы с цитатами из ваших файлов",
      "pricing.personal.f3": "Пакет «Экспертное мнение» в тарифе",
      "pricing.personal.btn": "Начать работать",
      "pricing.team.name": "Команда",
      "pricing.team.amount": "14 900 ₽ <span>/ мес</span>",
      "pricing.team.desc": "Несколько человек, общая база",
      "pricing.team.f1": "Общие файлы отдела",
      "pricing.team.f2": "Одинаковые ответы из одной версии",
      "pricing.team.f3": "Лимиты под объём работы",
      "pricing.team.btn": "Обсудить пилот",
      "pricing.corp.name": "Корпорат",
      "pricing.corp.amount": "По запросу",
      "pricing.corp.desc": "Свой контур, роли, большая база",
      "pricing.corp.f1": "Сервер заказчика или выделенный контур",
      "pricing.corp.f2": "Разграничение доступа",
      "pricing.corp.f3": "Отраслевые пакеты по запросу",
      "pricing.corp.btn": "Написать нам",

      "paths.label": "Пакеты",
      "paths.title": "Дополнительные возможности Zakon-AI",
      "paths.subtitle": "Готовые пакеты в приложении для решения вопросов вашего бизнеса.",
      "paths.live": "Уже работает",
      "paths.soon": "В разработке",
      "paths.docs.title": "Чат по вашим документам",
      "paths.docs.tagline": "ИИ-эксперт для ваших документов",
      "paths.docs.price": "В тарифе приложения",
      "paths.docs.lead":
        "Загрузите договоры, регламенты, инструкции и рабочие файлы — личную или командную базу знаний.",
      "paths.docs.b1":
        "Вопрос обычным языком — ответ с точной ссылкой на фрагмент документа",
      "paths.docs.b2": "Не общие рассуждения, а опора на ваши файлы",
      "paths.docs.b3":
        "Один источник правды для команды: актуальные версии, а не «как помнят»",
      "paths.docs.more": "Подробнее",
      "paths.docs.open": "Открыть чат",
      "paths.tenders.title": "Разбор тендера",
      "paths.tenders.price": "2 990 ₽ / мес",
      "paths.tenders.lead":
        "Вставьте ссылку на закупку или загрузите комплект документов — ИИ разберёт извещение, ТЗ и проект контракта.",
      "paths.tenders.b1": "Карточка закупки, риски, чек-лист допуска",
      "paths.tenders.b2": "Готовые вопросы организатору",
      "paths.tenders.b3":
        "Каждый вывод — с цитатой из документа и опорой на 44-ФЗ / 223-ФЗ",
      "paths.tenders.b4": "Решение «стоит ли участвовать» — ещё до заявки",
      "paths.tenders.btn": "Разобрать тендер",
      "paths.expert.title": "Экспертное мнение",
      "paths.expert.price": "В тарифе приложения",
      "paths.expert.lead":
        "Когда нормы неоднозначны и цена ошибки высока — вопрос одновременно разбирают несколько сильных моделей.",
      "paths.expert.b1": "Где модели согласны, а где расходятся",
      "paths.expert.b2": "Какие риски у разных подходов",
      "paths.expert.b3": "Взвешенный итог со ссылками на источники",
      "paths.expert.b4":
        "Не упрощённое «да/нет», а разбор для ответственного решения",
      "paths.expert.btn": "Подробнее о пакете",
      "paths.finance.title": "Финансовый анализ",
      "paths.finance.price": "Цена появится при запуске",
      "paths.finance.lead":
        "Загрузите бухгалтерскую, финансовую и налоговую отчётность юрлица — баланс, ОФР, ОДДС, пояснения.",
      "paths.finance.b1": "Ключевые показатели и сравнение периодов",
      "paths.finance.b2": "Тренды и зоны риска",
      "paths.finance.b3":
        "Структурированный разбор за минуты вместо часов ручной сверки",
      "paths.finance.b4": "Опора на сами документы, а не на общие шаблоны",

      "who.label": "Использование",
      "who.title": "Варианты использования приложения",
      "who.subtitle":
        "Используйте приложение на различных этапах бизнес-процессов, чтобы увеличить эффективность вашего бизнеса.",
      "who.legal.title": "Юридический блок",
      "who.legal.lead":
        "Договоры, допсоглашения, претензии и внутренние юридические позиции — без ручного поиска по десяткам PDF.",
      "who.legal.b1":
        "Быстро находите пункты об ответственности, сроках, расторжении, штрафах и порядке претензий",
      "who.legal.b2":
        "Сверяете формулировки между шаблоном и конкретным договором — со ссылкой на фрагмент",
      "who.legal.b3":
        "Готовите черновик ответа коллеге или контрагенту, опираясь на актуальные версии файлов",
      "who.legal.b4":
        "Снижаете очередь к одному юристу: типовые вопросы закрываются из базы документов",
      "who.tenders.title": "Закупки и тендеры",
      "who.tenders.lead":
        "Первичный разбор закупки до решения «участвовать или нет» — по ссылке или по комплекту документов.",
      "who.tenders.b1": "Карточка закупки, риски, чек-лист допуска и вопросы организатору",
      "who.tenders.b2": "Цитаты из ТЗ и проекта контракта с опорой на 44-ФЗ / 223-ФЗ",
      "who.tenders.b3": "Меньше часов на чтение PDF — больше времени на решение и заявку",
      "who.tenders.b4": "Полезно и участнику, и заказчику: ловушки в комплекте до публикации",
      "who.head.title": "Руководитель отдела",
      "who.head.lead":
        "Единая база знаний отдела: сотрудники сами находят «где написано», без очереди к вам.",
      "who.head.b1":
        "Одинаковые ответы из актуальной версии регламента, а не «как кто запомнил»",
      "who.head.b2": "Новый сотрудник быстрее входит в работу — правила уже в чате",
      "who.head.b3":
        "Меньше эскалаций по типовым вопросам и меньше ручной пересылки файлов",
      "who.head.b4": "Контроль качества: можно проверить, на какой пункт опирался ответ",
      "who.hr.title": "HR и кадровые процессы",
      "who.hr.lead":
        "Политики, должностные инструкции, ЛНА и ответы сотрудникам — из одной актуальной базы.",
      "who.hr.b1":
        "Быстрый поиск норм по отпускам, командировкам, дисциплине и допуску к работе",
      "who.hr.b2": "Меньше разночтений: все опираются на одну версию документа",
      "who.hr.b3":
        "Онбординг без «спроси у Марии» — ответы со ссылкой на инструкцию",
      "who.hr.b4":
        "Подготовка пояснений для руководства на основе внутренних правил",
      "who.sales.title": "Продажи и клиентский сервис",
      "who.sales.lead":
        "Ответы клиенту и внутренние согласования — по договору, оферте и коммерческим условиям.",
      "who.sales.b1":
        "Находите срок, объём услуг, условия оплаты и ответственность без листания договора",
      "who.sales.b2":
        "Готовите корректный ответ в переписке с опорой на цитату, а не на память",
      "who.sales.b3":
        "Меньше ошибок в обещаниях клиенту — формулировка сверена с документом",
      "who.sales.b4": "Быстрее эскалация юристу: уже есть ссылка на спорный пункт",
      "who.finance.title": "Финансы и контроль",
      "who.finance.lead":
        "Регламенты согласований, лимиты, договоры с поставщиками и внутренние финансовые политики.",
      "who.finance.b1":
        "Быстро проверяете порядок платежей, лимиты и условия закрывающих документов",
      "who.finance.b2":
        "Сверяете обязательства по договору с фактическим запросом от подразделения",
      "who.finance.b3":
        "Снижаете риск пропустить штрафной или кассовый пункт в длинном договоре",
      "who.finance.b4":
        "Готовите разбор для руководителя на основе ваших файлов, а не общих шаблонов",

      "security.label": "Безопасность",
      "security.title": "Ваши данные под надёжной защитой",
      "security.subtitle":
        "Снимаем типичные возражения службы безопасности и ИБ: где хранятся данные, как используются документы и кто чем управляет.",
      "security.residency.title": "Резидентство",
      "security.residency.text":
        "Все данные хранятся на серверах на территории РФ, полное соответствие <strong>152-ФЗ</strong>.",
      "security.privacy.title": "Приватность",
      "security.privacy.text":
        "Мы гарантируем, что загруженные вами договоры и регламенты <strong>никогда не используются</strong> для дообучения базовых языковых моделей.",
      "security.access.title": "Контроль доступа",
      "security.access.text":
        "В тарифе «Команда» администратор гибко настраивает права: кто может просматривать папки, кто задавать вопросы, а кто управлять документами.",

      "faq.label": "FAQ",
      "faq.title": "Коротко о главном",
      "faq.q1": "Что умеет приложение?",
      "faq.a1":
        "Zakon-AI — чат по вашим документам: загружаете договоры, регламенты и инструкции, задаёте вопрос обычным языком и получаете ответ с цитатой и ссылкой на фрагмент. Можно проверить источник — это не «мнение модели вообще», а опора на ваши файлы.",
      "faq.q2": "Это замена юристу?",
      "faq.a2":
        "Нет. Это ускорение поиска и черновик ответа. Решение, риски и подпись остаются на человеке.",
      "faq.q3": "Чем отличается от ChatGPT?",
      "faq.a3":
        "Обычный чат не видит ваши файлы, пока вы не вставите куски текста. Zakon-AI ищет по загруженной базе и показывает, из какого пункта взял формулировку. Удобно для команды: одна актуальная версия документов, а не «как кто запомнил».",
      "faq.q4": "Нужно ли внедрение, чтобы попробовать?",
      "faq.a4":
        "Нет. Регистрация, загрузка файлов, вопрос. Свой сервер и роли — отдельный разговор, если пилот уже нужен всей компании.",
      "faq.q5": "Какие файлы можно загрузить?",
      "faq.a5":
        "PDF, Word, Excel и другие текстовые форматы. Состав базы задаёте вы: только то, что можно отдавать в систему.",
      "faq.q6": "Какие модели используются?",
      "faq.a6":
        "В чате доступны современные языковые модели — можно выбрать подходящую под задачу. Режим «Экспертное мнение» запускает разбор несколькими моделями и собирает взвешенный итог. Ответ по-прежнему строится на ваших документах и сопровождается ссылками на источники.",
      "faq.q7": "Сколько стоит?",
      "faq.a7":
        "Тариф «Личный» — 1 990 ₽ в месяц, «Команда» — 14 900 ₽ в месяц, «Корпорат» — по запросу. В тариф входят чат по документам и «Экспертное мнение». Сначала можно пройти тест бесплатно.",
      "faq.q8": "Как происходит оплата?",
      "faq.a8":
        "Тариф приложения и ответы модели в чате учитываются отдельно: подписка — со счёта приложения, расход моделей — со счёта ИИ. Для «Личного» оплата идёт в приложении после теста. Для «Команды» и «Корпората» обычно оформляем доступ по заявке — счёт или договор.",
      "faq.q9": "Какой платёжный период?",
      "faq.a9":
        "Основной период — месяц. Лимиты тарифа обновляются раз в 30 дней с момента подключения. Продление — на следующий месяц; для корпоративного контура сроки согласуем отдельно.",
      "faq.q10": "Где хранятся документы и кто их видит?",
      "faq.a10":
        "Сервис работает на серверах в РФ. Ваши файлы доступны только вам и вашей команде с нужными правами. Документы не используются для обучения языковых моделей.",
      "faq.q11": "Можно ли работать всей командой?",
      "faq.a11":
        "Да. В тарифе «Команда» — общая база и одинаковые ответы из одной версии документов. «Корпорат» — свой контур, роли и разграничение доступа. Напишите нам, если нужен пилот для отдела.",
      "faq.q12": "Что такое «Разбор тендера»?",
      "faq.a12":
        "Это отдельный пакет поверх приложения: разбор закупки по ссылке или комплекту документов — риски, допуск, вопросы организатору с цитатами. Основной продукт — чат по вашим документам; тендеры подключают, если нужна именно эта задача.",

      "cta.title": "Проверьте приложение в реальных условиях",
      "cta.text":
        "Загрузите сложный договор или регламент, задайте каверзный вопрос и убедитесь, что система даст точный ответ со ссылкой на источник. Это бесплатно и не требует звонка менеджеру.",
      "cta.primary": "Попробовать в приложении",
      "cta.secondary": "Пилот для отдела",

      "contact.label": "Контакт",
      "contact.title": "Пилот для отдела",
      "contact.subtitle":
        "Если нужен общий доступ, роли или свой сервер — напишите. Для себя достаточно кнопки «Начать работать».",
      "contact.n1": "Пилот на ваших документах, не презентация «вообще про ИИ»",
      "contact.n2": "Ответ в течение 1–2 рабочих дней",
      "contact.n3": "Можно сначала зарегистрироваться самим",
      "form.name": "Имя *",
      "form.namePh": "Как к вам обращаться",
      "form.email": "Email *",
      "form.emailPh": "name@company.ru",
      "form.phone": "Телефон *",
      "form.phonePh": "+7 900 000-00-00",
      "form.message": "Комментарий",
      "form.messagePh": "Отдел, документы, тендеры или общий чат",
      "form.consent": "Согласен на обработку персональных данных для ответа по заявке",
      "form.submit": "Отправить",
      "form.note":
        "Нажимая кнопку, вы соглашаетесь на обработку данных для связи по заявке.",
      "form.error.required":
        "Заполните имя, email, телефон и согласие на обработку данных.",
      "form.error.email": "Проверьте корректность email.",
      "form.error.phone": "Проверьте корректность телефона.",
      "form.error.notConfigured":
        "Форма ещё не подключена. Укажите Formspree endpoint в js/main.js (см. README).",
      "form.error.sending": "Отправляем заявку…",
      "form.error.success":
        "Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      "form.error.fail": "Не удалось отправить заявку. Попробуйте позже.",

      "footer.tagline": "Ответы по вашим документам<br>с цитатой и ссылкой на пункт",
      "footer.start": "Как начать",
      "footer.pricing": "Тарифы",
      "footer.paths": "Пакеты",
      "footer.tenders": "Тендеры",
      "footer.contact": "Связаться",
      "footer.copy": "© 2026 Zakon-AI. Все права защищены.",

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
    },

    en: {
      "meta.title": "Zakon-AI — answers from your documents with a link to the source",
      "meta.description":
        "Zakon-AI searches the contracts, policies, and instructions you upload. Answers come with a quote and a link to the clause. Tender review is a separate package.",

      "ui.langGroup": "Interface language",
      "ui.themeGroup": "Theme",
      "ui.themeDark": "Dark theme",
      "ui.themeLight": "Light theme",
      "ui.menu": "Menu",

      "header.tagline": "AI expert for working<br>with your documents",
      "nav.why": "Why",
      "nav.start": "Get started",
      "nav.proof": "How it works",
      "nav.pricing": "Pricing",
      "nav.paths": "Packages",
      "nav.security": "Security",
      "nav.faq": "FAQ",
      "nav.try": "Start working",

      "hero.eyebrow": "AI expert for working with your documents",
      "hero.title":
        "Cut document work time by 10x and eliminate human-error risks",
      "hero.lead":
        "Zakon-AI turns your contracts, policies, and tender documentation into an instantly answering knowledge base. The system finds a precise answer in seconds and always links to the exact clause in the file. No invented facts — only verified quotes from your documents.",
      "hero.ctaPrimary": "Try for free",
      "hero.ctaSecondary": "See tender review",

      "chat.title": "Zakon-AI Chat",
      "chat.online": "● online",
      "chat.demoDotsAria": "Sample queries",
      "chat.demo1Aria": "Sample 1",
      "chat.demo2Aria": "Sample 2",
      "chat.demo3Aria": "Sample 3",

      "why.label": "Why it pays off",
      "why.title": "Why current business processes are inefficient?",
      "why.card1.stat": "up to 30%",
      "why.card1.title": "Lost hours of valuable specialists",
      "why.card1.text":
        "Managers, lawyers, and tender specialists spend up to 30% of working time manually hunting for answers and wording across large volumes of contracts, instructions, and other documents.",
      "why.card2.stat": "&gt;&nbsp;1&nbsp;M&nbsp;₽",
      "why.card2.title": "Risk of critical errors",
      "why.card2.text":
        "A missed penalty clause in tender documentation or an outdated policy version can cost a company millions of rubles and its reputation.",
      "why.card3.stat": "1 employee",
      "why.card3.title": "Knowledge leaves with people",
      "why.card3.text":
        "When an experienced employee leaves, an informal knowledge base leaves with them: where the files are, project history, and the current state of affairs. Without a digital copy, the team rebuilds it for months.",

      "roles.label": "Why Zakon-AI",
      "roles.title": "Who can an AI expert help?",
      "roles.subtitle":
        "One tool — different value. Choose your role and get the most from the app.",
      "roles.owner.title": "Business owner",
      "roles.owner.lead":
        "You need company knowledge to work without you — and without “the one person who knows everything”.",
      "roles.owner.b1":
        "Less dependency on a single expert: answers come from documents, not employee memory",
      "roles.owner.b2":
        "Faster decisions on contracts and procurement — without waiting for legal to free up",
      "roles.owner.b3": "Lower risk of missing a clause that later costs money",
      "roles.owner.b4":
        "Start without an IT project: pilot on your files, not a six-month rollout",
      "roles.manager.title": "Team lead",
      "roles.manager.lead":
        "You need to unload the team and keep one consistent position on policies and contracts.",
      "roles.manager.b1":
        "Employees find “where it says so” themselves — less queue to you and the department expert",
      "roles.manager.b2":
        "Same answers from the current document version — not “as someone remembered”",
      "roles.manager.b3":
        "First-pass contract or tender review in minutes, not half a day",
      "roles.manager.b4":
        "New hires ramp up faster: the base is already in chat, not in someone else’s folders",
      "roles.employee.title": "Manager",
      "roles.employee.lead":
        "You need to find a clause fast, draft a reply to a colleague or client — without guessing.",
      "roles.employee.b1":
        "Ask in your own words — get a quote and file link, without manual PDF hunting",
      "roles.employee.b2":
        "You can verify the wording in the source clause instead of trusting the chat blindly",
      "roles.employee.b3":
        "Routine questions on contracts, specs, and policies close without escalating upward",
      "roles.employee.b4":
        "For procurement: a draft of risks and questions to the organizer, so you don’t start from a blank page",

      "start.label": "Get started",
      "start.title": "Three simple steps — no rollout and no IT team",
      "start.subtitle":
        "No contract paperwork, no server rental, no long approvals. Try it now — and when you see the value, bring colleagues in.",
      "start.step1.title": "Sign up",
      "start.step1.text":
        "Open the app and create an account. Trial limits — no contract, no server, no waiting.",
      "start.step2.title": "Upload files",
      "start.step2.text":
        "A contract, instruction, tender pack, archive — whatever you usually search by hand. PDF, Word, Excel, and more.",
      "start.step3.title": "Ask a question",
      "start.step3.text":
        "Like asking a colleague: “where’s the penalty”, “what’s the deadline”. Open the quote in the document and decide yourself.",
      "start.cta": "Try on your files",

      "proof.label": "How it works",
      "proof.title": "What an answer looks like",
      "proof.subtitle":
        "An AI expert answer without a source link is just an opinion. With a source — a working draft you can verify and use.",
      "proof.card1.title": "Excerpt from the file",
      "proof.card1.text":
        "The system searches the meaning of your question in <strong>your</strong> documents — it doesn’t invent a rule from the model’s “memory”.",
      "proof.card1.cite": "Supply_Contract.pdf, clause 8.3",
      "proof.card2.title": "Quote in the answer",
      "proof.card2.text":
        "In the system answer you see where the exact wording came from. You can verify the citation against the documents.",
      "proof.card2.cite": "“a penalty of 0.1% for each day of delay…”",
      "proof.card3.title": "Human review — human decision",
      "proof.card3.text":
        "Zakon-AI greatly speeds up search and processing. It does not replace a lawyer, accountant, or tender specialist.",
      "proof.card3.cite": "Source open → final decision is yours",
      "proof.compare.title":
        "AI chat is fine for personal use. Business needs an AI expert.",
      "proof.compare.lead":
        "Free AI chat works for general questions. To check and draft contracts, specs, and policies you need an AI expert that searches your document base and returns a quote with a clause link.",
      "proof.bad.title": "A regular neural net (ChatGPT and similar)",
      "proof.bad.b1":
        "You can attach a file, but it’s a one-off chat — no persistent document base or current versions",
      "proof.bad.b2":
        "AI can answer confidently and still be wrong — with no link to your file",
      "proof.bad.b3": "No link to a document you can open and verify",
      "proof.bad.b4":
        "Documents go to an external service: not your perimeter and not a shared team base",
      "proof.bad.b5":
        "No single company knowledge base: knowledge stays in chat history",
      "proof.good.title": "Zakon-AI",
      "proof.good.b1": "The system searches your uploaded documents",
      "proof.good.b2":
        "Answers include a quote and the file or clause of a specific document",
      "proof.good.b3": "You can always verify the citation in the source in a second",
      "proof.good.b4":
        "Upload to the knowledge base once — then ask as often as you need",
      "proof.good.b5":
        "One shared base for the team: everyone relies on the same current files",

      "pricing.label": "Pricing",
      "pricing.title": "How much it costs",
      "pricing.subtitle": "Start with a free trial. Then pick the plan for your use case.",
      "pricing.personal.badge": "For you",
      "pricing.personal.name": "Personal",
      "pricing.personal.amount": "1,990 ₽ <span>/ mo</span>",
      "pricing.personal.desc":
        "Document chat and expert opinion. Trial on signup — free.",
      "pricing.personal.f1": "100 MB of documents",
      "pricing.personal.f2": "Answers with quotes from your files",
      "pricing.personal.f3": "“Expert opinion” package included",
      "pricing.personal.btn": "Start working",
      "pricing.team.name": "Team",
      "pricing.team.amount": "14,900 ₽ <span>/ mo</span>",
      "pricing.team.desc": "Several people, shared knowledge base",
      "pricing.team.f1": "Shared department files",
      "pricing.team.f2": "Same answers from one version",
      "pricing.team.f3": "Limits matched to workload",
      "pricing.team.btn": "Discuss a pilot",
      "pricing.corp.name": "Corporate",
      "pricing.corp.amount": "On request",
      "pricing.corp.desc": "Your perimeter, roles, large base",
      "pricing.corp.f1": "Customer server or dedicated contour",
      "pricing.corp.f2": "Access control",
      "pricing.corp.f3": "Industry packages on request",
      "pricing.corp.btn": "Contact us",

      "paths.label": "Packages",
      "paths.title": "Additional Zakon-AI capabilities",
      "paths.subtitle": "Ready-made packages in the app for your business questions.",
      "paths.live": "Available now",
      "paths.soon": "In development",
      "paths.docs.title": "Chat over your documents",
      "paths.docs.tagline": "AI expert for your documents",
      "paths.docs.price": "Included in the app plan",
      "paths.docs.lead":
        "Upload contracts, policies, instructions, and work files — a personal or team knowledge base.",
      "paths.docs.b1":
        "Ask in plain language — get an answer with an exact link to the document excerpt",
      "paths.docs.b2": "Not generic reasoning — grounded in your files",
      "paths.docs.b3":
        "One source of truth for the team: current versions, not “as people remember”",
      "paths.docs.more": "Learn more",
      "paths.docs.open": "Open chat",
      "paths.tenders.title": "Tender review",
      "paths.tenders.price": "2,990 ₽ / mo",
      "paths.tenders.lead":
        "Paste a procurement link or upload a document pack — AI reviews the notice, specs, and draft contract.",
      "paths.tenders.b1": "Procurement card, risks, eligibility checklist",
      "paths.tenders.b2": "Ready questions for the organizer",
      "paths.tenders.b3":
        "Every conclusion — with a document quote and support from 44-FZ / 223-FZ",
      "paths.tenders.b4": "Decide whether to bid — before you apply",
      "paths.tenders.btn": "Review a tender",
      "paths.expert.title": "Expert opinion",
      "paths.expert.price": "Included in the app plan",
      "paths.expert.lead":
        "When rules are ambiguous and the cost of error is high — several strong models review the question at once.",
      "paths.expert.b1": "Where models agree and where they diverge",
      "paths.expert.b2": "What risks different approaches carry",
      "paths.expert.b3": "A balanced summary with links to sources",
      "paths.expert.b4":
        "Not a simplified yes/no — a review for a responsible decision",
      "paths.expert.btn": "About the package",
      "paths.finance.title": "Financial analysis",
      "paths.finance.price": "Price on launch",
      "paths.finance.lead":
        "Upload a legal entity’s accounting, financial, and tax reporting — balance sheet, P&L, cash flow, notes.",
      "paths.finance.b1": "Key metrics and period comparison",
      "paths.finance.b2": "Trends and risk zones",
      "paths.finance.b3":
        "Structured review in minutes instead of hours of manual reconciliation",
      "paths.finance.b4": "Grounded in the documents themselves, not generic templates",

      "who.label": "Use cases",
      "who.title": "How teams use the app",
      "who.subtitle":
        "Use the app across business-process stages to improve your company’s efficiency.",
      "who.legal.title": "Legal team",
      "who.legal.lead":
        "Contracts, amendments, claims, and internal legal positions — without manually searching dozens of PDFs.",
      "who.legal.b1":
        "Quickly find liability, deadlines, termination, penalties, and claims procedure clauses",
      "who.legal.b2":
        "Compare wording between a template and a specific contract — with a link to the excerpt",
      "who.legal.b3":
        "Draft replies to colleagues or counterparties based on current file versions",
      "who.legal.b4":
        "Reduce the queue to one lawyer: routine questions close from the document base",
      "who.tenders.title": "Procurement and tenders",
      "who.tenders.lead":
        "First-pass review of a procurement before “bid or pass” — from a link or a document pack.",
      "who.tenders.b1":
        "Procurement card, risks, eligibility checklist, and questions to the organizer",
      "who.tenders.b2":
        "Quotes from the specs and draft contract grounded in 44-FZ / 223-FZ",
      "who.tenders.b3": "Fewer hours reading PDFs — more time for the decision and the bid",
      "who.tenders.b4":
        "Useful for both bidder and customer: traps in the pack before publication",
      "who.head.title": "Department head",
      "who.head.lead":
        "A shared department knowledge base: employees find “where it says so” without queuing for you.",
      "who.head.b1":
        "Same answers from the current policy version — not “as someone remembered”",
      "who.head.b2": "New hires ramp faster — rules are already in chat",
      "who.head.b3":
        "Fewer escalations on routine questions and less manual file forwarding",
      "who.head.b4":
        "Quality control: you can check which clause an answer relied on",
      "who.hr.title": "HR and people ops",
      "who.hr.lead":
        "Policies, job descriptions, local acts, and employee answers — from one current base.",
      "who.hr.b1":
        "Fast lookup of leave, travel, discipline, and workplace access rules",
      "who.hr.b2": "Fewer conflicting readings: everyone uses one document version",
      "who.hr.b3":
        "Onboarding without “ask Maria” — answers with a link to the instruction",
      "who.hr.b4":
        "Prepare clarifications for leadership based on internal rules",
      "who.sales.title": "Sales and customer service",
      "who.sales.lead":
        "Client replies and internal alignment — against the contract, offer, and commercial terms.",
      "who.sales.b1":
        "Find deadlines, scope, payment terms, and liability without paging through the contract",
      "who.sales.b2":
        "Draft a correct reply in correspondence based on a quote, not memory",
      "who.sales.b3":
        "Fewer mistaken promises to the client — wording checked against the document",
      "who.sales.b4":
        "Faster escalation to legal: the disputed clause link is already there",
      "who.finance.title": "Finance and control",
      "who.finance.lead":
        "Approval policies, limits, supplier contracts, and internal finance rules.",
      "who.finance.b1":
        "Quickly check payment order, limits, and closing-document conditions",
      "who.finance.b2":
        "Match contract obligations to an actual request from a unit",
      "who.finance.b3":
        "Lower risk of missing a penalty or cash-handling clause in a long contract",
      "who.finance.b4":
        "Prepare a briefing for leadership from your files, not generic templates",

      "security.label": "Security",
      "security.title": "Your data under reliable protection",
      "security.subtitle":
        "We address typical security and compliance objections: where data is stored, how documents are used, and who controls what.",
      "security.residency.title": "Residency",
      "security.residency.text":
        "All data is stored on servers in the Russian Federation, in full compliance with <strong>Federal Law 152-FZ</strong>.",
      "security.privacy.title": "Privacy",
      "security.privacy.text":
        "We guarantee that the contracts and policies you upload are <strong>never used</strong> to further train base language models.",
      "security.access.title": "Access control",
      "security.access.text":
        "On the Team plan, an admin flexibly sets rights: who can view folders, who can ask questions, and who can manage documents.",

      "faq.label": "FAQ",
      "faq.title": "The essentials",
      "faq.q1": "What can the app do?",
      "faq.a1":
        "Zakon-AI is chat over your documents: upload contracts, policies, and instructions, ask in plain language, and get an answer with a quote and a link to the excerpt. You can verify the source — it’s not a generic model opinion, it’s grounded in your files.",
      "faq.q2": "Does it replace a lawyer?",
      "faq.a2":
        "No. It speeds up search and drafts an answer. Decisions, risk, and sign-off stay with a human.",
      "faq.q3": "How is it different from ChatGPT?",
      "faq.a3":
        "A regular chat doesn’t see your files until you paste chunks of text. Zakon-AI searches your uploaded base and shows which clause it used. Great for teams: one current document version — not “as someone remembered”.",
      "faq.q4": "Do I need a rollout to try it?",
      "faq.a4":
        "No. Sign up, upload files, ask. Your own server and roles — a separate conversation if the whole company already needs a pilot.",
      "faq.q5": "Which files can I upload?",
      "faq.a5":
        "PDF, Word, Excel, and other text formats. You choose what goes into the base: only what you’re allowed to put in the system.",
      "faq.q6": "Which models are used?",
      "faq.a6":
        "Modern language models are available in chat — pick one that fits the task. Expert opinion runs several models and builds a balanced summary. Answers still rely on your documents and include source links.",
      "faq.q7": "How much does it cost?",
      "faq.a7":
        "Personal — 1,990 ₽ / month, Team — 14,900 ₽ / month, Corporate — on request. Plans include document chat and Expert opinion. You can start with a free trial.",
      "faq.q8": "How does payment work?",
      "faq.a8":
        "The app plan and model usage in chat are billed separately: subscription from the app balance, model spend from the AI balance. Personal is paid in-app after the trial. Team and Corporate are usually set up via invoice or contract after a request.",
      "faq.q9": "What is the billing period?",
      "faq.a9":
        "The main period is a month. Plan limits refresh every 30 days from activation. Renewal is for the next month; corporate timelines are agreed separately.",
      "faq.q10": "Where are documents stored and who can see them?",
      "faq.a10":
        "The service runs on servers in Russia. Your files are available only to you and your team with the right permissions. Documents are not used to train language models.",
      "faq.q11": "Can the whole team work in it?",
      "faq.a11":
        "Yes. Team plan — a shared base and the same answers from one document version. Corporate — your perimeter, roles, and access control. Write to us if you need a department pilot.",
      "faq.q12": "What is “Tender review”?",
      "faq.a12":
        "A separate package on top of the app: review a procurement from a link or document pack — risks, eligibility, questions to the organizer with quotes. The core product is chat over your documents; tenders are added when you need that workflow.",

      "cta.title": "Try the app in real conditions",
      "cta.text":
        "Upload a complex contract or policy, ask a tough question, and see that the system returns a precise answer with a source link. It’s free and doesn’t require a sales call.",
      "cta.primary": "Try in the app",
      "cta.secondary": "Department pilot",

      "contact.label": "Contact",
      "contact.title": "Department pilot",
      "contact.subtitle":
        "If you need shared access, roles, or your own server — write to us. For yourself, the “Start working” button is enough.",
      "contact.n1": "A pilot on your documents — not a generic “AI” pitch",
      "contact.n2": "Reply within 1–2 business days",
      "contact.n3": "You can sign up yourself first",
      "form.name": "Name *",
      "form.namePh": "How should we address you",
      "form.email": "Email *",
      "form.emailPh": "name@company.com",
      "form.phone": "Phone *",
      "form.phonePh": "+1 555 000-0000",
      "form.message": "Comment",
      "form.messagePh": "Team, documents, tenders, or general chat",
      "form.consent":
        "I agree to personal data processing so you can reply to my request",
      "form.submit": "Send",
      "form.note":
        "By clicking the button, you agree to data processing for follow-up on your request.",
      "form.error.required":
        "Please fill in name, email, phone, and consent to data processing.",
      "form.error.email": "Please check that the email is correct.",
      "form.error.phone": "Please check that the phone number is correct.",
      "form.error.notConfigured":
        "The form is not connected yet. Set the Formspree endpoint in js/main.js (see README).",
      "form.error.sending": "Sending request…",
      "form.error.success":
        "Thank you! Your request has been sent. We will contact you shortly.",
      "form.error.fail": "Could not send the request. Please try again later.",

      "footer.tagline":
        "Answers from your documents<br>with a quote and a link to the clause",
      "footer.start": "Get started",
      "footer.pricing": "Pricing",
      "footer.paths": "Packages",
      "footer.tenders": "Tenders",
      "footer.contact": "Contact",
      "footer.copy": "© 2026 Zakon-AI. All rights reserved.",

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
            "Source: Accounting Policy 2026, section 4; Art. 171(2) of the Tax Code. → open document excerpt",
        },
      ],
    },
  };

  function resolveLang(lang) {
    return lang === "en" ? "en" : DEFAULT_LANG;
  }

  function getLang() {
    return resolveLang(localStorage.getItem(STORAGE_KEY));
  }

  function setHtmlLang(lang) {
    document.documentElement.setAttribute("lang", resolveLang(lang));
  }

  function t(key, lang) {
    const l = resolveLang(lang || getLang());
    const dict = I18N[l] || I18N[DEFAULT_LANG];
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(I18N[DEFAULT_LANG], key)) {
      return I18N[DEFAULT_LANG][key];
    }
    return key;
  }

  function getChatDemos(lang) {
    const l = resolveLang(lang || getLang());
    return I18N[l].chatDemos || I18N[DEFAULT_LANG].chatDemos;
  }

  function updateLangSwitcher(lang) {
    const l = resolveLang(lang);
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === l;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyI18n(lang) {
    const l = resolveLang(lang);
    setHtmlLang(l);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.placeholder = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (!key) return;
      const value = t(key, l);
      if (value !== key) el.setAttribute("aria-label", value);
    });

    document.title = t("meta.title", l);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description", l));

    updateLangSwitcher(l);
  }

  function setLang(lang) {
    const l = resolveLang(lang);
    localStorage.setItem(STORAGE_KEY, l);
    applyI18n(l);
    document.dispatchEvent(
      new CustomEvent("zakon:langchange", { detail: { lang: l } })
    );
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    updateLangSwitcher(getLang());
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
    getCaseChatDemos: () => [],
  };
})();
