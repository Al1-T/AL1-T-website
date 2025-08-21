let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
const wrapper = document.querySelector(".roles-wrapper");
const roles = document.querySelectorAll(".role");
let current = 0;
const roleHeight = 90; // keep in sync with CSS

function showNextRole() {
  current++;
  wrapper.style.transition = "transform 0.8s ease-in-out";
  wrapper.style.transform = `translateY(-${current * roleHeight}px)`;

  if (current === roles.length - 1) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateY(0px)`;
      current = 0;
    }, 800); // match transition duration
  }
}

setInterval(showNextRole, 3000);
