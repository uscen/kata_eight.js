//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function isDivisible01(n, x, y) {
  return Number.isInteger(n / x) && Number.isInteger(n / y);
}
console.log(isDivisible01(3, 1, 3));
console.log(isDivisible01(12, 2, 6));
console.log(isDivisible01(100, 5, 3));
console.log(isDivisible01(12, 7, 5));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function isDivisible02(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log(isDivisible02(3, 1, 3));
console.log(isDivisible02(12, 2, 6));
console.log(isDivisible02(100, 5, 3));
console.log(isDivisible02(12, 7, 5));
