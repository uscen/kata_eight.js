//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function feast01(beast, dish) {
  return (
    beast.startsWith(dish.charAt(0)) &&
    beast.endsWith(dish.charAt(dish.length - 1))
  );
}
console.log(feast01("chickadee", "chocalate cake"));
console.log(feast01("brown bear", "bear claw"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function feast02(beast, dish) {
  let feastLetters = beast[0] + beast[beast.length - 1];
  let dishLetters = dish[0] + dish[dish.length - 1];
  return feastLetters === dishLetters;
}
console.log(feast02("chickadee", "chocalate cake"));
console.log(feast02("brown bear", "bear claw"));
