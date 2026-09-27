//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function findMultiple(intger, limit) {
  let isIntger = Number.isInteger(intger);
  if (!isIntger) return `${intger} is not intger`;
  let result = [];
  for (let i = 1; i < limit; i++) {
    let multipleIntger = intger * i;
    if (multipleIntger >= limit) break;
    result.push(intger * i);
  }
  return result;
}
console.log(findMultiple(4, 27));
