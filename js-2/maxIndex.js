
function maxIndex(numero) {
    let maxIndex = -1;
    if (numero.length === 0) {
      return maxIndex;
    }
    maxIndex = 0;
    let maxNum = numero[0];
    for (let i = 1; i < numero.length; i++) {
      if (numero[i] > maxNum) {
        maxNum = numero[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1