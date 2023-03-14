function max(numero) {
    let maxnum;
    if (numero.length === 0) {
      return undefined;
    } 
    maxnum = numero[0];
    for (let i = 1; i < numero.length; i++) {
      if (numero[i] > maxnum) {
        maxnum = numero[i];
      }
    }
    return maxnum;
  }
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined