const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active');


        //   Getting the contents on the selectors of each card
        const dishImageId = card.getAttribute('id');
        const dishName = card.querySelector('h4').innerHTML;
        const dishAuthor = card.querySelector('p').innerHTML;


        //   Replacing the content for the selected card 
        modalOverlay.querySelector('img').src = `/layouts/assets/${dishImageId}`
        modalOverlay.querySelector('h4').innerHTML = `${dishName}`;
        modalOverlay.querySelector('p').innerHTML = `${dishAuthor}`;

    })
}

document.querySelector('.closeModal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
})