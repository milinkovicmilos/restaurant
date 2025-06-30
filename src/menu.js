import { menuTable } from './menuTable.js';

export const load = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    menuTable.createTable(content);
};
