//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findSmallestInt01(args) {
  return Math.min(...args);
}
console.log(findSmallestInt01([34, 15, 88, 2]));
console.log(findSmallestInt01([34, -234, -1, 100]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findSmallestInt02(args) {
  return args.reduce((acc, cur) => (acc < cur ? acc : cur));
}
console.log(findSmallestInt02([34, 15, 88, 2]));
console.log(findSmallestInt02([34, -234, -1, 100]));
