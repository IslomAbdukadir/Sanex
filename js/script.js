var arrLang = {
    "ru": {
        "product": "Продукция",
        "about": "О компании",
        "contact": "Контакты",
        "ourworks": "Наши работы",
        "headerTitle": "Надежность и качество для вашего дома",
        "headerTxt": "Большой ассортимент сантехнического оборудования, отопительного оснащения, электро-инструментов и других товаров",
        "shopTitle": "3000 товаров в наличии",
        "about2": "Sanex",
        "heating": "Отопление",
        "waterheating": "Водонагреватели",
        "kitchen": "Кухонная гарнитура",
        "bathroom": "Ванная гарнитура",
        "electro": "Электро-инструменты",
        "hand": "Ручные инструменты",
        "fitings": "Фитинги",
        "others": "Прочее",
        "anyQuestions":"Остались вопросы?",
        "send": "Отправить",
        "dvuxkontur": "Двухконтурный котёл",
        "radiatori": "Радиаторы",
        "kollektor": "Коллектор",
        "tyopliypol": "Тёплый пол"
    },
    "uz": {
        "product": "Maxsulotlar",
        "about": "Biz haqimizda",
        "contact": "Aloqa",
        "ourworks": "Bizning loyihalar",
        "headerTitle": "Uyingiz uchun sifat va mustahkamlik",
        "headerTxt": "Santexnika va isitish uskunalari, elektr asboblari va boshqa tovarlarning keng assortimenti",
        "shopTitle": "3000dan ortiq maxsulotlar",
        "about2": "Sanex",
        "heating": "Isitish",
        "waterheating": "Suv isitgichlari",
        "kitchen": "Oshxona to'plami",
        "bathroom": "Hammom to'plami",
        "electro": "Elektr asboblari",
        "hand": "Qo'l asboblari",
        "fitings": "Fitinglar",
        "others": "Boshqalar",
        "anyQuestions":"Savolingiz bormi?",
        "send": "Jo'natmoq",
        "dvuxkontur": "Ikki davrali qozon",
        "radiatori": "Radiatorlar",
        "kollektor": "Kollektor",
        "tyopliypol": "Issiq pol"
    }, 
};

$(function() {
    
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        $(".lang").each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr("key")]);                
        });
        $(".translate").toggleClass("active");
    });
});

var menu = document.querySelector(".header__menu");
var list = document.querySelector(".list");
var list2 = document.querySelector(".header__list2");
var body = document.querySelector("body")



menu.addEventListener("click", function () {
    menu.style.display = "none";
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "center";
    list.style.width = "100%";
    list.style.height = "100%";
    list.style.position = "absolute";
    body.style.overflow = "hidden";
    list.style.zIndex = "998";
    list.style.top = "50%";
    list.style.left = "50%";
    list.style.transform = "translate(-50%,-50%)";
    list.style.background = "var(--main)";
    list.style.rowGap = "15px";
    list.style.rowGap = "15px";    
    list2.style.zIndex = "999";    
    list2.style.display = "flex";   
})



