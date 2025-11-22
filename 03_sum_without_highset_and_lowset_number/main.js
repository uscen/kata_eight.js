//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumWithoutHighsetAndLowsetNumber(numbersArray) {
  if (
    numbersArray === undefined ||
    numbersArray === null ||
    numbersArray.length <= 2
  ) {
    return 0;
  }
  return numbersArray
    .sort((a, b) => {
      return a - b;
    })
    .slice(1, -1)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}
console.log(sumWithoutHighsetAndLowsetNumber([1, 2, 1, 2, 9]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
