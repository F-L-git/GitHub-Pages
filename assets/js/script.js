// ========================
// ПЕРЕВОДЫ (i18n)
// ========================
const translations = {
    ru: {
        greeting: ['Доброй ночи!', 'Доброе утро!', 'Добрый день!', 'Добрый вечер!'],
        timePrefix: '🕐',
        weather: 'Погода',
        temp: '°C',
        countdownTitle: '⏳ До следующего обновления сайта осталось:',
        days: 'д',
        hours: 'ч',
        minutes: 'м',
        seconds: 'с',
        updateOut: '🎉 Обновление уже вышло!',
        magicButton: '✨ Нажми меня!',
        // Заголовки секций
        aboutTitle: '🛠️ О проекте',
        aboutText1: 'Сайт создан для изучения возможностей бесплатного хостинга от <strong>GitHub</strong>.',
        aboutText2: 'Теперь сайт поддерживает <strong>интерактивность</strong> благодаря JavaScript 🌟',
        techTitle: '🧠 Технологии',
        techList: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'GitHub Pages'],
        jsTitle: '🧩 JavaScript-версия',
        jsText: 'В этой версии сайта добавлены скрипты, которые делают страницу живой:',
        jsList: ['📅 Приветственное сообщение в зависимости от времени суток', '🎨 Кнопка для смены темы (светлая/тёмная)', '🔢 Таймер обратного отсчёта до следующего обновления'],
        codeLabel: '📄 Пример кода (файл <code>script.js</code>):',
        setupTitle: '🚀 Настройка GitHub Pages',
        setupSteps: [
            'Перейдите в свой репозиторий на <strong>GitHub</strong>.',
            'Нажмите <strong>Settings</strong> (вкладка в верхнем меню).',
            'В левом меню выберите <strong>Pages</strong>.',
            'В разделе <strong>Branch</strong> выберите ветку (обычно <code>main</code> или <code>master</code>). Оставьте папку <code>/(root)</code>.',
            'Нажмите <strong>Save</strong>.',
            'Через пару минут сайт станет доступен по ссылке.'
        ],
        setupImportant: '<strong>Важно:</strong> Если репозиторий не <code>username.github.io</code>, сайт будет по адресу <code>username.github.io/имя-репозитория</code>.',
        tipsTitle: '🧑‍💻 Дополнительные советы',
        tipsList: [
            'Используйте <a href="https://getbootstrap.com" target="_blank">Bootstrap</a> или <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>.',
            'Добавьте иконки с <a href="https://fontawesome.com" target="_blank">Font Awesome</a>.',
            'Сделайте адаптивный дизайн.'
        ],
        troubleTitle: '❓ Что делать, если сайт не открывается?',
        troubleList: [
            'Проверьте ветку в настройках <strong>Pages</strong>.',
            'Посмотрите вкладку <strong>Actions</strong> — там могут быть ошибки.'
        ],
        jekyllTitle: '🎨 Альтернатива: Jekyll',
        jekyllText: 'Выберите тему в настройках <strong>Pages</strong> (кнопка <strong>Choose a theme</strong>). GitHub сгенерирует сайт на основе <code>README.md</code>.',
        footerCopyright: '© 2026, fl-git',
        footerVisits: '👀 Просмотров:',
        footerRepo: '📂 Репозиторий',
        // Для карты
        mapPopup: '📍 Москва',
        // Для игры (если добавите)
        guessTitle: '🎯 Угадай число',
        guessText: 'Я загадал число от 1 до 100. Попробуй угадать!',
        guessPlaceholder: 'Введите число',
        guessBtn: 'Проверить',
        guessResult: '',
        weatherCodes: {
            0: 'Ясно',
            1: 'Преимущественно ясно',
            2: 'Переменная облачность',
            3: 'Пасмурно',
            45: 'Туман',
            48: 'Туман с изморозью',
            51: 'Морось',
            53: 'Морось',
            55: 'Сильная морось',
            61: 'Небольшой дождь',
            63: 'Дождь',
            65: 'Сильный дождь',
            71: 'Небольшой снег',
            73: 'Снег',
            75: 'Сильный снег',
            80: 'Ливень',
            81: 'Сильный ливень',
            82: 'Проливной дождь',
            95: 'Гроза',
            96: 'Гроза с градом',
            99: 'Сильная гроза с градом'
        },
        toastMessages: ['🎉 Отлично!', '⭐ GitHub Pages — круто!', '🚀 JavaScript работает!', '💡 Обновите страницу!'],
        mapTitle: '📍 Наше местоположение',
        mapPopup: '📍 Москва'
    },
    en: {
        greeting: ['Good night!', 'Good morning!', 'Good afternoon!', 'Good evening!'],
        timePrefix: '🕐',
        weather: 'Weather',
        temp: '°C',
        countdownTitle: '⏳ Time until next site update:',
        days: 'd',
        hours: 'h',
        minutes: 'm',
        seconds: 's',
        updateOut: '🎉 Update is out!',
        magicButton: '✨ Click me!',
        aboutTitle: '🛠️ About Project',
        aboutText1: 'This site was created to learn about free hosting from <strong>GitHub</strong>.',
        aboutText2: 'Now the site supports <strong>interactivity</strong> thanks to JavaScript 🌟',
        techTitle: '🧠 Technologies',
        techList: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'GitHub Pages'],
        jsTitle: '🧩 JavaScript Version',
        jsText: 'This version of the site includes scripts that make the page lively:',
        jsList: ['📅 Greeting message depending on time of day', '🎨 Theme toggle button (light/dark)', '🔢 Countdown timer to next update'],
        codeLabel: '📄 Code example (file <code>script.js</code>):',
        setupTitle: '🚀 GitHub Pages Setup',
        setupSteps: [
            'Go to your repository on <strong>GitHub</strong>.',
            'Click <strong>Settings</strong> (tab at the top).',
            'In the left menu, select <strong>Pages</strong>.',
            'In the <strong>Branch</strong> section, select the branch (usually <code>main</code> or <code>master</code>). Leave folder <code>/(root)</code>.',
            'Click <strong>Save</strong>.',
            'In a few minutes the site will be available at the link.'
        ],
        setupImportant: '<strong>Important:</strong> If the repository is not <code>username.github.io</code>, the site will be at <code>username.github.io/repo-name</code>.',
        tipsTitle: '🧑‍💻 Additional Tips',
        tipsList: [
            'Use <a href="https://getbootstrap.com" target="_blank">Bootstrap</a> or <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>.',
            'Add icons with <a href="https://fontawesome.com" target="_blank">Font Awesome</a>.',
            'Make responsive design.'
        ],
        troubleTitle: '❓ What if site doesn\'t open?',
        troubleList: [
            'Check the branch in <strong>Pages</strong> settings.',
            'Look at the <strong>Actions</strong> tab — there may be build errors.'
        ],
        jekyllTitle: '🎨 Alternative: Jekyll',
        jekyllText: 'Choose a theme in <strong>Pages</strong> settings (button <strong>Choose a theme</strong>). GitHub will generate a site based on <code>README.md</code>.',
        footerCopyright: '© 2026, fl-git',
        footerVisits: '👀 Visits:',
        footerRepo: '📂 Repository',
        mapPopup: '📍 Moscow',
        guessTitle: '🎯 Guess the Number',
        guessText: 'I\'ve chosen a number from 1 to 100. Try to guess!',
        guessPlaceholder: 'Enter number',
        guessBtn: 'Check',
        guessResult: '',
        weatherCodes: {
            0: 'Clear',
            1: 'Mainly clear',
            2: 'Partly cloudy',
            3: 'Overcast',
            45: 'Fog',
            48: 'Fog with rime',
            51: 'Drizzle',
            53: 'Drizzle',
            55: 'Heavy drizzle',
            61: 'Slight rain',
            63: 'Rain',
            65: 'Heavy rain',
            71: 'Slight snow',
            73: 'Snow',
            75: 'Heavy snow',
            80: 'Rain shower',
            81: 'Heavy rain shower',
            82: 'Violent rain shower',
            95: 'Thunderstorm',
            96: 'Thunderstorm with hail',
            99: 'Severe thunderstorm with hail'
        },
        toastMessages: ['🎉 Great!', '⭐ GitHub Pages is cool!', '🚀 JavaScript works!', '💡 Refresh the page!'],
        mapTitle: '📍 Our Location',
        mapPopup: '📍 Moscow'
    }
};

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    });
}

