const score = prompt("Ile punktów uzyskałeś?")

let grade

if (score >= 90) {
    grade = 5
} else if (score >= 80) {
    grade = 4
} else if (score >= 70) {
    grade = 3
} else if (score >= 60) {
    grade = 2
} else {
    grade = 1
}

for([krok początkowy];[warunek do kiedy pętla ma być wykonywana];[krok])
console.log(`Twoja ocen to ${grade}`)