//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// Find Error
function greet(name) {
  // return "Hello, John" + name + "!";  // NOTE: return make the code after return unreachable code
  if (name === "johnny") return "hello my love";
  return "Hello, " + name + "!";
}
console.log(greet("ushen"));
console.log(greet("johnny"));
