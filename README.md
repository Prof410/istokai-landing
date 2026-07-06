# Zakon.AI — лендинг (zakon-ai.ru)

Статический сайт бренда **Zakon.AI**: технология RAG для корпоративной базы знаний.
В конце — отраслевой кейс по электроэнергетике.

Логотип: `assets/logo-mark.svg` (RAG-узлы: источник и три узла знаний).
Favicon: `assets/favicon.svg`.

Готов к публикации на **GitHub Pages**, Netlify или Vercel (как статика).

## Структура

```
website/
  index.html      — страница
  css/styles.css  — стили
  js/main.js      — меню, FAQ, форма заявок
  README.md
```

## Локальный просмотр

Откройте `index.html` в браузере или запустите простой сервер:

```bash
cd website
python -m http.server 8080
```

Откройте http://localhost:8080

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub (например `energonorm-landing`).
2. Залейте содержимое папки `website/` в корень репозитория.
3. В репозитории: **Settings → Pages → Source: Deploy from branch → main / root**.
4. Сайт будет доступен по адресу `https://ВАШ_ЛОГИН.github.io/energonorm-landing/`.

## Подключение формы заявок

На GitHub Pages нет серверного бэкенда. Используйте **Formspree** (бесплатный тариф для старта):

1. Зарегистрируйтесь на https://formspree.io
2. Создайте новую форму, скопируйте URL вида `https://formspree.io/f/xxxxxxx`
3. Откройте `js/main.js` и замените:

```javascript
formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
```

на ваш реальный endpoint.

**Альтернатива:** [Web3Forms](https://web3forms.com) — укажите `mode: "web3forms"` и `web3formsAccessKey`.

## Домен

Основной домен в репозитории — **istokai.ru** (файл `CNAME`). На нём должен открываться тот же сайт Zakon.AI.

Чтобы работали оба адреса:

1. В **Settings → Pages → Custom domain** укажите `istokai.ru` (как в `CNAME`).
2. В том же разделе добавьте **zakon-ai.ru** как дополнительный домен (GitHub Pages поддерживает несколько доменов на один сайт).
3. У регистратора для **обоих** доменов настройте DNS:
   - `CNAME` → `ВАШ_ЛОГИН.github.io` (или A-записи GitHub Pages для apex-домена).
4. Дождитесь выпуска HTTPS-сертификатов для обоих доменов.

После привязки проверьте, что `assets/` и пути к CSS/JS открываются корректно на обоих URL.

## Что на сайте

- Hero: RAG для корпоративной базы знаний (общий пример)
- Что такое RAG и зачем он нужен
- Как работает (5 шагов)
- Польза для бизнеса, сравнение с обычным чатом
- Сферы применения (HR, IT, юристы, производство и др.)
- **Кейс:** ИИ-консультант по электроэнергетике
- FAQ и форма заявки
