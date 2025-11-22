// NOTE: True Mean Sheep Exist
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countingSheep01(arrOfSheeps) {
  if (arrOfSheeps === undefined) return "Array Not Found";
  let existSheep = arrOfSheeps.filter((sheep) => sheep);
  return existSheep.length;
}
console.log(
  countingSheep01([
    true,
    true,
    true,
    false,
    true,
    null,
    false,
    false,
    null,
    false,
    false,
    true,
  ]),
);
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function countingSheep02(arrOfSheeps) {
  let counter = 0;
  for (let i = 0; i < arrOfSheeps.length; i++) {
    if (arrOfSheeps[i]) {
      counter++;
    }
  }
  return counter;
}
console.log(
  countingSheep02([
    true,
    true,
    true,
    false,
    true,
    null,
    false,
    false,
    null,
    false,
    false,
    true,
  ]),
);
