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
updateGreeting();
setInterval(updateGreeting, 1000);

// ========================
// 2. ПОЛУЧАЕМ КНОПКУ СРАЗУ (ПЕРЕД ИСПОЛЬЗОВАНИЕМ)
// ========================
const themeToggle = document.getElementById('theme-toggle');

// ========================
// 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ИКОНКИ КНОПКИ
// ========================
function updateThemeButton() {
    if (!themeToggle) return; // если кнопка не найдена, выходим
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.title = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
}

// ========================
// 4. АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ПО ВРЕМЕНИ СУТОК
// ========================
function setAutoTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    if (isDay) {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
    updateThemeButton(); // теперь themeToggle уже существует
}
setAutoTheme();

// ========================
// 5. РУЧНОЕ ПЕРЕКЛЮЧЕНИЕ ПО КЛИКУ
// ========================
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        updateThemeButton();
    });
}

// ========================
// 6. СЧЁТЧИК ПОСЕЩЕНИЙ
// ========================
function updateVisitCounter() {
    let count = localStorage.getItem('pageVisits');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('pageVisits', count);
    document.getElementById('count').textContent = count;
}
updateVisitCounter();

// ========================
// 7. АККОРДЕОН
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
// 8. АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ
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
// 9. ТАЙМЕР ОБРАТНОГО ОТСЧЁТА
// ========================
function startCountdown(targetDate) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDiv = document.getElementById('countdown');

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownDiv.innerHTML = '🎉 Обновление уже вышло!';
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
// 10. КНОПКА "НАЖМИ МЕНЯ!"
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
