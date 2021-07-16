let mesasgeEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "name",
    chips: 123
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10)
    {
        return 11
    }else if(randomNumber === 1){
        return 10
    }else {
        return randomNumber
    }
}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
cardsEl.textContent = "Cards: " 
for(i = 0 ; i < cards.length ; i++)
{
    cardsEl.textContent += cards[i] + " "
}
sumEl.textContent = "SUM: " + sum 
if (sum <= 20){
    message = "Do you want to draw a new card?"
} else if (sum === 21){
    message = "hurray! you got a blackjack"
    hasBlackJack = true
} else {
    message = "Sorry, you have lost the game"
    isAlive = false
}
mesasgeEl.textContent = message
}

function newCard()
{
    if(isAlive === true  && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


