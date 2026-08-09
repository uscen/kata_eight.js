//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function gooseFilter01(birds) {
  let geese = ["African", "Ruman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((ctx) => {
    return !geese.includes(ctx);
  });
}
console.log(
  gooseFilter01([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
  ]),
);

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function gooseFilter02(birds) {
  let geese = ["African", "Ruman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredGoos = [];
  for (let i = 0; i < birds.length; i++) {
    if (geese.indexOf(birds[i]) === -1) {
      filteredGoos.push(birds[i]);
    }
  }
  return filteredGoos;
}
console.log(
  gooseFilter02([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
  ]),
);
