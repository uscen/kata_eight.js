//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convert_string_to_number01(str) {
  return +str;
}
console.log(
  convert_string_to_number01("191919"),
  Number.isInteger(convert_string_to_number01("191919")),
);
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convert_string_to_number02(str) {
  return Number(str);
}
console.log(
  convert_string_to_number02("2211"),
  Number.isInteger(convert_string_to_number02("2211")),
);
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function convert_string_to_number03(str) {
  return parseFloat(str);
}
console.log(
  convert_string_to_number03("999"),
  Number.isInteger(convert_string_to_number03("999")),
);
