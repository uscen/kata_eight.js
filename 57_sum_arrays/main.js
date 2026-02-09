//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumArray(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumArray([-2.398]));
console.log(sumArray([1, 2, 3]));
console.log(sumArray([1, 5.2, 4, 0, -1]));
