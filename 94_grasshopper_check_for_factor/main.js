//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function checkForFactor(base, factor) {
  return base % factor === 0;
}
console.log(checkForFactor(9, 3));
