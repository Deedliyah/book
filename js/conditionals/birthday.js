const dayOfBirthday = 14
const guess = prompt("Zgadnij dzień moich urodzin")

let correct = false

if (+guess === dayOfBirthday) {
    correct = true
}

if (correct === true) {
    console.log(`Zgadłeś, dzień moich urodzin to: ${dayOfBirthday}`)
    document.write("BRAWO!")
}

if (correct === false) {
    console.log(`Zgaduj dalej`)
    document.write("Odśwież stronę by spróbować jeszcze raz")
}