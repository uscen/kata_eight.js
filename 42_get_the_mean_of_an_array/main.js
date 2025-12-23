//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAverage01(marks) {
  let sum = marks.reduce((acc, curr) => acc + curr);
  return Math.floor(sum / marks.length);
}

console.log(getAverage01([1, 2, 3, 1, 1, 1]));
console.log(getAverage01([1, 2, 3, 4, 5]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAverage02(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  return Math.floor(sum / marks.length);
}

console.log(getAverage01([1, 2, 3, 1, 1, 1]));
console.log(getAverage01([1, 2, 3, 4, 5]));
