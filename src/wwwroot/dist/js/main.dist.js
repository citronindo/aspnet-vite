import { H as Helpers } from "./libs/helpers.dist.js";
(function() {
  let menuToggler = document.querySelectorAll(".layout-menu-toggle");
  const menuTogler = (event) => {
    event.preventDefault();
    console.info("menuToggler is clicked");
    Helpers.toggleCollapsed();
  };
  menuToggler.forEach((item) => {
    console.info("menuToggler is binded");
    item.addEventListener("click", menuTogler);
  });
})();
