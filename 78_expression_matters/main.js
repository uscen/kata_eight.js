//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function expressionMatter(a, b, c) {
  let result = Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    b * (a + c),
    c * (a + b),
  );
  return result;
}
console.log(expressionMatter(3, 5, 7));
