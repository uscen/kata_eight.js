//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function makeItNegative01(num) {
  if (num > 0) return num * -1;
  if (num <= 0) return num;
}
console.log(makeItNegative01(20));
console.log(makeItNegative01(-20));
console.log(makeItNegative01(0));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function makeItNegative02(num) {
  return num > 0 ? -num : num;
}
console.log(makeItNegative02(20));
console.log(makeItNegative02(-20));
console.log(makeItNegative02(0));
