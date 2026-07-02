const navToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const page = document.body.dataset.page;
document.querySelectorAll(".nav-menu a").forEach((link) => {
  if (link.dataset.page === page) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.querySelectorAll(".accordion-item").forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.setAttribute("aria-expanded", item.classList.contains("open"));
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      accordion.querySelectorAll(".accordion-item").forEach((sibling) => {
        sibling.classList.remove("open");
        const siblingTrigger = sibling.querySelector(".accordion-trigger");
        if (siblingTrigger) siblingTrigger.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !show);
    });
  });
});

const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = contactForm.querySelector(".form-note");
    if (note) note.textContent = "Thank you. Your message has been prepared for Gridteck's sales team.";
    contactForm.reset();
  });
}
