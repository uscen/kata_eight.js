//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function well01(x) {
  if (!x.includes("good")) return "Fail";
  let goodIdea = x.filter((idea) => idea === "good");
  return goodIdea.length <= 2 ? "Publish!" : "I smell a series";
}
console.log(well01(["bad", "bad", "bad"]));
console.log(well01(["bad", "bad", "good"]));
console.log(well01(["bad", "bad", "good", "bad", "good", "bad"]));
console.log(well01(["bad", "bad", "good", "bad", "good", "good"]));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function well02(x) {
  let goodIdea = x.filter((idea) => idea === "good");
  switch (goodIdea.length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series";
  }
}
console.log(well02(["bad", "bad", "bad"]));
console.log(well02(["bad", "bad", "good"]));
console.log(well02(["bad", "bad", "good", "bad", "good", "bad"]));
console.log(well02(["bad", "bad", "good", "bad", "good", "good"]));
