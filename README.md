# YADRO Test Task

Angular-приложение с использованием standalone-компонентов, реализующее работу со списком пользователей через JSONPlaceholder API.

## 🔗 Демо

https://vladislav1490.github.io/YADRO-test-task/

## 📦 Стек

- Angular 17+ (standalone API)
- Ng-Zorro Ant Design
- TypeScript
- SCSS
- JSONPlaceholder (фейковый REST API)
- GitHub Pages (деплой)

## ⚙️ Установка и запуск

```bash
git clone https://github.com/vladislav1490/YADRO-test-task.git
cd YADRO-test-task
npm install
ng serve
```

## 🚀 Сборка и деплой

```bash
ng build --configuration production
npx angular-cli-ghpages --dir=dist/yadro-app/browser
```

## 📋 Функциональность

- Просмотр списка пользователей
- Поиск по имени и email
- Просмотр деталей пользователя
- Создание и редактирование пользователя (mock API)
- Удаление пользователя (mock API)

> API не сохраняет изменения — используется https://jsonplaceholder.typicode.com

## 📁 Структура

- `src/app/pages/` — компоненты списка, формы и деталей пользователя
- `src/app/services/` — взаимодействие с API
- `src/app/app.routes.ts` — маршруты
- `src/app/app.component.ts` — корневой компонент

---
