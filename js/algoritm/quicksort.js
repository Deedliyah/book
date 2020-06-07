function quicksort(arr, first, last) {
    let i = first - 1
    let pivot = arr[last]
    for (let j = first; j < last; j += 1) {
        if (arr[j] < pivot) {
            i += 1
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
    if (i < first) {
        let tmp = arr[first]
        arr[first] = arr[last]
        arr[last] = tmp
        i += 1
    }

    if (first < i) {
        quicksort(arr, first, i)
    }
    if (last > i + 1) {
        quicksort(arr, i + 1, last)
    }
}


function display(arr) {
    for (let j = 0; j < arr.length; j += 1) {
        console.log(arr[j])
    }
}

let arr = [3, -1, 2, 4]
quicksort(arr, 1, arr.length)
display(arr)