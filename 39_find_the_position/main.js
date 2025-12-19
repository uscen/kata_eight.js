//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function position01(letter) {
  let fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position Of Alphabet Is: ${fullAlphabet.indexOf(letter) + 1}`; // zero base index
}
console.log(position01("a"));
console.log(position01("b"));
console.log(position01("z"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function position02(letter) {
  let fullAlphabet =
    "abcdefghijklmnopqrstuvwxyz".split("").findIndex((el) => el === letter) + 1; // zero base index

  return `Position Of Alphabet Is: ${fullAlphabet}`;
}
console.log(position02("a"));
console.log(position02("b"));
console.log(position02("z"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function position03(letter) {
  let fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < fullAlphabet.length; i++) {
    if (fullAlphabet[i] === letter) {
      return `Position Of Alphabet is: ${i + 1}`; // zero base index
    }
  }
}
console.log(position03("a"));
console.log(position03("b"));
console.log(position03("z"));
