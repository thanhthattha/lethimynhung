const btn = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const wrapper = document.querySelector(".wrapper");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", function () {
  sidebar.classList.add("active");
});
wrapper.addEventListener("click", close);
closeBtn.addEventListener("click", close);
function close() {
  sidebar.classList.remove("active");
}
