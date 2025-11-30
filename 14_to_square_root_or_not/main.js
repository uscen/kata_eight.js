//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countByX02(arr) {
  return arr.map((num) => {
    return Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2;
  });
}
console.log(countByX02([4, 3, 9, 7, 2, 1]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function toSquareRootOrNot02(arr) {
  let newArr = [];
  arr.forEach((num) => {
    newArr.push(
      Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num, 2),
    );
  });
  return newArr;
}
console.log(toSquareRootOrNot02([4, 3, 9, 7, 2, 1]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function toSquareRootOrNot03(arr) {
  let newArr = [];
  for (num of arr) {
    if (Number.isInteger(Math.sqrt(num))) {
      newArr.push(Math.sqrt(num));
    } else {
      newArr.push(Math.pow(num, 2));
    }
  }
  return newArr;
}
console.log(toSquareRootOrNot03([4, 3, 9, 7, 2, 1]));
