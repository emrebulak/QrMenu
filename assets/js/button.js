import { buttonData } from './constants.js';

const buttonContainer = document.querySelector('#button-container');

export const getButtons = (activeText) => {
    const items = buttonData.map((button) =>
        `<button class="btn btn-outline-dark ${button.value == activeText && 'btn-dark text-white'}" data-value="${button.value}">${button.text}</button>`
    ).join('');

    buttonContainer.innerHTML = items;
}

