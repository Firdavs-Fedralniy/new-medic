
let secDocWrapperv = document.querySelector(".section-3_wrapper");
let firstXizmWrapper = document.querySelector(".section_wrapper");
const burgerIcon = document.querySelector(".bi-list");
const block = document.querySelector(".block");
const menu = document.querySelector(".bur__menu");
let Elbura = document.querySelector(".bur__a")
// let bur = document.querySelector(".bur")

burgerIcon.addEventListener("click", function () {
  // Показать меню и скрыть иконку
  block.classList.add("active","animation");

  menu.classList.add("active","animation");
  burgerIcon.classList.add("hidden");
  let ochir = document.querySelector(".ips");
  ochir.addEventListener("click", function () {
  
    block.classList.remove("active")
    menu.classList.remove("active");
    burgerIcon.classList.remove("hidden");
  });
  
});


document.querySelectorAll(".bur__a").forEach((link) => {
  link.addEventListener("click", () => {
    block.classList.remove("active");
    menu.classList.remove("active");
    burgerIcon.classList.remove("hidden");
  });
});

// Закрытие при ресайзе
window.addEventListener("resize", function () {
  if (window.innerWidth > 480) {
    block.classList.remove("active");
    menu.classList.remove("active");
    burgerIcon.classList.remove("hidden");
  }
});



function xizmatRoyhat(){
  let i = 0
  while(i<6){
    firstXizmWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="tafsilot.html?id=${services[i].id}">
  <div class="section_content">
    <img src="${services[i].img}" alt="" />
    <p class="with-1">${services[i].name}</p>
    <p class="with">
      ${services[i].about.Maxfiylik}
    </p>
  </div>
</a>

      `
    );
    i++
  }
}
xizmatRoyhat()

function doctorRoyhaat() {
  let i = 0;
  while(i < 6){
    secDocWrapperv.insertAdjacentHTML(
      "beforeend",
      `
           <a href="./niger.html?id=${doctors[i].id}">
           <div class="section-3_content">
  <img src="${doctors[i].img}" alt="" />
  <p class="huhu">${doctors[i].name}</p>
  <p class="nini">${doctors[i].lavozimi}</p>
</div>
</a>

            `
    );
    i++
  }
}
doctorRoyhaat();



















/*
  
*/