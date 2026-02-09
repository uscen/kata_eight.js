//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function isUpperCase(str) {
  return str.split("").every((s) => s.toUpperCase() === s);
}
console.log(isUpperCase("HELLO"));
console.log(isUpperCase("hello"));
console.log(isUpperCase("heLLo"));