let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI(lang);
    // Обновить кнопку языка
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'ru' ? '🇬🇧' : '🇷🇺';
        langBtn.title = lang === 'ru' ? 'Switch to English' : 'Переключить на русский';
    }
    // Показать уведомление
    showToast(lang === 'ru' ? '🌍 Язык переключён на русский' : '🌍 Language switched to English');
}

// ========================
// КАРТА (Leaflet)
// ========================
let map = null;
let mapMarker = null;

function initMap() {
    const container = document.getElementById('map');
    if (!container) {
        console.warn('Контейнер #map не найден');
        return;
    }
    // Проверяем, что L загружен
    if (typeof L === 'undefined') {
        console.warn('Leaflet не загружен, повторная попытка через 500ms');
        setTimeout(initMap, 500);
        return;
    }

    // Если карта уже создана, не создаём заново
    if (map) {
        map.invalidateSize();
        return;
    }

    map = L.map('map').setView([55.7558, 37.6173], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    mapMarker = L.marker([55.7558, 37.6173]).addTo(map);
    const popupText = translations[currentLang]?.mapPopup || '📍 Москва';
    mapMarker.bindPopup(popupText);
    mapMarker.openPopup();

    // Принудительно обновляем размер после рендеринга
    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 300);

    // Обновляем при изменении размера окна
    window.addEventListener('resize', () => {
        if (map) map.invalidateSize();
    });
}

