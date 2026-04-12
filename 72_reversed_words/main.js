//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reversedWord(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reversedWord("hello world"));
console.log(
  reversedWord("the greatest victory is that which requires no battle"),
);
