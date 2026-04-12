//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function addLength01(str) {
  return str.split(/\s+/gi).map((word) => `${word} ${word.length}`);
}
console.log(addLength01("apple ban"));