function updateMapPopup(lang) {
    if (mapMarker) {
        const popupText = translations[lang]?.mapPopup || '📍 Москва';
        mapMarker.setPopupContent(popupText);
    }
}

// ========================
// ОПРЕДЕЛЕНИЕ МЕСТОПОЛОЖЕНИЯ (Geolocation API)
// ========================
function locateUser() {
    if (!navigator.geolocation) {
        showToast('❌ Ваш браузер не поддерживает геолокацию');
        return;
    }

    // Показываем уведомление о запросе
    showToast('📍 Запрашиваем ваше местоположение...');

    navigator.geolocation.getCurrentPosition(
        // Успех
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const accuracy = position.coords.accuracy; // точность в метрах

            // Показываем на карте
            showLocationOnMap(lat, lon, `📍 Вы здесь (точность ~${Math.round(accuracy)} м)`);
            showToast(`✅ Местоположение определено (${lat.toFixed(4)}, ${lon.toFixed(4)})`);
        },
        // Ошибка
        (error) => {
            console.error('Ошибка геолокации:', error);
            let message = '❌ Не удалось определить местоположение. ';
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message += 'Вы запретили доступ к геолокации.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    message += 'Информация о местоположении недоступна.';
                    break;
                case error.TIMEOUT:
                    message += 'Время ожидания истекло.';
                    break;
                default:
                    message += 'Неизвестная ошибка.';
            }
            showToast(message);
            // В случае ошибки показываем город по умолчанию (Москва)
            showLocationOnMap(55.7558, 37.6173, '📍 Москва (по умолчанию)');
        },
        {
            enableHighAccuracy: true,  // использовать GPS если доступен
            timeout: 10000,            // таймаут 10 секунд
            maximumAge: 60000          // кэшировать позицию 1 минуту
        }
    );
}

// ========================
// ОБНОВЛЕНИЕ КАРТЫ С НОВЫМИ КООРДИНАТАМИ
// ========================
function showLocationOnMap(lat, lon, popupText) {
    // Если карта ещё не создана, инициализируем её с этими координатами
    if (!map) {
        // Создаём карту с переданными координатами
        map = L.map('map').setView([lat, lon], 14); // зум ближе (14)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    } else {
        // Если карта уже есть, перемещаем вид на новые координаты
        map.setView([lat, lon], 14);
        // Если есть старый маркер, удаляем его
        if (mapMarker) {
            map.removeLayer(mapMarker);
        }
    }

    // Добавляем маркер с текстом
    mapMarker = L.marker([lat, lon]).addTo(map);
    mapMarker.bindPopup(popupText).openPopup();

    // Обновляем размер карты
    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 300);
}

