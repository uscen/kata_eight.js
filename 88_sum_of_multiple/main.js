//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumMul(n, m) {
  let result = 0;
  for (let i = 1; i < m; i++) {
    let mul = n * i;
    if (mul >= m) break;
    result += mul;
  }
  return result;
}
console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sumMul02(n, m) {
  let count = m / n;
  let result = Array.from({ length: count }, (_, i) => (i + 1) * n).reduce(
    (acc, cur) => acc + cur,
  );
  return result;
}
console.log(sumMul02(2, 9));
console.log(sumMul02(3, 13));
console.log(sumMul02(4, 123));
