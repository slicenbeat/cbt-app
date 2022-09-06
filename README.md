# CBT APP (React/Redux)

Приложение помогает вести дневник автоматических мыслей, фиксируя собственные мысли и эмоции. Записи в дневнике могут пригодиться для дальнейшей работы с психотерапевтом или самостоятельной работы над собственным мышлением.

## Демо

**⚠️Работает только получение записей. Изменения над записями являются фейковыми и не сохраняются. При локальном запуске данные в ```db.json``` изменяются.⚠️**

<a href="https://slicenbeat.github.io/cbt-app/#/"><img width="480" alt="image" src="https://user-images.githubusercontent.com/110350147/188583915-77dc4139-2b87-4391-aedb-8309b1a7cda5.png"></a>
## Стек

- React (function components), React Router (React-router-dom),
- Redux, Redux-thunk,
- Styled Components,
- Axios,
- JSON Server.

## Установка локально

- Скачать репозиторий или клонировать с помощью команды`git clone repo`.
- Установить все зависимости — `npm install`.
- Использовать `npm start` для запуска. Фронтенд сайта имеет порт запуска 3000, фейковый сервер — 3001. Порты настраиваются в `package.json` →

```
...
"scripts": {
    "start": "concurrently \"react-scripts start\" \"json-server --watch db.json --port 3001\""
    ...
```