function updateUI(lang) {
    const t = translations[lang];
    if (!t) return;

    // 1. Приветствие – обновляем динамически, потому что зависит от времени
    // Но мы можем обновить только текст приветствия при следующем вызове updateGreeting()
    // Для этого сохраним язык и используем его внутри updateGreeting
    // Мы переделаем updateGreeting чуть позже

    // 2. Заголовки и тексты секций
    document.querySelector('#about h2').innerHTML = t.aboutTitle;
    document.querySelector('#about p:first-of-type').innerHTML = t.aboutText1;
    document.querySelector('#about p:last-of-type').innerHTML = t.aboutText2;

    document.querySelector('#tech h2').innerHTML = t.techTitle;
    const techUl = document.querySelector('#tech ul');
    techUl.innerHTML = t.techList.map(item => `<li><code>${item}</code></li>`).join('');

    document.querySelector('#js-version h2').innerHTML = t.jsTitle;
    const jsP = document.querySelector('#js-version p:first-of-type');
    if (jsP) jsP.innerHTML = t.jsText;
    const jsUl = document.querySelector('#js-version ul');
    if (jsUl) jsUl.innerHTML = t.jsList.map(item => `<li>${item}</li>`).join('');
    const codeLabel = document.querySelector('#js-version p:last-of-type');
    if (codeLabel) codeLabel.innerHTML = t.codeLabel;

    document.querySelector('#setup h2').innerHTML = t.setupTitle;
    const setupOl = document.querySelector('#setup ol');
    setupOl.innerHTML = t.setupSteps.map(step => `<li>${step}</li>`).join('');
    const setupImportant = document.querySelector('#setup p:last-of-type');
    if (setupImportant) setupImportant.innerHTML = t.setupImportant;

    document.querySelector('#tips h2').innerHTML = t.tipsTitle;
    const tipsUl = document.querySelector('#tips ul');
    tipsUl.innerHTML = t.tipsList.map(item => `<li>${item}</li>`).join('');

    document.querySelector('#trouble h2').innerHTML = t.troubleTitle;
    const troubleUl = document.querySelector('#trouble ul');
    troubleUl.innerHTML = t.troubleList.map(item => `<li>${item}</li>`).join('');

    document.querySelector('#jekyll h2').innerHTML = t.jekyllTitle;
    const jekyllP = document.querySelector('#jekyll p');
    if (jekyllP) jekyllP.innerHTML = t.jekyllText;

    // 3. Футер
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) footerCopyright.textContent = t.footerCopyright;

    const footerVisitsText = document.getElementById('footer-visits-text');
    if (footerVisitsText) footerVisitsText.textContent = t.footerVisits;

    const repoLink = document.getElementById('footer-repo-link');
    if (repoLink) repoLink.innerHTML = t.footerRepo;

    // После обновления футера
    updateVisitCounter();

    // 4. Таймер (заголовок и единицы)
    const countdownTitle = document.querySelector('.countdown-container p');
    if (countdownTitle) countdownTitle.textContent = t.countdownTitle;
    // Единицы измерения обновляются внутри таймера, но мы можем их переопределить
    // При следующем обновлении таймера они будут браться из текущего языка
    // Для этого модифицируем startCountdown

    // 5. Кнопка "Нажми меня!"
    const magicBtn = document.getElementById('magic-button');
    if (magicBtn) magicBtn.textContent = t.magicButton;

    // 6. Погода – обновляем описание через функцию fetchWeather, которая уже использует язык?
    // Пока просто перезапросим погоду с новым языком
    fetchWeather(); // она перезапишет описание

    // Карта
    const mapTitle = document.querySelector('#map-section h2');
    if (mapTitle) mapTitle.textContent = t.mapTitle;
    updateMapPopup(lang);

    // 8. Обновляем приветствие (вызовем updateGreeting, который теперь будет использовать язык)
    updateGreeting();
}

