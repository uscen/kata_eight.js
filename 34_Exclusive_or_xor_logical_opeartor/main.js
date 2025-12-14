//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function xor01(a, b) {
  if ((a && b) || (!a && !b)) {
    return false;
  } else {
    return true;
  }
}
console.log(xor01(true, true));
console.log(xor01(false, false));
console.log(xor01(false, true));
console.log(xor01(true, false));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function xor02(a, b) {
  return a === b ? false : true;
}
console.log(xor02(true, true));
console.log(xor02(false, false));
console.log(xor02(false, true));
console.log(xor02(true, false));
