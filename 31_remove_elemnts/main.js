//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Remove Every Second Element From Array
function removeElements01(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(removeElements01([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  removeElements01([
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
  ]),
);

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function removeElements02(arr) {
  let newArray = [];
  let index = 0;
  while (index < arr.length) {
    newArray.push(arr[index]);
    index += 2;
  }
  return newArray;
}
console.log(removeElements02([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  removeElements02([
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
  ]),
);

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function removeElements03(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}
console.log(removeElements03([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  removeElements03([
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
  ]),
);
