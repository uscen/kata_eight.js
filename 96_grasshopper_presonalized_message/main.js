//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function greet(name, owner) {
  return name === owner ? `hello boss` : `hello guest`;
}
console.log(greet("uscen", "uscen"));
console.log(greet("uscen", "lli"));
