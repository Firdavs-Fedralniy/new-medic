let elWrapp = document.querySelector(".xizmatlar__wrapper");


function xizmlar(){
    services.forEach((el) => {
      elWrapp.insertAdjacentHTML(
        "beforeend",
        ` <div class="xizmatlar__card">
          <img src="${el.img}" alt="" class="xizmatlar__img">
          <h2 class="xizmatlar__title">${el.name}</h2>
          <div class="xizmatlar__info">
            <p class="xizmatlar__name">${el.doctor}</p>
            <p class="xizmatlar__price">${el.price}</p>
          </div>
          <p class="xizmatlar__text">${el.about.Maxfiylik}</p>
          </div>`
      );
    });
}


xizmlar()
















