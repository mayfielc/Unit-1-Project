//global variables
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//functions for card flips
function flipCard() {
    if( lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
        // second click
        // hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
}

    // cards match || no match
    function checkForMatch() {
      let matchPair = firstCard.dataset.name === secondCard.dataset.name;

    matchPair ? disableCards() : unflipCards();     
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        // lockBoard = false;
        resetBoard();
    }, 1350);
}
//Destructuring 
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
// Immediately Invoked Function exxpression 
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();

cards.forEach(card => card.addEventListener('click', flipCard));