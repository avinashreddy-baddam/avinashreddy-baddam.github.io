// Highlight the current section link in the navbar
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll("#nav-links a")];

const byId = id => navLinks.find(a => a.getAttribute("href") === `#${id}`);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = byId(entry.target.id);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach(sec => observer.observe(sec));
