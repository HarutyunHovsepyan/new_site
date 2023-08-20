const toggle_btn = document.querySelector(".toggle_btn");
const toggle_btnIcon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");

toggle_btn.onclick = function () {
  dropdown_menu.classList.toggle("open");
  const isOpen = dropdown_menu.classList.contains("open");

  toggle_btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
};
