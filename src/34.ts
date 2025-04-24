function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The list of numbers is empty.");
    }

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum / numbers.length;
}
