let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let find = services.find((el) => el.id === id);
let link = document.querySelector(".idd")
let plasWrap = document.querySelector(".plastik__wrap")
let docZanZanWrapper = document.querySelector(".doctors__info");
let eselsi = document.querySelector(".carusel")
let next = document.querySelector(".next")
let img = document.querySelector(".plastik__img")
let old = document.querySelector(".old")

function doctorRoyhaatt() {
  let i = 0;
  while (i < 6) {
    docZanZanWrapper.insertAdjacentHTML(
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
let ia = 0;

function newImg(){
    next.addEventListener("click",function(){
        
        ia++;
        if(ia == services.length){
            ia = 0
        }
            img.setAttribute("src", `${services[ia].img}`)
            link.setAttribute("href", `./tafsilot.html?id=${ia+1}`);
          
        
    })
    old.addEventListener("click", function () {
      ia--;
      if (ia < 0) {
        ia = services.length;
      }
      img.setAttribute("src", `${services[ia].img}`);
      link.setAttribute("href", `./tafsilot.html?id=${ia + 1}`);
    });
}
newImg()

function base(){
if (!find.id == 0){
eselsi.classList.add("non")
}
}
base()

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


