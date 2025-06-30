const pages = [
    {
        title: 'Starters',
        items: [
            {
                name: 'Bruschetta Trio',
                desc: 'Toasted baguette with tomato basil, whipped feta, and roasted red pepper tapenade.',
                price: 9,
            },
            {
                name: 'Crispy Calamari',
                desc: 'Lightly battered and fried, served with house-made lemon aioli.',
                price: 12,
            },
            {
                name: 'Seasonal Soup',
                desc: "Chef's daily creation, made fresh with local ingredients.",
                price: 8,
            },
            {
                name: 'Garden Greens Salad',
                desc: 'Mixed greens, cucumbers, heirloom tomatoes, house vinaigrette.',
                price: 7,
            },
        ],
    },
    {
        title: 'Main',
        items: [
            {
                name: 'Herb-Crusted Salmon',
                desc: 'Served with garlic mashed potatoes and grilled asparagus.',
                price: 21,
            },
            {
                name: 'Grilled Ribeye Steak',
                desc: '12 oz. cut with rosemary butter, roasted vegetables, and fries.',
                price: 28,
            },
            {
                name: 'Pasta Primavera',
                desc: 'Penne with seasonal vegetables, basil pesto, and shaved parmesan.',
                price: 17,
            },
            {
                name: 'Chicken Piccata',
                desc: 'Pan-seared chicken in lemon-caper sauce, served over linguine.',
                price: 19,
            },
            {
                name: 'Veggie Burger',
                desc: 'House-made black bean patty, arugula, avocado, and chipotle mayo on a brioche bun.',
                price: 14,
            },
        ],
    },
    {
        title: 'Drinks',
        items: [
            {
                name: 'Signature Cocktails',
                desc: 'Ask your server about today’s featured drinks.',
                price: 12,
            },
            {
                name: 'Wine by the Glass',
                desc: 'Red, white, and sparkling selections.',
                price: 9,
            },
            {
                name: 'Local Craft Beer',
                desc: 'Rotating taps from local breweries.',
                price: 7,
            },
            {
                name: 'Mocktails & Soft Drinks',
                desc: 'House sodas, iced teas, and non-alcoholic blends.',
                price: 4,
            },
        ],
    },
    {
        title: 'Desserts',
        items: [
            {
                name: 'Classic Tiramisu',
                desc: 'Layers of espresso-soaked ladyfingers and mascarpone cream.',
                price: 8,
            },
            {
                name: 'Molten Chocolate Cake',
                desc: 'Served warm with vanilla bean ice cream.',
                price: 9,
            },
            {
                name: 'Seasonal Fruit Tart',
                desc: 'Buttery crust filled with pastry cream and fresh fruit.',
                price: 8,
            },
        ],
    },
];

export const menuTable = (function() {
    const table = document.createElement('table');
    table.id = 'menu-table';
    table.append(document.createElement('thead'), document.createElement('tbody'));
    const theadRow = table.querySelector('thead');
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        switch (i) {
            case 0:
                const previousButton = document.createElement('button');
                previousButton.id = 'menu-previous';
                previousButton.textContent = '<';
                previousButton.addEventListener('click', () => { previousMenuPage() });
                previousButton.setAttribute('disabled', 'disabled');
                td.append(previousButton);
                break;
            case 1:
                td.id = 'menu-title';
                break;
            case 2:
                const nextButton = document.createElement('button');
                nextButton.id = 'menu-next';
                nextButton.textContent = '>';
                nextButton.addEventListener('click', () => { nextMenuPage() });
                td.append(nextButton);
                break;
        }
        theadRow.append(td);
    }

    let page = 0;

    const createTable = (parentNode) => {
        renderTable();
        parentNode.append(table);
    };

    const renderTable = () => {
        const title = table.querySelector('#menu-title');
        title.textContent = pages[page].title;

        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';

        const pageItems = pages[page].items;
        for (const item of pageItems) {
            const tr = document.createElement('tr');

            const name = document.createElement('td');
            name.textContent = item.name;

            const desc = document.createElement('td');
            desc.textContent = item.desc;

            const price = document.createElement('td');
            price.textContent = item.price;

            tr.append(name, desc, price);
            tbody.append(tr);
        }
    };

    const previousMenuPage = () => {
        page--;
        renderTable()

        const previousButton = document.querySelector('#menu-previous');
        const nextButton = document.querySelector('#menu-next');

        if (page == 0 && !previousButton.getAttribute('disabled')) previousButton.setAttribute('disabled', 'disabled');
        if (nextButton.getAttribute('disabled')) nextButton.removeAttribute('disabled');
    };

    const nextMenuPage = () => {
        page++;
        renderTable()

        const previousButton = document.querySelector('#menu-previous');
        const nextButton = document.querySelector('#menu-next');

        if (page == pages.length - 1) nextButton.setAttribute('disabled', 'disabled');
        if (previousButton.getAttribute('disabled')) previousButton.removeAttribute('disabled');
    };

    return { createTable };
})();
