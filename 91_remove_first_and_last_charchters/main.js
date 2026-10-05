//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function array01(str) {
  if (str.split(",").length <= 2) return null;
  return str.slice(2, -1).replaceAll(",", " ");
}
console.log(array01(" "));
console.log(array01("A1,B1"));
console.log(array01("1,2,3"));
console.log(array01("1,2,3,4"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function array02(str) {
  let toArray = str.split(",");
  if (toArray.length <= 2) return null;
  toArray.pop();
  toArray.shift();
  return toArray.join(" ");
}
console.log(array02(""));
console.log(array02("A1,B1"));
console.log(array02("1,2,3"));
console.log(array02("1,2,3,4"));
