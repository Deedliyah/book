const preferedColorWhite = 'białe'
const preferedColorBlack = 'czarne'

const sellerAnswer = prompt("Jaki jest dostępny kolor butów?")

let canBuy
if (sellerAnswer === preferedColorWhite || sellerAnswer === preferedColorBlack) {
    canBuy = true
}

if (canBuy) {
    console.log("Udało mi się zdobyć wymarzony kolor butów")
} else {
    console.log("Szukam butów dalej")
}