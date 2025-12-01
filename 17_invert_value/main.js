//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function invertValue01(arr) {
  return arr.map((num) => -num);
}
console.log(invertValue01([1, 2, 3, 4, 5]));
console.log(invertValue01([1, 2, -3, 4, -5]));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function invertValue02(arr) {
  let invertedArr = [];
  arr.forEach((num) => invertedArr.push(num * -1));
  return invertedArr;
}
console.log(invertValue02([1, 2, 3, 4, 5]));
console.log(invertValue02([1, 2, -3, 4, -5]));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function invertValue03(arr) {
  let invertedArr = [];
  for (let i = 0; i < arr.length; i++) {
    invertedArr.splice(invertedArr.length, 0, -arr[i]);
  }
  return invertedArr;
}
console.log(invertValue03([1, 2, 3, 4, 5]));
console.log(invertValue03([1, 2, -3, 4, -5]));
