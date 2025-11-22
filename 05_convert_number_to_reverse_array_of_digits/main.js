//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function numberToreversedArrayOfDigits01(nums) {
  let arrFromDigits = [...nums.toString()].map((num) => +num).reverse();
  return arrFromDigits;
}
console.log(numberToreversedArrayOfDigits01(1293456));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// NOTE: Sorted Descinding Array From Digits
function numberToreversedArrayOfDigits02(nums) {
  let arrFromDigits = [...nums.toString()];
  return arrFromDigits
    .sort((a, b) => {
      return +b - +a;
    })
    .map((num) => +num);
}
console.log(numberToreversedArrayOfDigits02(1293456));
