const params = new URLSearchParams(window.location.search);

import { getProductById } from './product.js';

const outline = document.querySelector('#outline');

document.addEventListener('DOMContentLoaded', async () => {
    showProduct(await getProductById(params.get('id')));
});

const showProduct = async (product) => {

    const productDetail = `
    <div id="detail" class="container d-flex justify-content-between">
        <a href="/"><img width="40px" src="./assets/img/home.png" alt="Home"></a>
        <p>anasayfa / ${product.category.toLowerCase()} / ${product.title.toLowerCase()}</p>
    </div>

        <h1 class="text-center my-3">${product.title}</h1>

        <img class="rounded object-fit-cover shadow" src="${product.img}" alt="${product.title}">

        <h3 class="mt-4">
            <span>Ürünün Kategorisi : </span>
            <span class="text-success">${product.category}</span>
        </h3>

        <h3 class="mt-4">
            <span>Ürünün Fiyatı : </span>
            <span class="text-success">${(product.price * 32.05).toFixed(2)}₺</span>
        </h3>

        <p class="lead">
        ${product.desc}
        </p>
    `;

    outline.innerHTML = productDetail;

};