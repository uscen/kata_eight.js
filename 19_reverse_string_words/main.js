//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reverseString(str) {
  return str.split(/\s+/gi).reverse().join(" ");
}
console.log(reverseString("Hello     World"));
console.log(reverseString("Hi There."));
console.log(reverseString("uscen lli"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function reverseString02(str) {
  let arrFromStr = str.split(/\s+/gi);
  let reversedArrFromStr = [];
  while (arrFromStr.length > 0) {
    reversedArrFromStr.push(arrFromStr.pop());
  }
  return reversedArrFromStr.join(" ");
}
console.log(reverseString02("Hello     World"));
console.log(reverseString02("Hi There."));
console.log(reverseString02("uscen lli"));
