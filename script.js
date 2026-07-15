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
// 10. КНОПКА "НАЖМИ МЕНЯ!" (добавляется динамически)
// ========================
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    if (heading && !document.getElementById('magic-button')) {
        const button = document.createElement('button');
        button.id = 'magic-button';
        button.className = 'btn btn-magic';
        button.textContent = '✨ Нажми меня!';
        
        button.addEventListener('click', function() {
            const messages = [
                '🎉 Отлично! Вы нажали на кнопку!',
                '⭐ GitHub Pages — это круто!',
                '🚀 Ваш сайт работает с JavaScript!',
                '💡 Попробуйте обновить страницу!'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        });
        
        heading.parentNode.insertBefore(button, heading.nextSibling);
    }
});
