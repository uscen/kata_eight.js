//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function find_average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((prev, curr) => curr + prev) / arr.length;
}
console.log(find_average([1, 1, 1, 1]));
console.log(find_average([1, 2, 3]));
console.log(find_average([1, 2, 3, 4]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function find_average02(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 0 ? sum / arr.length : sum;
}
console.log(find_average02([1, 1, 1, 1]));
console.log(find_average02([1, 2, 3]));
console.log(find_average02([1, 2, 3, 4]));
