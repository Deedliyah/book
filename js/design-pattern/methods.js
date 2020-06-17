const numbers = [11, 17, 13]
const numbersDouble = [3.0, 1.7, 5.1]

function maximum(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        var arrayElement = array[i];
        if (max < arrayElement) {
            max = arrayElement
        }
    }
    return max
}

maximum(numbers)
console.log(maximum(numbers))

function sumOfMaxFromArrays(array, array2) {
    let maxNumber = maximum(array)
    let maxDouble = maximum(array2)

    return maxNumber + maxDouble
}
console.log(sumOfMaxFromArrays(numbers, numbersDouble))
    