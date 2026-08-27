# Zakon-AI — лендинг (zakon-ai.ru)

Статический сайт бренда **Zakon-AI**: технология RAG для корпоративной базы знаний.
В конце — отраслевой кейс по электроэнергетике.

Логотип: `assets/logo-mark-dark.png` / `assets/logo-mark-light.png` (soft-мозг, переключается с темой).
Favicon: `assets/favicon-dark.png` / `assets/favicon-light.png`.

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

Основной домен — **zakon-ai.ru** (файл `CNAME`).

**istokai.ru** по-прежнему должен указывать на GitHub Pages (те же A-записи), но при открытии автоматически перенаправляет на `zakon-ai.ru` (скрипт `js/redirect.js`).

### Настройка zakon-ai.ru (REG.RU)

| Тип | Имя | Значение |
|-----|-----|----------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `prof410.github.io` |

В GitHub: **Settings → Pages → Custom domain** → `zakon-ai.ru`. Добавьте `istokai.ru` как дополнительный домен для редиректа.

### istokai.ru → редирект на zakon-ai.ru

Сейчас `istokai.ru` должен **не показывать сайт**, а перенаправлять на `https://zakon-ai.ru`.

**Вариант А — через GitHub (сохраняет путь страницы):**

1. Откройте https://github.com/Prof410/istokai-landing/settings/pages  
2. В **Custom domain** уже должен быть `zakon-ai.ru`  
3. Нажмите **Add domain** и добавьте **`istokai.ru`** (второй домен, первый не удаляйте)  
4. Дождитесь зелёной галочки DNS для `istokai.ru`  
5. У REG.RU для `istokai.ru` — те же **4 A-записи** GitHub Pages (как у zakon-ai.ru)

После этого сработает `js/redirect.js` на всех страницах.

**Вариант Б — переадресация в REG.RU (проще, если GitHub не привязывается):**

1. REG.RU → **istokai.ru** → **Переадресация** / Web-переадресация  
2. URL: `https://zakon-ai.ru`  
3. Тип: постоянная (301), с сохранением пути — если есть такая опция  

При варианте Б DNS `istokai.ru` настраивает сам REG.RU, GitHub для этого домена не нужен.

## Что на сайте

- Hero: RAG для корпоративной базы знаний (общий пример)
- Что такое RAG и зачем он нужен
- Как работает (5 шагов)
- Польза для бизнеса, сравнение с обычным чатом
- Сферы применения (HR, IT, юристы, производство и др.)
- **Кейс:** ИИ-консультант по электроэнергетике
- FAQ и форма заявки