// ========================
// 1. ПРИВЕТСТВИЕ ПО ВРЕМЕНИ
// ========================
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingIndex;
    if (hour >= 0 && hour < 6) greetingIndex = 0;
    else if (hour >= 6 && hour < 12) greetingIndex = 1;
    else if (hour >= 12 && hour < 18) greetingIndex = 2;
    else greetingIndex = 3;

    const t = translations[currentLang];
    const greetingText = t.greeting[greetingIndex];

    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = greetingText + ' 👋';
    }

    const timeEl = document.getElementById('time-display');
    if (timeEl) {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        timeEl.textContent = t.timePrefix + ' ' + now.toLocaleTimeString('ru-RU', options);
    }
}

updateGreeting();
setInterval(updateGreeting, 1000);

// ========================
// 2. КНОПКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ
// ========================
const themeToggle = document.getElementById('theme-toggle');

function updateThemeButton() {
    if (!themeToggle) return;
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.title = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
}

function setAutoTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    if (isDay) {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
    updateThemeButton();
}

setAutoTheme();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        updateThemeButton();
    });
}

// ========================
// 3. АНИМИРОВАННЫЙ СЧЁТЧИК ПОСЕЩЕНИЙ
// ========================
function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const startTime = performance.now();
    const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        element.textContent = current;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target;
        }
    };
    requestAnimationFrame(step);
}

function updateVisitCounter() {
    let count = localStorage.getItem('pageVisits');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('pageVisits', count);
    const counterEl = document.getElementById('count');
    if (counterEl) {
        const finalCount = count;
        counterEl.textContent = '0';
        animateCounter(counterEl, finalCount, 2000);
    }
}
updateVisitCounter();

// ========================
// 4. раскрывающиеся разделы
// ========================
document.querySelectorAll('.section h2').forEach((header) => {
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    const icon = document.createElement('span');
    icon.textContent = ' ▾';
    icon.style.fontSize = '1.2rem';
    header.appendChild(icon);

    const section = header.parentElement;
    const content = section.querySelector('p, ul, ol');
    if (!content) return;

    if (section.id !== 'about') {
        content.style.display = 'none';
        icon.textContent = ' ▸';
    }

    header.addEventListener('click', () => {
        const isOpen = content.style.display !== 'none';
        content.style.display = isOpen ? 'none' : 'block';
        icon.textContent = isOpen ? ' ▸' : ' ▾';
    });
});

// ========================
// 6. АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ (Intersection Observer) с задержкой
// ========================
if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                // Добавляем задержку: 0.1с * индекс
                entry.target.style.transitionDelay = (index * 0.1) + 's';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        // Убираем transitionDelay по умолчанию, чтобы не конфликтовать
        section.style.transitionDelay = '0s';
        observer.observe(section);
    });
}

// ========================
// 7. ТАЙМЕР ОБРАТНОГО ОТСЧЁТА
// ========================
function startCountdown(targetDate) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDiv = document.getElementById('countdown');
    const progressBar = document.getElementById('progress-bar');
    const initialDuration = targetDate - new Date().getTime();

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const progress = Math.max(0, (distance / initialDuration) * 100);

        if (progressBar) {
            progressBar.style.width = Math.min(100, progress) + '%';
        }

        if (distance < 0) {
            countdownDiv.innerHTML = '🎉 Обновление уже вышло!';
            if (progressBar) progressBar.style.width = '100%';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        // Обновляем единицы измерения в соответствии с языком
        const t = translations[currentLang];
        document.querySelector('.countdown-container #days')?.parentNode?.childNodes?.forEach(node => {
            if (node.nodeType === 3 && node.textContent.trim() === 'д') node.textContent = ' ' + t.days + ' ';
            if (node.nodeType === 3 && node.textContent.trim() === 'ч') node.textContent = ' ' + t.hours + ' ';
            if (node.nodeType === 3 && node.textContent.trim() === 'м') node.textContent = ' ' + t.minutes + ' ';
            if (node.nodeType === 3 && node.textContent.trim() === 'с') node.textContent = ' ' + t.seconds + ' ';
        });
    }

    update();
    setInterval(update, 1000);
}

const now = new Date();
const nextUpdate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
startCountdown(nextUpdate.getTime());

// ========================
// 8. ВСПЛЫВАЮЩИЕ УВЕДОМЛЕНИЯ (TOAST)
// ========================
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 3500);
}

