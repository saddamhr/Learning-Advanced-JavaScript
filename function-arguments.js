function addNumbers(numberOne, numberTwo) {
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const numbers = arguments[i];
        sum += numbers;
    }
    return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5, 8, 9, 10));