function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(0, 5);
console.log(randomNumber);
