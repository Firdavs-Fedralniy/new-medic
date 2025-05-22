
let secDocWrapperv = document.querySelector(".section-3_wrapper");
let firstXizmWrapper = document.querySelector(".section_wrapper");

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