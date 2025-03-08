function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(0, 10)); // Returns a random integer between 0 and 10