// ========================
// 9. ВИДЖЕТ ПОГОДЫ (Open-Meteo)
// ========================
async function fetchWeather() {
    const lat = 55.7558;
    const lon = 37.6173;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ошибка загрузки погоды');
        const data = await response.json();

        const temp = Math.round(data.current_weather.temperature);
        const weatherCode = data.current_weather.weathercode;
        // Используем перевод из текущего языка
        const t = translations[currentLang];
        const description = t.weatherCodes[weatherCode] || 'Неизвестно';

        document.getElementById('weather-temp').textContent = temp;
        document.getElementById('weather-desc').textContent = description;
        document.getElementById('weather-icon').textContent = getWeatherEmoji(weatherCode);
    } catch (error) {
        console.error('Ошибка получения погоды:', error);
        document.getElementById('weather-desc').textContent = translations[currentLang].weatherCodes[0] || 'недоступно';
        document.getElementById('weather-icon').textContent = '🌧️';
    }
}

// Отдельная функция для эмодзи (не зависит от языка)
function getWeatherEmoji(code) {
    const emojiMap = {
        0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
        45: '🌫️', 48: '🌫️',
        51: '🌦️', 53: '🌦️', 55: '🌦️',
        61: '🌧️', 63: '🌧️', 65: '🌧️',
        71: '🌨️', 73: '🌨️', 75: '🌨️',
        80: '🌧️', 81: '🌧️', 82: '⛈️',
        95: '⛈️', 96: '⛈️', 99: '⛈️'
    };
    return emojiMap[code] || '🌡️';
}

/* function getWeatherInfo(code) {
    const weatherMap = {
        0: { emoji: '☀️', description: 'Ясно' },
        1: { emoji: '🌤️', description: 'Преимущественно ясно' },
        2: { emoji: '⛅', description: 'Переменная облачность' },
        3: { emoji: '☁️', description: 'Пасмурно' },
        45: { emoji: '🌫️', description: 'Туман' },
        48: { emoji: '🌫️', description: 'Туман с изморозью' },
        51: { emoji: '🌦️', description: 'Морось' },
        53: { emoji: '🌦️', description: 'Морось' },
        55: { emoji: '🌦️', description: 'Сильная морось' },
        61: { emoji: '🌧️', description: 'Небольшой дождь' },
        63: { emoji: '🌧️', description: 'Дождь' },
        65: { emoji: '🌧️', description: 'Сильный дождь' },
        71: { emoji: '🌨️', description: 'Небольшой снег' },
        73: { emoji: '🌨️', description: 'Снег' },
        75: { emoji: '🌨️', description: 'Сильный снег' },
        80: { emoji: '🌧️', description: 'Ливень' },
        81: { emoji: '🌧️', description: 'Сильный ливень' },
        82: { emoji: '⛈️', description: 'Проливной дождь' },
        95: { emoji: '⛈️', description: 'Гроза' },
        96: { emoji: '⛈️', description: 'Гроза с градом' },
        99: { emoji: '⛈️', description: 'Сильная гроза с градом' },
    };
    return weatherMap[code] || { emoji: '🌡️', description: 'Неизвестно' };
} */

// ========================
// 10. ОБРАБОТЧИКИ ПОСЛЕ ЗАГРУЗКИ DOM
// ========================
document.addEventListener('DOMContentLoaded', function () {

    // Кнопка "Нажми меня!"
    const magicBtn = document.getElementById('magic-button');
    if (magicBtn) {
        magicBtn.addEventListener('click', function () {
            const messages = translations[currentLang].toastMessages;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showToast(randomMessage);
        });
    }

    // Погода
    fetchWeather();
    // Инициализация карты
    initMap();
    // Определяем местоположение пользователя
    locateUser();
});

// Установить язык при загрузке
setLanguage(currentLang);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('reading-progress').style.width = progress + '%';
});

