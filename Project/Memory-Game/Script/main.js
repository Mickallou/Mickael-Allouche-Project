const myImages = [
    './Image/amazon.png',
    './Image/apple.png',
    './Image/dell.png',
    './Image/jordan.png',
    './Image/macDo.png',
    './Image/nasa.png',
    './Image/starbucks.png',
    './Image/windows.png'
];
const memoryGame = document.getElementById('memory-game');
const movesCounter = document.getElementById('moves-counter');
const newGameButton = document.getElementById('newGame');
const theCards = [...myImages, ...myImages];
let cardsFlipped = [];
let cardsMatched = [];
let moves = 0;

function startGame() {

    theCards.sort(() => Math.random() - 0.5);

    theCards.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.cardType = image;

        const img = document.createElement('img');
        img.classList.add('hidden');
        img.src = theCards[index];
        img.alt = 'Image';
        img.width = 100;
        img.height = 100;

        card.appendChild(img);

        card.addEventListener('click', flipCard);
        memoryGame.appendChild(card);
    });
}

function flipCard() {
    if (cardsFlipped.length < 2 && !this.classList.contains('flipped')) {
        const card = this;
        card.classList.add('flipped');
        cardsFlipped.push(card);

        if (cardsFlipped.length === 2) {
            setTimeout(checkMatch, 500);
            moves++;
            movesCounter.innerText = moves;
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = cardsFlipped;
    const firstCardType = firstCard.dataset.cardType;
    const secondCardType = secondCard.dataset.cardType;

    if (firstCardType === secondCardType) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        cardsMatched.push(firstCardType, secondCardType);

        if (cardsMatched.length === theCards.length) {
            alert('Congratulations! You found all pairs in ' + moves + ' moves.');
            resetGame();
        }
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
    }

    cardsFlipped = [];
}

function resetGame() {
    memoryGame.innerHTML = '';
    moves = 0;
    movesCounter.innerText = moves;
    cardsMatched = [];
    startGame();
}

newGameButton.addEventListener('click', resetGame);
startGame();