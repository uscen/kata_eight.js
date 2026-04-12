//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function divisibleBy(numbers, divisor) {
  return numbers
    .map((num) => (num % divisor === 0 ? num : null))
    .filter((keepNumbers) => Number.isInteger(keepNumbers));
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
