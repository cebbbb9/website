
let cards = []
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');


function getRandomCard() {  
    let randomNumber =  (Math.floor(Math.random() * 13) + 1);
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    console.log(cards)
    renderGame()
}


function renderGame() {  
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "You win blackjack!"
    } else {
        isAlive = false;
        message = "You lose"
    }
    messageEl.textContent = message;
}
function newCard() {
    if (isAlive && hasBlackjack == false) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
