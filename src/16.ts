function findMaxValue(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('The input array is empty.');
    }

    let maxValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }

    return maxValue;
}

function calculateSquareRoot(number: number): number {
    if (number < 0) {
        throw new Error('The square root is not defined for negative numbers.');
    }

    let sqrtValue = Math.sqrt(number);
    if (sqrtValue === Number.NEGATIVE_INFINITY) {
        throw new Error('The square root of ' + number + ' does not exist in the real number system.');
    }
    return sqrtValue;
}

console.log(findMaxValue([1, 2, 3, 4]));
console.log(calculateSquareRoot(4));
