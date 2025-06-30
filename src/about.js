export const load = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const mainParagraph = document.createElement('p');
    mainParagraph.textContent = 'We are the restaurant';

    content.append(mainParagraph);
};
