export function randomTsCode() {
  const arr = ['const', 'let', 'var'];
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    return `const ${randomItem} = {};`;
  } else if (type === 1) {
    return `let ${randomItem} = [];`;
  } else if (type === 2) {
    return `var ${randomItem} = 0;`;
  }
}
