//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function loveFunc01(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  }
  return false;
}
console.log(loveFunc01(2, 4));
console.log(loveFunc01(2, 9));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function loveFunc02(flower1, flower2) {
  return flower1 % 2 === 0 && flower2 % 2 !== 0 ? true : false;
}
console.log(loveFunc02(2, 4));
console.log(loveFunc02(2, 9));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function loveFunc03(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
console.log(loveFunc03(2, 4));
console.log(loveFunc03(2, 9));
