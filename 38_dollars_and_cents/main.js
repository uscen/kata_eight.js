//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
  // return Number.isInteger(amount) ? `$${amount}.00` : `$${amount.toFixed(2)}`;
}
console.log(formatMoney(3));
console.log(formatMoney(3.1));
console.log(formatMoney(3.99));
