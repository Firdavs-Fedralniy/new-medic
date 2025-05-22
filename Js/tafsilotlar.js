let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let find = services.find((el) => el.id === id);
console.log(find);
let plasWrap = document.querySelector(".plastik__wrap")



function xizmIsla(){
    plasWrap.insertAdjacentHTML(
      "beforeend",
      `
           <img src="${find.img}" alt="" class="plastik__img">
                      <div class="plastik__info">
                          <h2 class="plastik__title">${find.name}</h2>
                          <ul class="plastik__menu">
                              <li class="plastik__list">
                                  <h2 class="plastik__list__title">Nega aynan biz</h2>
                                  <p class="plastik__list__text">${find.about.Nega_aynan_biz}</p>
                              </li>
                              <li class="plastik__list">
                                  <h2 class="plastik__list__title">Zamonaviy_uskunalar</h2>
                                  <p class="plastik__list__text">${find.about.Zamonaviy_uskunalar}</p>
                              </li>
                              <li class="plastik__list">
                                  <h2 class="plastik__list__title">Maxfiylik</h2>
                                  <p class="plastik__list__text">${find.about.Maxfiylik}</p>
                              </li>
                              
                          </ul>
                      </div>
          `
    );
}

xizmIsla()