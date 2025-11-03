# DOLVO - Handyman Services Landing Page

Веб-сайт для сервиса вызова мастеров на дом DOLVO. Разработан на основе макета из Figma.

## Технологии

- HTML5
- CSS3 (с CSS переменными)
- Vanilla JavaScript
- Google Fonts (Montserrat, Lato, Poppins, Inter)

## Структура проекта

```
dolvo-web/
├── index.html          # Основная HTML страница
├── styles.css          # Стили с CSS переменными
├── script.js           # JavaScript для интерактивности
├── images/             # Изображения и иконки из Figma
│   ├── logo-color.svg
│   ├── logo-white.svg
│   ├── phone-icon.svg
│   ├── hero-image-3bba27.png
│   ├── phone-mockup.svg
│   ├── video-placeholder-694046.png
│   ├── task-icon.svg
│   ├── booking-illustration.svg
│   ├── app-devices.svg
│   ├── arrow-down.svg
│   ├── arrow-up.svg
│   ├── apple-icon.svg
│   ├── google-play-icon.svg
│   ├── location-icon.svg
│   └── cta-hand-phone-39fcc8.png
└── README.md           # Этот файл
```

## Секции сайта

1. **Hero Section** - Главный экран с заголовком и навигацией
2. **About Section** - Информация о сервисе с карточками преимуществ
3. **Easy Booking Section** - Процесс бронирования в 3 шага
4. **App Section** - Информация о мобильном приложении
5. **FAQ Section** - Часто задаваемые вопросы с аккордеоном
6. **CTA Section** - Призыв к действию с кнопками скачивания
7. **Footer** - Подвал с контактами и ссылками

## Функциональность JavaScript

- Плавная прокрутка по якорям
- Аккордеон для FAQ секции
- Эффекты при скролле (изменение header)
- Анимация появления элементов
- Параллакс эффект для фоновых элементов
- Hover эффекты для карточек
- Адаптивное меню для мобильных устройств

## CSS переменные

Проект использует CSS переменные для:
- Цветовой палитры
- Типографики (размеры шрифтов, семейства шрифтов, веса)
- Отступов и размеров
- Радиусов скругления
- Теней
- Переходов и анимаций

## Адаптивность

Сайт полностью адаптивен для следующих breakpoints:
- Desktop: 1920px и выше
- Laptop: 1440px
- Tablet: 1024px
- Mobile Large: 768px
- Mobile: 480px

## Запуск

Просто откройте файл `index.html` в браузере.

Для локального сервера можно использовать:

```bash
# Python 3
python -m http.server 8000

# или Node.js
npx http-server
```

Затем откройте `http://localhost:8000` в браузере.

## Источник дизайна

Дизайн взят из Figma проекта: [DOLVO Lending. Development](https://www.figma.com/design/EhryOX0gzl5roPjj3AmTKc/Dolvo-Lending.-Development?node-id=2003-9322)

Все изображения и графика скачаны из Figma с использованием Framelink MCP.

## Браузеры

Тестировано в:
- Chrome 120+
- Firefox 120+
- Safari 17+
- Edge 120+

## Автор

Разработано на основе дизайна Figma для DOLVO.

## Лицензия

Все права защищены © 2025 DoIvo
