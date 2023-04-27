const menus = document.querySelectorAll("#nav-menu .nav-link");

menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    // Remove selected class from all size options
    menus.forEach((menu) => {
      menu.classList.remove("active_menu");
    });
    // Add active_menu class to the clicked size option
    menu.classList.add("active_menu");
  });
});

// http://www.emilyridge.ie/
