function isDivisibleByThree(num: number): boolean {
    return num % 3 === 0;
}

let testNumber = 9;
console.log(`Is ${testNumber} divisible by three? ${isDivisibleByThree(testNumber)}`);
