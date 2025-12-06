//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countMonkey01(number) {
  let arrFromNum = [];
  for (let i = 1; i <= number; i++) {
    arrFromNum.push(i);
  }
  return arrFromNum;
}
console.log(countMonkey01(10));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countMonkey02(number) {
  let arrFromNum = Array(number + 1)
    .fill(0)
    .map((_, i) => i);
  arrFromNum.shift();
  return arrFromNum;
}
console.log(countMonkey02(10));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countMonkey03(number) {
  return Array.from({ length: number + 1 }, (_, i) => i).slice(1);
}
console.log(countMonkey03(15));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 04                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countMonkey04(number) {
  return Array.from(Array(number + 1).keys()).slice(1);
}
console.log(countMonkey04(15));
