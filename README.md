# Istok.AI — лендинг (istokai.ru)

Статический сайт бренда **Istok.AI**: технология RAG для корпоративной базы знаний.
В конце — отраслевой кейс по электроэнергетике.

Логотип: `assets/logo-mark.svg` (исток реки — три потока из источника).
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

Сайт рассчитан на **https://istokai.ru**. После привязки домена в GitHub Pages / хостинге проверьте, что `assets/` и пути к CSS/JS открываются корректно.

## Что на сайте

- Hero: RAG для корпоративной базы знаний (общий пример)
- Что такое RAG и зачем он нужен
- Как работает (5 шагов)
- Польза для бизнеса, сравнение с обычным чатом
- Сферы применения (HR, IT, юристы, производство и др.)
- **Кейс:** ИИ-консультант по электроэнергетике
- FAQ и форма заявки
