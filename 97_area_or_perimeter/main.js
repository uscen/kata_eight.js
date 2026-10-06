//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function areaOrPerimeter(l, w) {
  return l === w ? l * w : (l + w) * 2;
}
console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(5, 4));
