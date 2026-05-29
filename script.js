const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

});

/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});
