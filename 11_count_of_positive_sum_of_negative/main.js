//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countPositiveSumNegative01(arr) {
  let countPositive = arr.filter((num) => num > 0).length;
  let sumOfNegative = arr
    .filter((num) => num < 0)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  return [countPositive, sumOfNegative];
}
console.log(
  countPositiveSumNegative01([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countPositiveSumNegative02(arr) {
  let countPositive = new Array();
  let sumOfNegative = 0;
  for (num of arr) {
    num > 0 ? countPositive.push(num) : (sumOfNegative += num);
  }
  return [countPositive.length, sumOfNegative];
}
console.log(
  countPositiveSumNegative02([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);
