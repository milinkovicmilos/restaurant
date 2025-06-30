export const displayManger = (function() {
    const initialLoad = () => {
        const content = document.querySelector('#content');

        const mainParagraph = document.createElement('h1');
        mainParagraph.textContent = 'The Restaurant';

        const secondParagraph = document.createElement('h2');
        secondParagraph.textContent = 'Where Flavor Meets Pasion';

        const subParagraphOne = document.createElement('p');
        subParagraphOne.textContent = 'Come Hungry';

        const subParagraphTwo = document.createElement('p');
        subParagraphTwo.textContent = 'Leave Happy!';

        content.append(mainParagraph, secondParagraph, subParagraphOne, subParagraphTwo);
    };

    return { initialLoad };
})();
