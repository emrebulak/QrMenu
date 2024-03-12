const products = document.querySelector('#products');

const get = async () => {
    const response = await fetch('db.json');
    const data = await response.json();
    return data;
};

const getProducts = (data) => {
    const items = data.map((product) =>
        `<a href='./detail.html?id=${product.id}' class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
            <img class="rounded shadow img-fluid" src="${product.img}" alt="${product.title}">
            <div>
                <div class="d-flex justify-content-between">
                    <h5>${product.title}</h5>
                    <p class="product-price-text text-success fw-bold">${(product.price * 32.05).toFixed(2)}₺</p>
                </div>

                <p class="lead">${product.desc}</p>
            </div>
        </a>`
    ).join('');

    products.innerHTML = items;
};

const filterProductsByCategory = async (category) => {
    const data = await get();

    if (category === 'all') {
        return data.menu;
    } else {
        const items = await data.menu.filter((product) => product.category === category);
        return items;
    }



};

const getProductById = async (id) => {
    const data = await get();
    const product = data.menu.find((product) => product.id == id);
    return product;
}

export { getProducts, filterProductsByCategory, get, getProductById };