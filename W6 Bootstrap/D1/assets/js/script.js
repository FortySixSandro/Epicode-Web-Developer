const bottone = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
let isDark = false;

function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
}

bottone.addEventListener("click", function () {
    isDark = !isDark;
    applyTheme(isDark);
});

