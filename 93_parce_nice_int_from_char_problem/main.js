//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAge01(inputString) {
  return parseInt(inputString);
}
console.log(getAge01("9 years old"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAge02(inputString) {
  return parseFloat(inputString);
}
console.log(getAge02("9 years old"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAge03(inputString) {
  return Number(inputString.charAt(0));
}
console.log(getAge03("9 years old"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 04                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAge04(inputString) {
  return +inputString[0];
}
console.log(getAge04("9 years old"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 05                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function getAge05(inputString) {
  return +inputString.match(/\d/gi)[0];
}
console.log(getAge05("9 years old"));
