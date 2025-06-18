const hamMenu = document.querySelector(".ham-menu");

const Menu = document.querySelector(".header-desktop .menu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   Menu.classList.toggle("active");
// });


hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  Menu.classList.toggle("active");
});

document.addEventListener("click", clickOutside);
function clickOutside(e) { 
   const inside = Menu.contains(e.target) || hamMenu.contains(e.target);
   if (!inside) {
      hamMenu.classList.remove("active");
      Menu.classList.remove("active");
   }
}

