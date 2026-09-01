const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

document.getElementById("username").innerText =
    user
        ? `Привет, ${user.first_name}! 👋`
        : "Добро пожаловать!";

const products = [

    {
        id: 1,
        name: "START",
        price: 2,
        desc: "Тестовый аккаунт с моментальной выдачей.",
        img: "resized-image_part_001.jpg"
    },

    {
        id: 2,
        name: "VIP",
        price: 2,
        desc: "VIP тестовый аккаунт.",
        img: "resized-image_part_003.jpg"
    },

    {
        id: 3,
        name: "PREMIUM",
        price: 3,
        desc: "Расширенный тестовый аккаунт.",
        img: "resized-image_part_002.jpg"
    }

];

const list = document.getElementById("products");

products.forEach(product => {

    list.innerHTML += `

        <div class="card">

            <img src="${product.img}" alt="${product.name}">

            <div class="content">

                <div class="title">${product.name}</div>

                <div class="desc">${product.desc}</div>

                <div class="bottom">

                    <div class="price">${product.price} ⭐</div>

                    <button
                        class="buy"
                        onclick="buy(${product.id})">

                        Купить

                    </button>

                </div>

            </div>

        </div>

    `;

});

function buy(id) {

    tg.sendData(JSON.stringify({

        action: "buy",

        product: id

    }));

    tg.close();

}