// ========================
// 11. ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ КАРТЫ
// ========================
function showLocationOnMap(lat, lon, popupText) {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.warn('Контейнер #map не найден');
        return;
    }

    // Проверяем, загружен ли Leaflet
    if (typeof L === 'undefined') {
        setTimeout(() => showLocationOnMap(lat, lon, popupText), 500);
        return;
    }

    if (!map) {
        map = L.map('map').setView([lat, lon], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    } else {
        map.setView([lat, lon], 14);
        if (mapMarker) map.removeLayer(mapMarker);
    }

    mapMarker = L.marker([lat, lon]).addTo(map);
    mapMarker.bindPopup(popupText).openPopup();

    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 300);
}

// ========================
// 12. СНЕГ (Canvas)
// ========================
(function initSnow() {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    const flakes = [];
    const FLAKE_COUNT = 200;

    // Настройки снежинок
    class Snowflake {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height; // начинаем за верхней границей
            this.size = Math.random() * 6 + 2; // размер от 2 до 8
            this.speed = Math.random() * 1.5 + 0.5; // скорость падения
            this.wind = (Math.random() - 0.5) * 0.3; // боковое отклонение
            this.opacity = Math.random() * 0.5 + 0.4;
        }
        update() {
            this.y += this.speed;
            this.x += this.wind + Math.sin(this.y * 0.01) * 0.2; // лёгкое покачивание
            // Если снежинка ушла за нижнюю границу – сбрасываем наверх
            if (this.y > height + 20) {
                this.reset();
                this.y = -10;
            }
            if (this.x < -10) this.x = width + 10;
            if (this.x > width + 10) this.x = -10;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
            // Лёгкое свечение
            ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0; // сбрасываем для производительности
        }
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', () => {
        resizeCanvas();
        // Пересоздаём снежинки при изменении размера, чтобы они равномерно распределились
        flakes.length = 0;
        for (let i = 0; i < FLAKE_COUNT; i++) {
            const flake = new Snowflake();
            flake.y = Math.random() * height; // распределяем по всей высоте
            flakes.push(flake);
        }
    });
    resizeCanvas();

    // Создаём снежинки
    for (let i = 0; i < FLAKE_COUNT; i++) {
        flakes.push(new Snowflake());
    }

    // Анимация
    function animateSnow() {
        ctx.clearRect(0, 0, width, height);
        flakes.forEach(flake => {
            flake.update();
            flake.draw();
        });
        requestAnimationFrame(animateSnow);
    }
    animateSnow();
})();

// ========================
// 13. КАСТОМНЫЙ КУРСОР + СЛЕД
// ========================
(function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const trail = document.getElementById('cursor-trail');

    if (!dot || !trail) {
        console.warn('Кастомный курсор: элементы не найдены');
        return;
    }

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Добавляем класс .hover при наведении на интерактивные элементы
    const interactive = document.querySelectorAll('a, button, .btn, .section h2, input, .section');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => dot.classList.add('hover'));
        el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
    });

    // (Опционально) скрыть стандартный курсор:
    document.body.style.cursor = 'none';
})();

// В script.js
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
// Использование после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('greeting');
    const originalText = h1.textContent;
    typeWriter(h1, originalText, 80);
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const city = document.getElementById('city-canvas');
    if (city) {
        city.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    });
});

// ========================
// 14. ИНТЕРАКТИВНЫЙ ГРАДИЕНТ (реакция на мышь)
// ========================
(function initInteractiveGradient() {
    let targetX = 50, targetY = 50; // целевые значения
    let currentX = 50, currentY = 50; // текущие значения (для сглаживания)

    // Обновляем целевые координаты при движении мыши
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        // Ограничиваем диапазон, чтобы градиент не уходил слишком далеко
        targetX = Math.min(90, Math.max(10, x));
        targetY = Math.min(90, Math.max(10, y));
    });

    // Плавное приближение текущих значений к целевым
    function smoothGradient() {
        currentX += (targetX - currentX) * 0.05; // скорость сглаживания
        currentY += (targetY - currentY) * 0.05;

        document.body.style.setProperty('--gradient-x', currentX + '%');
        document.body.style.setProperty('--gradient-y', currentY + '%');

        requestAnimationFrame(smoothGradient);
    }
    smoothGradient();
})();

let autoX = 0, autoY = 0;
setInterval(() => {
    autoX = Math.sin(Date.now() / 10000) * 5; // колебания ±5%
    autoY = Math.cos(Date.now() / 15000) * 5;
}, 100);
