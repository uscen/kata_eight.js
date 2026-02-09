//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function summation01(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}
console.log(summation01(8));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function summation02(num) {
  let result = 0;
  Array.from(Array(num).fill(0), (_, i) => (result += i + 1));
  return result;
}
console.log(summation02(8));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function summation03(num) {
  return Array(num)
    .fill(0)
    .reduce((acc, _, index) => acc + (index + 1), 0);
}
console.log(summation03(8));
