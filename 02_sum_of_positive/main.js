//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumOfPositive01(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      sum += numberArray[i];
    }
  }
  return sum;
}
console.log(sumOfPositive01([20, -100, 10, 10, -10]));
console.log(sumOfPositive01([1, -4, 7, 12]));
console.log("#".repeat(50));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumOfPositive02(numberArray) {
  let sum = 0;
  numberArray.forEach((num) => {
    num > 0 ? (sum += num) : null;
  });
  return sum;
}
console.log(sumOfPositive02([20, -100, 10, 10, -10]));
console.log(sumOfPositive02([1, -4, 7, 12]));
console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// TODO: use reduce high order function
function sumOfPositive03(numberArray) {
  return numberArray
    .filter((num) => num > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfPositive03([20, -100, 10, 10, -10]));
console.log(sumOfPositive03([1, -4, 7, 12]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD_4 (using reset param)                                            │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumOfPositive04(...numberArray) {
  return numberArray
    .filter((num) => num > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfPositive04(20, -100, 10, 10, -10));
console.log(sumOfPositive04(1, -4, 7, 12));
