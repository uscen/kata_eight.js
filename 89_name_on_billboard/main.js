//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// calculate name chars ads without using *
// every char is $30 (space count as char)
function billboard01(name, price = 30) {
  return name
    .split("")
    .fill(price)
    .reduce((acc, cur) => acc + cur);
}
console.log(billboard01("Idwal Augustin"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function billboard02(name, price = 30) {
  let length = name.length;
  let result = 0;
  Array.from({ length }, (_) => price).forEach((el) => {
    result += el;
  });
  return result;
}
console.log(billboard02("Idwal Augustin"));
