//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countByX01(x, n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(x * i);
  }
  return newArray;
}
console.log(countByX01(1, 10));
console.log(countByX01(2, 5));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Array(10) // [empty * 10]
// Array(10).keys() // [0,1,2,3,4,5,6,7,8,9]
function countByX02(x, n) {
  return Array.from(Array(n + 1).keys(), (num) => num * x).slice(1);
}
console.log(countByX02(1, 10));
console.log(countByX02(2, 5));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countByX03(x, n) {
  return Array(n)
    .fill(0)
    .map((_, index) => (index + 1) * x);
}
console.log(countByX03(1, 10));
console.log(countByX03(2, 5));
