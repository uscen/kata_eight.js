//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function doubleChar01(str) {
  return str
    .split("")
    .map((item) => item.repeat(2))
    .join("");
}
console.log(doubleChar01("Uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function doubleChar02(str) {
  let arrOfStr = str.split("");
  let repeatedStr = "";
  for (item of arrOfStr) {
    repeatedStr += item.repeat(2);
  }
  return repeatedStr;
}
console.log(doubleChar02("Uscen"));
