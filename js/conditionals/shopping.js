const shoesSize = 39
const price = 230

const answerSize = prompt("Jaki jest dostępny rozmiar buta?")
const answerPrice = prompt("Ile kosztuje?")

let canBuy
if(+answerSize === 39 && +answerPrice <= 230){
    canBuy = true
}

if(canBuy){
    console.log("I got new pair of shoes")
} else {
    console.log("Let`s go search another one")
}