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

const resume = () => {
  window.open('https://drive.google.com/file/d/1TU2lzemlh3yLqphJQEyR6EF_7sKSe8dg/view?usp=share_link')
}

// http://www.emilyridge.ie/
