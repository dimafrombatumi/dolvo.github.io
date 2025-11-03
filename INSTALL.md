# Инструкции по установке и запуску

## Быстрый старт

### Вариант 1: Открыть напрямую в браузере

Просто откройте файл `index.html` в вашем браузере:

1. Перейдите в папку проекта
2. Дважды кликните на файл `index.html`
3. Или перетащите файл в окно браузера

### Вариант 2: Использовать локальный сервер (рекомендуется)

#### Python (если установлен)

```bash
# Перейдите в директорию проекта
cd /Users/dmitrykozlov/Documents/GitHub/dolvo-web

# Python 3
python3 -m http.server 8000

# Или Python 2
python -m SimpleHTTPServer 8000
```

Затем откройте в браузере: `http://localhost:8000`

#### Node.js (если установлен)

```bash
# Перейдите в директорию проекта
cd /Users/dmitrykozlov/Documents/GitHub/dolvo-web

# Используйте npx (без установки)
npx http-server -p 8000

# Или установите глобально
npm install -g http-server
http-server -p 8000
```

Затем откройте в браузере: `http://localhost:8000`

#### PHP (если установлен)

```bash
# Перейдите в директорию проекта
cd /Users/dmitrykozlov/Documents/GitHub/dolvo-web

# Запустите встроенный PHP сервер
php -S localhost:8000
```

Затем откройте в браузере: `http://localhost:8000`

## Что было реализовано

### ✅ HTML структура
- Семантическая разметка
- 7 основных секций (Hero, About, Easy Booking, App, FAQ, CTA, Footer)
- SEO-friendly структура
- Accessibility атрибуты

### ✅ CSS стили
- CSS переменные для всей палитры цветов
- Responsive дизайн для всех устройств
- Современные CSS эффекты (градиенты, тени, blur)
- Плавные переходы и анимации
- Grid и Flexbox layout

### ✅ JavaScript функциональность
- Плавная прокрутка по якорям
- Аккордеон для FAQ
- Анимации при скролле
- Параллакс эффекты
- Hover эффекты
- Адаптивное мобильное меню

### ✅ Изображения из Figma
- 16 файлов скачано из оригинального дизайна
- SVG иконки (векторные, масштабируемые)
- PNG изображения (с правильным кропом)
- Оптимизированы для web

## Структура файлов

```
dolvo-web/
├── index.html              # Главная страница
├── styles.css              # Стили (23KB)
├── script.js               # JavaScript (5KB)
├── README.md               # Документация
├── INSTALL.md              # Этот файл
└── images/                 # 16 файлов
    ├── logo-color.svg
    ├── logo-white.svg
    ├── phone-icon.svg
    ├── hero-image-3bba27.png
    ├── phone-mockup.svg
    ├── hero-buttons.svg
    ├── video-placeholder-694046.png
    ├── task-icon.svg
    ├── booking-illustration.svg
    ├── app-devices.svg
    ├── arrow-down.svg
    ├── arrow-up.svg
    ├── apple-icon.svg
    ├── google-play-icon.svg
    ├── location-icon.svg
    └── cta-hand-phone-39fcc8.png
```

## Особенности реализации

### Цвета (CSS переменные)
- Primary: #63A2F2
- Black: #121212 (с вариантами 80%, 60%, 40%, 20%)
- White: #FFFFFF
- Backgrounds: полупрозрачные градиенты

### Шрифты
- Montserrat (основной)
- Lato (вспомогательный)
- Poppins (для FAQ)
- Inter (для footer и UI элементов)

### Breakpoints
- 1920px+ (Desktop Large)
- 1440px (Desktop)
- 1024px (Tablet)
- 768px (Mobile Large)
- 480px (Mobile)

## Проверка работоспособности

После запуска проверьте:

1. ✅ Все изображения загружены
2. ✅ Навигация работает (плавная прокрутка)
3. ✅ FAQ аккордеон открывается/закрывается
4. ✅ Hover эффекты на карточках
5. ✅ Адаптивность на мобильных
6. ✅ Параллакс эффекты при скролле

## Поддержка браузеров

- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 75+

## Следующие шаги (опционально)

1. **Оптимизация изображений**: Можно дополнительно сжать PNG файлы
2. **WebP формат**: Конвертировать PNG в WebP для лучшей производительности
3. **Lazy loading**: Добавить отложенную загрузку изображений
4. **Analytics**: Интегрировать Google Analytics
5. **Формы**: Добавить рабочие формы с валидацией
6. **Backend**: Подключить к серверу для обработки заявок

## Помощь

Если возникли проблемы:

1. Проверьте, что все файлы в папке `images/`
2. Убедитесь, что браузер поддерживает современный CSS
3. Откройте консоль разработчика (F12) для проверки ошибок
4. Попробуйте другой браузер

## Контакты

Проект разработан на основе дизайна из Figma: 
https://www.figma.com/design/EhryOX0gzl5roPjj3AmTKc/Dolvo-Lending.-Development

---

**Готово к использованию!** 🚀
