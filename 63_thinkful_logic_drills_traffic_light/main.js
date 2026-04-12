//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function updateLight01(current) {
  let trafficColorOrder = ["red", "yellow", "green"];
  let nextTrafficColor =
    trafficColorOrder[trafficColorOrder.indexOf(current) + 1];
  if (trafficColorOrder.indexOf(current) === trafficColorOrder.length - 1) {
    return trafficColorOrder[0];
  }
  return nextTrafficColor;
}
console.log(updateLight01("green"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function updateLight02(current) {
  return current === "yellow" ? "green" : current === "red" ? "yellow" : "red";
}
console.log(updateLight02("green"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function updateLight03(current) {
  switch (current) {
    case "red":
      return "yellow";
    case "yellow":
      return "green";
    case "green":
      return "red";
    default:
      return "only [red, yellow, green] color is valid";
  }
}
console.log(updateLight03("green"));
