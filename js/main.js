const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelector(".links");

openBtn.addEventListener("click", () => {
  links.classList.add("show");
  closeBtn.classList.add("show");
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  links.classList.remove("show");
  closeBtn.classList.remove("show");
  openBtn.style.display = "block";
});
