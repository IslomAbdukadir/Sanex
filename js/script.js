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
        "tyopliypol": "Тёплый пол",
        "exit": "Выход",
        "waterSupply": "Водоснабжение",
        "sanitation": "Водоотведение",
        "seminars": "Семинары",
        "brands": "Популярные бренды",
        "size": "Размер:",
        "color": "Цвет:",
        "form": "Форма:",
        "desc": "Описание:",
        "buy": "КУПИТЬ",
        "similar": "Похожие товары"
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
        "tyopliypol": "Issiq pol",
        "exit": "Chiqish",
        "waterSupply": "Suv ta'minoti",
        "sanitation": "Kanalizatsiya",
        "seminars": "Seminarlar",
        "brands": "Mashxur brendlar",
        "size": "O'lcham:",
        "color": "Rangi:",
        "form": "Formasi:",
        "desc": "Tavsif:",
        "buy": "SOTIB OLMOQ",
        "similar": "O'xshash maxsulotlar"
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


const product = {
    plainProduct: {
        name: 'Vaillant',
        price: 4150000,
        size: '40см/50см',
        color: 'Белый',
        form: 'Прямоугольный',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas tellus, quis viverra at augue consequat augue dictum. Interdum semper mi ipsum sit ridiculus mauris fermentum eleifend non. Feugiat et urna tincidunt faucibus. Feugiat mauris sagittis vitae.',
        amount: 1,
        get calcSum() {
            return this.price * this.amount;
        }
    }
}

let btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        // console.log(btn[i]);
        prepare(this);
    })
}

function prepare(el) {
    let parent = el.closest('.buy__buttons');
    let num = parent.querySelector('.num');
    let amount = product.plainProduct.amount;
    let sym = el.getAttribute('data-symbol');
    let price = document.querySelector('.buy__price');
    
    if (sym == '+' && amount < 50) {
        amount++;
    } else if (sym == '-' && amount > 1) {
        amount--;
    }
    
    num.innerHTML = amount;
    product.plainProduct.amount = amount;
    price.innerHTML = product.plainProduct.calcSum + " so'm";
    
    // console.log(amount);
}


let addCart = document.querySelector(".buy__button");
let cartBody =document.querySelector(".cart__body");
let cart = document.querySelector(".cart");

addCart.addEventListener('click', function() {
    cartBody.style.overflow = "hidden";
    cart.style.display = "flex"
}
)


