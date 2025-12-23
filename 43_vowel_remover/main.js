//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function shortcut01(str) {
  let vowels = "aeiou";
  return str
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
}
console.log(shortcut01("hello"));
console.log(shortcut01("codewars"));
console.log(shortcut01("goodbye"));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function shortcut02(str) {
  let vowels = "aeiou";
  let strWithoutVowel = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      continue;
    }
    strWithoutVowel += str[i];
  }
  return strWithoutVowel;
}

console.log(shortcut02("hello"));
console.log(shortcut02("codewars"));
console.log(shortcut02("goodbye"));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function shortcut03(str) {
  let vowels = "aeiou";
  let strWithoutVowel = "";
  for (let i = 0; i < str.length; i++) {
    let found = vowels.split("").find((vowel) => vowel === str[i]);
    if (!found) {
      strWithoutVowel += str[i];
    }
  }
  return strWithoutVowel;
}

console.log(shortcut03("hello"));
console.log(shortcut03("codewars"));
console.log(shortcut03("goodbye"));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 04                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function shortcut04(str) {
  return str.replaceAll(/[aeiou]/gi, "");
}

console.log(shortcut04("hello"));
console.log(shortcut04("codewars"));
console.log(shortcut04("goodbye"));
