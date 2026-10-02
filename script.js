
/* =====================================
   JUNEJA FANCY LIGHT
   Navigation + Contact Setup
===================================== */

// Shop ka actual number milne par yahan add karna.
// Country code ke saath, bina +, spaces ya dashes ke.
// Example format: 919876543210

const OWNER_WHATSAPP = "";
const OWNER_PHONE = "";

document.addEventListener("DOMContentLoaded", function () {
  // MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });

    // Escape key closes the mobile menu.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  // AUTOMATIC FOOTER YEAR
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // WHATSAPP LINKS
  document.querySelectorAll(".whatsapp-link").forEach(function (link) {
    if (OWNER_WHATSAPP) {
      const message =
        "Hello Juneja Fancy Light! I would like to know more about your lighting collection.";

      link.href =
        "https://wa.me/" +
        OWNER_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);

      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      // Avoid opening a broken WhatsApp link until a number is added.
      link.href = "#contact";

      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert(
          "WhatsApp number abhi set nahi hua hai. Shop ka actual number script.js mein add karein."
        );
      });
    }
  });

  // PHONE LINKS
  document.querySelectorAll(".phone-link").forEach(function (link) {
    if (OWNER_PHONE) {
      link.href = "tel:" + OWNER_PHONE;
    } else {
      link.href = "#contact";

      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert(
          "Phone number abhi set nahi hua hai. Shop ka actual number script.js mein add karein."
        );
      });
    }
  });

  // IMAGE ERROR CHECK
  // Broken images will be logged in the browser console.
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      console.error("Image failed to load:", img.getAttribute("src"));
    });
  });
});
