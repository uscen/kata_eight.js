//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function between01(a, b) {
  const betweenAndB = [];
  for (let i = a; i <= b; i++) {
    betweenAndB.push(i);
  }
  return betweenAndB;
}
console.log(between01(1, 10));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function between02(a, b) {
  let i = a;
  const betweenAndB = [];
  while (i <= b) {
    betweenAndB.push(i);
    i++;
  }
  return betweenAndB;
}
console.log(between02(10, 15));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function between03(a, b) {
  return Array(b - a + 1)
    .fill(a)
    .map((n, i) => n + i);
}
console.log(between03(15, 20));
