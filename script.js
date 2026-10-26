
/* =========================================
   THE TIDY HOUSE
   Website interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------
     1. MOBILE NAVIGATION
  --------------------------------------- */

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  function closeMenu() {
    if (!menuToggle || !navigation) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );

      navigation.classList.toggle("is-open", !isExpanded);
    });

    // Close the menu after a navigation link is selected.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu if the user returns to desktop width.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeMenu();
      }
    });

    // Close the menu when Escape is pressed.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close the menu when the user clicks outside it.
    document.addEventListener("click", (event) => {
      const clickedInsideMenu =
        navigation.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInsideMenu) {
        closeMenu();
      }
    });
  }


  /* ---------------------------------------
     2. AUTOMATIC COPYRIGHT YEAR
  --------------------------------------- */

  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* ---------------------------------------
     3. DEMONSTRATION QUOTE FORM
  --------------------------------------- */

  const quoteForm = document.querySelector("#quote-form");
  const formMessage = document.querySelector("#form-message");

  if (quoteForm && formMessage) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Let the browser validate required fields first.
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }

      // This is a fictional portfolio demonstration.
      // No personal information is sent or stored.
      formMessage.textContent =
        "Thanks for trying the demo! This fictional website isn't connected to a real cleaning service, so your request hasn't been sent.";

      formMessage.setAttribute("role", "status");

      formMessage.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "nearest"
      });
    });
  }
});

