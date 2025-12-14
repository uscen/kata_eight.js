//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function rentalCarCost(d) {
  let price = d * 40;
  let finalPrice = d >= 7 ? price - 50 : d >= 3 ? price - 20 : price;
  return `$${finalPrice}`;
}
console.log(rentalCarCost(7));
console.log(rentalCarCost(3));
console.log(rentalCarCost(2));
