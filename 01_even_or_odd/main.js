//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                                │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function evenOrOdd(number) {
  number = parseInt(number);
  if (isNaN(number)) return "Please Enter Number";
  return number % 2 === 0
    ? `Number ${number} is ${"even".toUpperCase()} Number`
    : `Number ${number} is ${"odd".toUpperCase()} Number`;
}
console.log(evenOrOdd("USCEN 10 hello"));
console.log(evenOrOdd("10 hello"));
console.log(evenOrOdd(12));
console.log(evenOrOdd(15));
