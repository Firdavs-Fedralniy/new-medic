let elWrapp = document.querySelector(".xizmatlar__wrapper");
let docZanWrapper = document.querySelector(".doctors__info")

function xizmlar() {
  services.forEach((el) => {
    elWrapp.insertAdjacentHTML(
      "beforeend",
      ` <a href="tafsilot.html?id=${el.id}">
  <div class="xizmatlar__card">
    <img src="${el.img}" alt="" class="xizmatlar__img">
    <h2 class="xizmatlar__title">${el.name}</h2>
    <div class="xizmatlar__info">
      <p class="xizmatlar__name">${el.doctor}</p>
      <p class="xizmatlar__price">${el.price}</p>
    </div>
    <p class="xizmatlar__text">${el.about.Maxfiylik}</p>
    </div>
</a>`
    );
  });
}

xizmlar();


function doctorRoyhaatt() {
  let i = 0;
  while (i < 6) {
    docZanWrapper.insertAdjacentHTML(
      "beforeend",
      `
           <a href="./niger.html?id=${doctors[i].id}">
           <div class="doctor__card">
                        <img src="${doctors[i].img}" alt="" class="doctor__img">
                        <h2 class="doctor__name">${doctors[i].name}
                            <p class="doctor__kind">${doctors[i].lavozimi}</p>
                    </div>
</a>

            `
    );
    i++;
  }
}
doctorRoyhaatt();
