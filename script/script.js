const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close button");
const sidebar = document.querySelector(".sidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
