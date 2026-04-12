//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function correct01(string) {
  return string
    .split("")
    .map((char) => {
      if (char === "5") {
        return "S";
      } else if (char === "0") {
        return "O";
      } else if (char === "1") {
        return "I";
      } else {
        return char;
      }
    })
    .join("");
}
console.log(correct01("L0ND0N"));
console.log(correct01("DUBL1N"));
console.log(correct01("PARI5"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function correct02(string) {
  return string.replace(/0/gi, "O").replace(/1/gi, "I").replace(/5/gi, "S");
}
console.log(correct02("L0ND0N"));
console.log(correct02("DUBL1N"));
console.log(correct02("PARI5"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function correct03(string) {
  const chars = {
    0: "O",
    1: "I",
    5: "S",
  };
  return string.replaceAll(/[015]/gi, (e) => chars[e]);
}
console.log(correct03("L0ND0N"));
console.log(correct03("DUBL1N"));
console.log(correct03("PARI5"));
