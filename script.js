// Juneja Fancy Light - Website JavaScript

// IMPORTANT:
// Apna WhatsApp number aur phone number baad mein yahan add karna.
// Country code ke saath number likhna, bina +, spaces ya dashes ke.

const OWNER_WHATSAPP = "";
const OWNER_PHONE = "";

// Mobile Navigation Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    });

    // Menu link click karne par mobile menu band ho jayega
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer mein current year automatically update hoga
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // WhatsApp links ko number milne par automatically update karo
  if (OWNER_WHATSAPP) {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      const message =
        link.getAttribute("data-message") ||
        "Hello Juneja Fancy Light! I would like to know more about your lighting collection.";

      link.href =
        "https://wa.me/" +
        OWNER_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);
    });
  }

  // Phone call links ko number milne par automatically update karo
  if (OWNER_PHONE) {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.href = "tel:" + OWNER_PHONE;
    });
  }
});
