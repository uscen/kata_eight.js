//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Remove Lading WhiteSpace
function removeSpc01(str) {
  return str.trim();
}
console.log(removeSpc01(" usc en "));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Remove All WhiteSpace
function removeSpc02(str) {
  return str.match(/\S+/gi).reduce((preValue, curValue) => preValue + curValue);
}
console.log(removeSpc02(" usc en "));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Remove All WhiteSpace
function removeSpc03(str) {
  const convertStringToArrayWithoutSpc = Array.from(str).filter(
    (s) => s !== " ",
  );
  return convertStringToArrayWithoutSpc.join("");
}
console.log(removeSpc03(" usc en "));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 04                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Remove All WhiteSpace
// NOTE: Return here to try understand why Regex \s+ still keep first and last whitespace to understand remove
// trim method
function removeSpc04(str) {
  let strWithoutWhiteSpace = "";
  str
    .trim()
    .split(/\s+/gi)
    .forEach((s) => (strWithoutWhiteSpace += s));
  return strWithoutWhiteSpace;
}
console.log(removeSpc04("  usc   en "));
