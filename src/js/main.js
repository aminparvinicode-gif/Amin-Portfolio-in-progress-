const nav = document.getElementById("nav");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const mainMenu = document.getElementById("mainMenu");

moon.style.transform = "translateX(30px)";
moon.addEventListener("click", () => {
  moon.style.transform = "translateX(30px)";
  sun.style.transform = "translateX(0px)";
});
sun.addEventListener("click", () => {
  sun.style.transform = "translateX(-29.5px)";
  moon.style.transform = "translateX(0px)";
});

