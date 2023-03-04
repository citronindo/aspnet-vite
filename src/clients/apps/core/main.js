import { Helpers } from "@apps/utils/helpers";

(function(){
    let menuToggler = document.querySelectorAll('.layout-menu-toggle');
    const menuTogler = event => {
        event.preventDefault();
        Helpers.toggleCollapsed();
    };

    menuToggler.forEach(item => {
        item.addEventListener('click', menuTogler);
    });
})();
