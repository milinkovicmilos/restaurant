import { load as homeLoad } from './home.js';
import { load as menuLoad } from './menu.js';
import { load as aboutLoad } from './about.js';

const map = {
    home: homeLoad,
    menu: menuLoad,
    about: aboutLoad,
};

const buttons = document.querySelectorAll('header > nav button')
for (const button of buttons) {
    button.addEventListener('click', function() {
        map[this.textContent.toLowerCase()]();
    });
}

homeLoad();
