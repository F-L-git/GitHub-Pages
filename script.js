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
    const footer = document.querySelector('footer');
    const footerP = footer.querySelectorAll('p');
    if (footerP.length >= 2) {
        footerP[0].innerHTML = t.footerCopyright;
        footerP[1].innerHTML = `${t.footerVisits} <span id="count">0</span>`;
        // Ссылка на репозиторий – добавим, если есть
        const repoLink = footer.querySelector('a');
        if (repoLink) repoLink.innerHTML = t.footerRepo;
    }

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

    // 7. Карта – обновим popup
    updateMapPopup(lang);

    // 8. Обновляем приветствие (вызовем updateGreeting, который теперь будет использовать язык)
    updateGreeting();
}

// Функция обновления popup карты (будет реализована позже)
let mapMarker = null;
function updateMapPopup(lang) {
    if (mapMarker) {
        mapMarker.setPopupContent(translations[lang].mapPopup);
    }
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
// 4. АККОРДЕОН (раскрывающиеся разделы)
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
// 5. АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ (Intersection Observer)
// ========================
if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ========================
// 6. ТАЙМЕР ОБРАТНОГО ОТСЧЁТА
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
// 7. ВСПЛЫВАЮЩИЕ УВЕДОМЛЕНИЯ (TOAST)
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
// 8. ВИДЖЕТ ПОГОДЫ (Open-Meteo)
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
        const weatherInfo = getWeatherInfo(weatherCode);

        const tempEl = document.getElementById('weather-temp');
        const descEl = document.getElementById('weather-desc');
        const iconEl = document.getElementById('weather-icon');

        if (tempEl) tempEl.textContent = temp;
        if (descEl) descEl.textContent = weatherInfo.description;
        if (iconEl) iconEl.textContent = weatherInfo.emoji;
    } catch (error) {
        console.error('Ошибка получения погоды:', error);
        const descEl = document.getElementById('weather-desc');
        const iconEl = document.getElementById('weather-icon');
        if (descEl) descEl.textContent = 'недоступно';
        if (iconEl) iconEl.textContent = '🌧️';
    }
}

function getWeatherInfo(code) {
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
}

// ========================
// 9. ЧАСТИЦЫ ЗА КУРСОРОМ (Canvas)
// ========================
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouse = { x: null, y: null };
    const particles = [];
    const PARTICLE_COUNT = 150;
    const MAX_SPEED = 3;
    const ATTRACTION = 0.05;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 4 + 2;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.hue = Math.random() * 40 + 220;
            this.saturation = 80;
            this.lightness = 70;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        update() {
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 1) {
                    const force = ATTRACTION * (1 / (distance * 0.1 + 1));
                    this.speedX += dx * force * 0.02;
                    this.speedY += dy * force * 0.02;
                }
            }
            const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (speed > MAX_SPEED) {
                this.speedX = (this.speedX / speed) * MAX_SPEED;
                this.speedY = (this.speedY / speed) * MAX_SPEED;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= 0.98;
            this.speedY *= 0.98;
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function onMouseMove(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }
    function onMouseLeave() {
        mouse.x = null;
        mouse.y = null;
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('beforeunload', () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
    });
})();

// ========================
// 10. ДИНАМИЧЕСКИЙ ЗАГОЛОВОК ВКЛАДКИ
// ========================
let originalTitle = document.title;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👀 Вернись!';
    } else {
        document.title = originalTitle;
    }
});

// ========================
// 11. ОБРАБОТЧИКИ ПОСЛЕ ЗАГРУЗКИ DOM
// ========================
document.addEventListener('DOMContentLoaded', function() {
    // Кнопка "Нажми меня!"
    const magicBtn = document.getElementById('magic-button');
    if (magicBtn) {
        magicBtn.addEventListener('click', function() {
            const messages = [
                '🎉 Отлично!',
                '⭐ GitHub Pages — круто!',
                '🚀 JavaScript работает!',
                '💡 Обновите страницу!'
            ];
            showToast(messages[Math.floor(Math.random() * messages.length)]);
        });
    }

    // Погода
    fetchWeather();
});
