//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function repeatStr01(num, str) {
  return str.repeat(num);
}
console.log(repeatStr01(6, "lli "));
console.log(repeatStr01(10, "ushen "));

console.log(repeatStr01(50, "#"));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function repeatStr02(num, str) {
  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }
  return repeatedString;
}
console.log(repeatStr02(6, "lli "));
console.log(repeatStr02(10, "ushen "));
