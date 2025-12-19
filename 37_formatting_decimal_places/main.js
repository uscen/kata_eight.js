//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function twoDecimalPlaces01(num) {
  return +num.toFixed(2);
}
console.log(twoDecimalPlaces01(5.5589));
console.log(twoDecimalPlaces01(3.342));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function twoDecimalPlaces02(num) {
  return Math.round(num * 100) / 100;
}
console.log(twoDecimalPlaces02(5.5589));
console.log(twoDecimalPlaces02(3.342));
