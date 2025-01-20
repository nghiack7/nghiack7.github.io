// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = "var(--background-color)";
    navbar.style.boxShadow = "none";
  }
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});
