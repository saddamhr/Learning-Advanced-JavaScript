function evenOdd(number) {
    var result;
    if( number % 2 == 0) {
        result = number;
    } else {
        result = number * 2;
    }
    return result;
}

function evenOddAll (numbers) {
    var evenArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        var result = evenOdd(number);
        evenArray.push(result)

    }
    return evenArray;
}

numbers = [1,2,3,4,5];
var numbers =  evenOddAll(numbers);
console.log(numbers);