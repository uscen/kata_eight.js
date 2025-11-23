//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findNeedle01(arr) {
  if (Array.isArray(arr)) {
    if (arr.includes("needle")) {
      return `found the needle at position ${arr.indexOf("needle")}`;
    }
  }
  return `no needle found`;
}

console.log(findNeedle01(["heey", "junk", "hay", "hay", "needle"]));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findNeedle02(arr) {
  if (Array.isArray) {
    if (arr.includes("needle")) {
      return `found the needle at position ${arr.findIndex((need) => need === "needle")}`;
    }
  }
  return `no needle found`;
}
console.log(findNeedle02(["heey", "junk", "hay", "hay", "needle"]));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findNeedle03(arr) {
  let needleIndex;
  arr.forEach((need, index) => {
    if (need === "needle") {
      needleIndex = index;
    }
  });
  return `found the needle at position ${needleIndex}`;
}
console.log(findNeedle03(["heey", "junk", "hay", "hay", "needle"]));

console.log("#".repeat(50));
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 03                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findNeedle04(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      return `Found The Needle At Position ${i}`;
    }
  }
}
console.log(findNeedle04(["heey", "junk", "hay", "hay", "needle"]));
