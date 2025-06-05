function getElementWidth(content, padding, border) {
  const numContent = Number.parseInt(content);
  const numPadd = Number.parseInt(padding);
  const numBord = Number.parseInt(border);
  return numContent + 2 * numPadd + 2 * numBord;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
