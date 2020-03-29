function evenOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if( num % 2 == 0) {
            console.log(num, ' is odd number');
        } else {
            console.log(num * 2, ' is even');
        }
    }
}

numbers = [1,2,3,4,5];
console.log('Numbers: ')
evenOdd(numbers);

friendsAge = [22, 24, 21, 19];
console.log('Friends age: ')
evenOdd(numbers);