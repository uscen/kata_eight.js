//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sayHello01(name, city, state) {
  return `Hello ${name.join(" ")}! welcome to ${city}, ${state}`;
}
console.log(sayHello01(["Farah", "Uscen"], "Morocco", "Casablanca"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function sayHello02(name, city, state) {
  let fullName = "";
  for (let i = 0; i < name.length; i++) {
    fullName += name[i];
    fullName += " ";
  }
  fullName = fullName.substring(0, fullName.length - 1);
  return "hello " + fullName + "! Welcome to " + city + ", " + state;
}
console.log(sayHello02(["Farah", "Uscen"], "Morocco", "Casablanca"));
