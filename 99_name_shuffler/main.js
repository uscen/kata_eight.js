//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function nameSchuffler01(str) {
  let swappedName = str.split(/\s+/).reverse().join(" ");
  return swappedName;
}
console.log(nameSchuffler01("Farah Uscen"));
console.log(nameSchuffler01("John McClane"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function nameSchuffler02(str) {
  let swappedName = str.replace(/(\w+) (\w+)/g, "$2 $1");
  return swappedName;
}
console.log(nameSchuffler02("Farah Uscen"));
console.log(nameSchuffler02("John McClane"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function nameSchuffler03(str) {
  let toArray = str.split(" ");
  let swappedName = [];
  while (toArray.length) {
    let rmLast = toArray.pop();
    swappedName.push(rmLast);
  }
  return swappedName.join(" ");
}
console.log(nameSchuffler03("Farah Uscen"));
console.log(nameSchuffler03("John McClane"));
