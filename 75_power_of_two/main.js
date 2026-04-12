//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function powerOfTwo(n) {
  return Array.from(Array(n + 1).fill(0), (_, index) => {
    return Math.pow(2, index);
  });
}
console.log(powerOfTwo(5));
console.log(powerOfTwo(4));
