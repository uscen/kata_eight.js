//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function squareSum01(numbers) {
  return numbers.map((num) => num * num).reduce((acc, cur) => acc + cur, 0);
}
console.log(squareSum01([1, 2, 2]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function squareSum02(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += Math.pow(numbers[i], 2);
  }
  return result;
}
console.log(squareSum02([1, 2, 2]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function squareSum03(numbers) {
  let result = 0;
  if (numbers.length > 0) {
    numbers.forEach((num) => (result += Math.pow(num, 2)));
  }
  return result;
}
console.log(squareSum03([1, 2, 2]));
