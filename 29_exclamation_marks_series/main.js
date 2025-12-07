// //  ╭─────────────────────────────────────────────────────────────────────────╮
// //  │ METHOD 01                                                               │
// //  ╰─────────────────────────────────────────────────────────────────────────╯
function remove01(str) {
  let strWihoutMark = str.slice(0, str.indexOf("!"));
  return strWihoutMark;
}
console.log(remove01("ushen !!!!"));
console.log(remove01("Hi!"));
// Invalid
console.log(remove01("!Hi!"));

console.log("#".repeat(50));
// //  ╭─────────────────────────────────────────────────────────────────────────╮
// //  │ METHOD 02                                                               │
// //  ╰─────────────────────────────────────────────────────────────────────────╯
function remove02(str) {
  return str
    .split("")
    .filter((char) => {
      return char !== "!";
    })
    .join("");
}
console.log(remove02("ushen !!!!"));
console.log(remove02("Hi!"));
// valid
console.log(remove02("!Hi!"));

console.log("#".repeat(50));
// //  ╭─────────────────────────────────────────────────────────────────────────╮
// //  │ METHOD 03                                                               │
// //  ╰─────────────────────────────────────────────────────────────────────────╯
function remove03(str) {
  return str.match(/[^!]/gi).join("");
}
console.log(remove03("ushen !!!!"));
console.log(remove03("Hi!"));
// valid
console.log(remove03("!Hi!"));

console.log("#".repeat(50));
// //  ╭─────────────────────────────────────────────────────────────────────────╮
// //  │ METHOD 04                                                               │
// //  ╰─────────────────────────────────────────────────────────────────────────╯
function remove04(str) {
  return str.replaceAll("!", "");
}
console.log(remove04("ushen !!!!"));
console.log(remove04("Hi!"));
// valid
console.log(remove04("!Hi!"));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 05                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function remove05(str) {
  let startWithBang = str.startsWith("!");
  let strWithoutBangs = str.replaceAll(/!/gi, "");
  if (startWithBang) {
    return "!" + strWithoutBangs;
  }
  return strWithoutBangs;
}
console.log(remove05("ushen !!!!"));
console.log(remove05("Hi!"));
// valid => keep the first ! if Exists
console.log(remove05("!Hi!"));
console.log(remove05("!Hi!"));
