const closeBtn = document.querySelector(".close");
const menu = document.querySelector("nav ul");
const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  menu.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("visible");
});
