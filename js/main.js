// ========== MENU MOBILE ==========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuMobile = document.getElementById("menu-mobile");

  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("click", () => {
      menuMobile.classList.toggle("hidden");
    });
  }

  // ========== MODO ESCURO ==========
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Verifica se há tema salvo no localStorage
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      html.classList.toggle("dark");

      // Atualiza o ícone e salva o estado
      if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // ícone sol
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // ícone lua
      }
    });
  }

  // Ajusta ícone conforme tema atual ao carregar
  if (themeToggle) {
    themeToggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
  }
});
