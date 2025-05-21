let doctorWrapper = document.querySelector(".royhat__wrapper");

function doctorRoyhat(){
    doctors.forEach((el) => {
      doctorWrapper.insertAdjacentHTML(
        "beforeend",
        `
            <div class="doctor__card new">
                  <img src="${el.img}" alt="" class="doctor__img neww">
                  <h2 class="doctor__name">${el.name}</h2>
                      <p class="doctor__kind">${el.lavozimi}</p>
              </div>

            `

      );
    });
        
}
doctorRoyhat()

