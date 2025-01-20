const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark"
  );

  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");

  localStorage.setItem(
    "theme",
    document.documentElement.getAttribute("data-theme")
  );
}

// Set initial theme
const savedTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");
document.documentElement.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", toggleTheme);
