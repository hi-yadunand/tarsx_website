const switcher = document.getElementById("themeSwitcher");

switcher.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");
});
