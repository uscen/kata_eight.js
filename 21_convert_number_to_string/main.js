//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convertNumberToString01(num) {
  return num.toString();
}
console.log(
  typeof convertNumberToString01(2001),
  convertNumberToString01(2001),
);

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convertNumberToString02(num) {
  return String(num);
}
console.log(
  typeof convertNumberToString02(2001),
  convertNumberToString02(2001),
);

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convertNumberToString03(num) {
  return `${num}`;
}
console.log(
  typeof convertNumberToString03(2001),
  convertNumberToString03(2001),
);
