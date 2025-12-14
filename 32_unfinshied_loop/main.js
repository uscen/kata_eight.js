//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// fix the bug in code;
// function createArray(number){
//   let newArray = [];
//   for(let counter = 0; counter <= number; ){
//     newArray.push(number)
//   }
//   return newArray
// }
//
// console.log(createArray(10))

// missing increment counter part (Final Expritions)
function createArray01(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
console.log(createArray01(8));
// Or
function createArray02(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; ) {
    newArray.push(counter);
    counter++;
  }
  return newArray;
}
console.log(createArray02(10));
