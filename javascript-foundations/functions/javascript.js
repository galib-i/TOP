function add7(number) {
    return number += 7
}

function multiply(x, y) {
    return x * y
}

function capitalise(word) {
    let string = word;
    string = string[0].toUpperCase() + string.slice(1).toLowerCase()

    return string
}

function lastLetter(word) {
    return word.slice(-1)
}

console.log(add7(10))
console.log(multiply(6, 7))
console.log(capitalise("SOMETHING"))
console.log(lastLetter("abcd"))