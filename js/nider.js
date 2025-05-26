let aWrapp = document.querySelector(".aa_wrapper");
let gWrapp = document.querySelector(".gg_wrapper");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let find = doctors.find((el) => el.id === id);
console.log(find);
console.log(find.name);

aWrapp.insertAdjacentHTML(
  "beforeend",
  `
     <div class="aa_content">
                <img class="fedya" src="${find.img}" alt="" />
              </div>
              <div class="aa_content">
                <div class="itemssss">
                  <p class="kiki">Bog'lanish uchun ma'lumot</p>
                  <p class="grwy">
                    <img class="de" src="/img/Vector.png" alt="" />${find.tel}
                  </p>
                  <p class="grwy">
                    <img
                      class="de"
                      src="/img/Vector.png"
                      alt=""
                    />${find.email}
                  </p>
                  <p class="grwy">
                    <img class="de" src="/img/location.png" alt="" />${find.xonasi} Xona
                  </p>
                </div>
                <div class="itemssss">
                  <p class="ish">Ish vaqti</p>
                </div>
                <div class="itemssss dedd">
                <div class="itemitem">
                   
                    <p>Dushanba </p>
                    <p>9:00  -  17:00</p>
                  </div>
                 <div class="itemitem">
                   
                    <p>Seshanba </p>
                    <p>9:00  -  17:00</p>
                  </div>
                  <div class="itemitem">
                   
                    <p>Chorshanba </p>
                    <p>9:00  -  17:00</p>
                  </div>
                 <div class="itemitem">
                   
                    <p>Payshanba </p>
                    <p>9:00  -  17:00</p>
                  </div>
                 <div class="itemitem">
                   
                    <p>Juma </p>
                    <p>9:00  -  17:00</p>
                  </div>
                  <div class="itemitem">
                   
                    <p>Shanba </p>
                    <p>9:00  -  17:00</p>
                  </div>
                </div>
              </div>
    `
);

    gWrapp.insertAdjacentHTML("beforeend" , `
        <div class="gg_content">
                <p class="gild">${find.name}</p>
                <p class="gild">Biografiya</p>
                <p class="niniga">
                  Muslimov Ulug'bek Yakubjanovich sahifasiga xush kelibsiz
                </p>
                <p class="grt">
                  ${find.biografiya}
                </p>

                <p class="niniga">${find.lavozimi}</p>
                <p class="grt">
                  Bemorlar bilan maslahatlashish, tashxis qo'yish, davolash
                  rejasini tuzish, xavf yuzaga kelishi mumkin bo'lgan
                  oqibatlarni baholash, jarrohlik operatsiyalarini bajarish,
                  favqulodda vaziyatlarda harakatlar algoritmini samarali va tez
                  qo'llash, yumshoq to'qimalarga kosmetik tikuvlarni
                  ehtiyotkorlik bilan qo'llash, jarrohlik yaralarini birlamchi
                  va ikkilamchi davolash
                </p>
                <p class="gildd">Ta'lim</p>
                <p class="grttt">
                  2-Toshkent Davlat Tibbiyot Instituti (TMA) 2000-2007
                  Mutaxassislik Magistratura: 2-Toshkent Davlat Tibbiyot
                  Instituti (TMA) 2008-2011 y. Maksillofasiyal jarrohlik,
                  Plastik jarrohlik Mutaxassisligi bo'yicha toifalar Oliy
                  toifali shifokor
                </p>
                <p class="gildd">${find.tajriba}</p>
                
              </div>
        `);

        let elBtn = document.querySelector(".modalniy");
        let elWrapp = document.querySelector(".modal");
        let Name = document.querySelector("#inp__name");
        let tel = document.querySelector("#inp__tel");
        let laz = document.querySelector("#inp__lavoz");
        let burger = document.querySelector(".bi-list");
        
        function Modal() {

          elBtn.disabled = true;

          Name.addEventListener("input", () => {
            if (
              Name.value.trim().length === 0 &&
            tel.value.trim().length === 0 &&
              laz.value.trim().length === 0
            ) {
              elBtn.disabled = true;
            } else {
              elBtn.disabled = false;
            }
          });
          
          elBtn.addEventListener("click", function () {
            elWrapp.classList.add("active"); // Показать модал
            elWrapp.innerHTML = `
              <div class="modal__wrapper">
                <button class="btn__modaal">X</button>
                <p class="text">Rahmat yuborganis uchun ${Name.value}</p>
              </div>
            `;

            let elRemove = document.querySelector(".btn__modaal");
            elRemove.addEventListener("click", function () {
              elWrapp.classList.remove("active"); // Скрыть модал
              elWrapp.innerHTML = ""; // Очистить содержимое
            });
          });


        }
        

       

        Modal()

        