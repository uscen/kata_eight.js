//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reversedStr01(str) {
  return str
    .split("")
    .reverse()
    .reduce((acc, curr) => acc + curr);
}
console.log(reversedStr01("uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reversedStr02(str) {
  let arrayfromStr = Array.from(str);
  let reversedStr = [];
  let index = 0;
  while (index < arrayfromStr.length) {
    let firstItem = arrayfromStr.shift();
    reversedStr.unshift(firstItem);
  }
  return reversedStr.reduce((acc, curr) => acc + curr);
}
console.log(reversedStr02("uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reversedStr03(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reversedStr03("uscen"));
