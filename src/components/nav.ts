export function initNav(): void {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}