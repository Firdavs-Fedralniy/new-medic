const services = [
  {
    id: "1",
    name: "Ginekologiya",
    price: 150000,
    doctor: "Dr. Saida Karimova",
    img: "/images/1.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "2",
    name: "Estetik ginekologiya",
    price: 250000,
    doctor: "Dr. Nilufar Ubaydullaeva",
    img: "/images/2.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "3",
    name: "Dermatokosmetologiya",
    price: 200000,
    doctor: "Dr. Malika Zaynutdinova",
    img: "/images/3.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "4",
    name: "Dermatologiya",
    price: 180000,
    doctor: "Dr. Nodira G‘ulomova",
    img: "/images/4.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "5",
    name: "Trixologiya",
    price: 220000,
    doctor: "Dr. Anvar Norboyev",
    img: "/images/5.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "6",
    name: "Plastik jarrohlik",
    price: 350000,
    doctor: "Dr. Kamoliddin Raxmatullayev",
    img: "/images/6.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "7",
    name: "UTT",
    price: 160000,
    doctor: "Dr. Diyor Mahmudov",
    img: "/images/7.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "8",
    name: "Endokrinologiya",
    price: 200000,
    doctor: "Dr. Shaxnoza Azimova",
    img: "/images/8.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "9",
    name: "Kosmetologiya",
    price: 170000,
    doctor: "Dr. Dildora O‘rozboyeva",
    img: "/images/9.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "10",
    name: "Lazeri kosmetologiya",
    price: 230000,
    doctor: "Dr. Maftuna Yusupova",
    img: "/images/10.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
  {
    id: "11",
    name: "Laboratoriya, tahlillar",
    price: 140000,
    doctor: "Dr. Jamshid Xalilov",
    img: "/images/11.png",
    about: {
      Nega_aynan_biz:
        "Expert Medical Clinic o'z sohasida yetakchi bo'lishi bilan ajralib turadi. Biz malakali shifokorlar, zamonaviy texnologiyalar va mijozlarga yuqori darajadagi xizmat ko‘rsatish bilan faxrlanamiz.",
      Zamonaviy_uskunalar:
        "Klinikamizda dunyo standartlariga mos eng so‘nggi rusumdagi tibbiy uskunalar ishlatiladi. Har bir xizmat eng yuqori sifatda va xavfsizlik talablariga to‘liq mos ravishda amalga oshiriladi.",
      "Individual yondashuv":
        "Biz har bir bemorni alohida yondashuv asosida qabul qilamiz. Har bir tashrif buyurgan mijozning ehtiyojlari va holati chuqur tahlil qilinadi va individual reja asosida xizmat ko‘rsatiladi.",
      Maxfiylik:
        "Sizning shaxsiy ma’lumotlaringiz va tashrif tafsilotlari qat’iy tarzda sir saqlanadi. Bizda ''maxfiylik'' – eng ustuvor qadriyatlarimizdan biridir.",
    },
  },
];
