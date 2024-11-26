document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // Toggle the menu visibility
    const isMenuOpen = navMenu.classList.contains("active");

    // Toggle the icon between hamburger and close
    menuToggle.innerHTML = isMenuOpen
      ? "<i class='bx bx-x'></i>" // Close icon
      : "<i class='bx bx-menu'></i>"; // Hamburger icon
  });
});
