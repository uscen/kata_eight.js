//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// function noBoringZeros01(num) {
//   let indexOfZero = num.toString().indexOf("0");
//   let lastIndexOfZero = num.toString().lastIndexOf("0");
//   if (indexOfZero !== lastIndexOfZero) {
//     return;
//   }
//   return;
// }
// console.log(noBoringZeros01(1450));
// console.log(noBoringZeros01(123020000));

// console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function noBoringZeros02(num) {
  return num.toString().replaceAll(/0+$/gi, "");
}
console.log(noBoringZeros02(1230200));
console.log(noBoringZeros02(14050));
console.log(noBoringZeros02(12200));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function noBoringZeros03(num) {
  let numberString = num.toString();
  while (numberString.endsWith("0")) {
    numberString = numberString.slice(0, numberString.length - 1);
  }
  return numberString;
}
console.log(noBoringZeros03(123020000));
console.log(noBoringZeros03(14050));
console.log(noBoringZeros02(12200));
