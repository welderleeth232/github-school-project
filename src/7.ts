async function getRandomNumber(min: number, max: number): Promise<number> {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}
