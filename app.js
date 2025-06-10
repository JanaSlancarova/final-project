const hamMenu = document.querySelector(".ham-menu");

const Menu = document.querySelector(".header-desktop .menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  Menu.classList.toggle("active");
});
