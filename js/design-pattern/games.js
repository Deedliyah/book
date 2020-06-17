class BasePrice {
    name = 'base'
    price = 50
    brandManager = 'Karol Kowalski'
    display = function() {
        return console.log(`osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`)
    }
}
class MidPrice {
    name = 'mid'
    price = 50
    brandManager = 'Maciej Nowak'
    display = function() {
        return console.log(`osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`)
    }
}

class AAAPrice {
    name = 'aaa price'
    price = 250
    brandManager = "Marianna Srebrna"
    publishers = ['EA', 'Microsoft']
    display = function() {
        return console.log(`osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`)
    }
}

/**
 * @param 
 */
function games() {
    let games = []

    games.push(new MidPrice())
    games.push(new AAAPrice())
    games.push(new BasePrice)

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].display())
    }
}

games()