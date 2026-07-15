// ========================
// 1. ПРИВЕТСТВИЕ ПО ВРЕМЕНИ
// ========================
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = '';
    if (hour >= 0 && hour < 6) {
        greetingText = 'Доброй ночи!';
    } else if (hour >= 6 && hour < 12) {
        greetingText = 'Доброе утро!';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Добрый день!';
    } else {
        greetingText = 'Добрый вечер!';
    }
    
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = greetingText + ' 👋';
    }

    const timeEl = document.getElementById('time-display');
    if (timeEl) {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        timeEl.textContent = '🕐 ' + now.toLocaleTimeString('ru-RU', options);
    }
}

// Запускаем приветствие сразу и обновляем каждую секунду
updateGreeting();
setInterval(updateGreeting, 1000);

// ========================
// 2. ПОЛУЧАЕМ КНОПКУ (ПРАВИЛЬНЫЙ ID)
// ========================
const themeToggle = document.getElementById('theme-toggle'); // Обратите внимание: theme-toggle, а не themeToggle

// ========================
// 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ИКОНКИ КНОПКИ
// ========================
function updateThemeButton() {
    if (!themeToggle) return; // если кнопки нет — выходим
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.title = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
}

// ========================
// 4. АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ПО ВРЕМЕНИ
// ========================
function setAutoTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    if (isDay) {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
    updateThemeButton(); // обновляем иконку
}

// Запускаем авто-тему при загрузке
setAutoTheme();

// ========================
// 5. РУЧНОЕ ПЕРЕКЛЮЧЕНИЕ ПО КЛИКУ НА КНОПКУ
// ========================
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        updateThemeButton();
    });
}

// ========================
// 6. АНИМИРОВАННЫЙ СЧЁТЧИК ПОСЕЩЕНИЙ
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
        // Сохраняем финальное значение, а затем анимируем от 0
        const finalCount = count;
        counterEl.textContent = '0'; // начальное значение
        animateCounter(counterEl, finalCount, 2000); // 2 секунды
    }
}
updateVisitCounter();

// ========================
// 7. АККОРДЕОН (раскрывающиеся разделы)
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

    // По умолчанию все разделы, кроме первого, свернуты
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
// 8. АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ (Intersection Observer)
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
// 9. ТАЙМЕР ОБРАТНОГО ОТСЧЁТА (до обновления)
// ========================
function startCountdown(targetDate) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDiv = document.getElementById('countdown');
    const progressBar = document.getElementById('progress-bar');
    const initialDuration = targetDate - new Date().getTime(); // запоминаем при старте

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

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// Устанавливаем дату через 7 дней от текущего момента
const now = new Date();
const nextUpdate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
startCountdown(nextUpdate.getTime());

// ========================
// 10. ВСПЛЫВАЮЩИЕ УВЕДОМЛЕНИЯ (TOAST)
// ========================
// ... остальной код ...

// Всплывающие уведомления
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
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3500);
}

// Обработчик для кнопки (после загрузки DOM)
document.addEventListener('DOMContentLoaded', function() {
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
});

// ========================
// ВИДЖЕТ ПОГОДЫ (Open-Meteo — бесплатно, без ключа)
// ========================
async function fetchWeather() {
    // Координаты Москвы (можно заменить на свой город)
    const lat = 55.7558;
    const lon = 37.6173;
    // URL Open-Meteo API (текущая погода)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ошибка загрузки погоды');
        const data = await response.json();

        const temp = Math.round(data.current_weather.temperature);
        const weatherCode = data.current_weather.weathercode;

        // Преобразуем код погоды в текст и иконку
        const weatherInfo = getWeatherInfo(weatherCode);

        document.getElementById('weather-temp').textContent = temp;
        document.getElementById('weather-desc').textContent = weatherInfo.description;
        document.getElementById('weather-icon').textContent = weatherInfo.emoji;
    } catch (error) {
        console.error('Ошибка получения погоды:', error);
        document.getElementById('weather-desc').textContent = 'недоступно';
        document.getElementById('weather-icon').textContent = '🌧️';
    }
}

// Функция преобразования кода погоды Open-Meteo в текст и эмодзи
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

// Вызовите функцию при загрузке
document.addEventListener('DOMContentLoaded', fetchWeather);

// ========================
// 13. ЧАСТИЦЫ ЗА КУРСОРОМ (Canvas)
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

    // ---- Настройка размеров canvas ----
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ---- Класс частицы ----
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 4 + 2; // размер от 2 до 6
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            // Цвет: оттенок сине-фиолетового
            this.hue = Math.random() * 40 + 220; // 220–260 (сине-фиолетовый)
            this.saturation = 80;
            this.lightness = 70;
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        update() {
            // Если курсор на экране – притягиваемся к нему
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

            // Ограничиваем скорость
            const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (speed > MAX_SPEED) {
                this.speedX = (this.speedX / speed) * MAX_SPEED;
                this.speedY = (this.speedY / speed) * MAX_SPEED;
            }

            // Двигаем
            this.x += this.speedX;
            this.y += this.speedY;

            // Затухание скорости (трение)
            this.speedX *= 0.98;
            this.speedY *= 0.98;

            // Если частица вышла за границы – возвращаем с другой стороны
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

    // ---- Создаём частицы ----
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    // ---- Отслеживание мыши ----
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

    // ---- Анимационный цикл ----
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();

    // ---- Очистка при перезагрузке (опционально) ----
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
    });
})();

// Кнопка "Наверх"
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Динамический заголовок
let originalTitle = document.title;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👀 Вернись!';
    } else {
        document.title = originalTitle;
    }
});
// Обновляем оригинальный заголовок при изменении (если нужно)
// Можно также обновлять приветствие, но это опционально.
