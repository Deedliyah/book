class Room {
    width = 200
    height = 220
    desk = false
    space = function () {
        return this.width * this.height
    }
    display = function () {
        console.log(`szerokosc ${this.width}, wysokość ${this.height}, powierzchnia ${this.space()}`)
    }
}

let room = new Room()
console.log(room.display())
