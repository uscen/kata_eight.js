//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function howManyLightsabersDoYouOwn01(name) {
  if (name.toLowerCase() === "zach") {
    return 18;
  }
  return 0;
}
console.log(howManyLightsabersDoYouOwn01("Zach"));
console.log(howManyLightsabersDoYouOwn01("Addam"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function howManyLightsabersDoYouOwn02(name) {
  return name.toLowerCase() === "zach" ? 18 : 0;
}
console.log(howManyLightsabersDoYouOwn02("Zach"));
console.log(howManyLightsabersDoYouOwn02("Addam"));
