import { getProducts, filterProductsByCategory, get } from './product.js';
import { getButtons } from './button.js';

const buttonContainer = document.querySelector('#button-container');


document.addEventListener('DOMContentLoaded', async () => {
    const data = await get();
    getButtons('all');
    getProducts(data.menu);
});

buttonContainer.addEventListener('click', async (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    const filteredData = await filterProductsByCategory(e.target.dataset.value);
    getProducts(filteredData);
    getButtons(e.target.dataset.value);
});
