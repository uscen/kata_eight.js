//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// If Name Stat With Lower Or Capital R Char,
// You are Playing Banjo
function are_you_playing_banjo01(name) {
  return name.startsWith("r") || name.startsWith("R")
    ? name + " => " + "You Are Playing Banjo"
    : name + " => " + "You Are Not Play Bangj";
}
console.log(are_you_playing_banjo01("rami"));
console.log(are_you_playing_banjo02("uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function are_you_playing_banjo02(name) {
  if (name.charAt(0) === "r" || name.charAt(0) === "R") {
    return `${name} You Are Playing Banjo`;
  } else {
    return `${name} You Are Not Playing Banjo`;
  }
}
console.log(are_you_playing_banjo02("rami"));
console.log(are_you_playing_banjo02("uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function are_you_playing_banjo03(name) {
  return /^r/gi.exec(name)
    ? `${name} You Are Playing Banjo`
    : `${name} You Are Not Playing Banjo`;
}
console.log(are_you_playing_banjo03("rami"));
console.log(are_you_playing_banjo03("uscen"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 04                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function are_you_playing_banjo04(name) {
  return name.match(/^r/gi)
    ? name + " " + "You Are Playing Banjo"
    : name + " " + "You Are Not Play Banjo";
}
console.log(are_you_playing_banjo04("rami"));
console.log(are_you_playing_banjo04("uscen"));
