const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.toggle("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

/* ---------------------------- menu-hamburguesa ---------------------------- */

addEventListener("DOMContentLoaded", () => {
  const nav_toggle = document.querySelector(".nav_toggle");
  if (nav_toggle) {
    nav_toggle.addEventListener("click", () => {
      const nav_menu = document.querySelector(".nav_menu");
      nav_menu.classList.toggle("show");
    });
  }
});
