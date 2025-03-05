const randomTsCode = `
function getRandomNumber(min: number, max: number): number {
  if (max < min) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
`;

console.log(randomTsCode);
