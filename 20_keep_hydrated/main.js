//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function linter01(time) {
  return Math.floor(0.5 * +time);
}
console.log(linter01(3));
console.log(linter01(6.7));
console.log(linter01(11.8));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function linter02(time) {
  return Math.floor(0.5 / +time);
}
console.log(linter02(3));
console.log(linter02(6.7));
console.log(linter02(11.8));
