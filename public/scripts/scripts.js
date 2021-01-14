const modalOverlay = document.querySelector('.modalOverlay');
const hideButton = document.querySelectorAll('.hide-show')






const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        const pageId = card.id
        window.location.href = `/recipe?id=${pageId}`


    })
}


const buttons = document.querySelectorAll('.button')
const infos = document.querySelectorAll('.recipe__info')

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (button.innerHTML === 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
        } else {
            button.innerHTML = 'ESCONDER'
        }
    })
}

for (const button in buttons) {
    buttons[button].addEventListener('click', function() {
        if (infos[button].classList.contains('hide')) {
            infos[button].classList.remove('hide')
        } else {
            infos[button].classList.add('hide')
        }
    })
}


// for (let card of cards) {
//     card.addEventListener('click', function() {
//         modalOverlay.classList.add('active');


//         //   Getting the contents on the selectors of each card
//         const recipeImageId = card.getAttribute('id');
//         const recipeName = card.querySelector('h4').innerHTML;
//         const recipeAuthor = card.querySelector('p').innerHTML;


//         //   Replacing the content for the selected card 
//         modalOverlay.querySelector('img').src = `/layouts/assets/${recipeImageId}`
//         modalOverlay.querySelector('h4').innerHTML = `${recipeName}`;
//         modalOverlay.querySelector('p').innerHTML = `${recipeAuthor}`;

//     })
// }