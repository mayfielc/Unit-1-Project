//global variables
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;

//functions for card flips
function flipCard() {
    this.classList.toggle('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

    // cards match?
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
        console.log('function was excuted!')
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));