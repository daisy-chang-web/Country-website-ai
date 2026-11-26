document.documentElement.classList.add("js-nav");

const button = document.querySelector(".menu-button");
const menu = document.querySelector("#site-menu");

if (button && menu) {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      button.focus();
    }
  });

  const desktop = window.matchMedia("(min-width: 900px)");
  desktop.addEventListener("change", () => {
    if (desktop.matches) {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
}
