//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function bmi(weight, height) {
  let calcBmi = weight / Math.pow(height, 2);
  return calcBmi <= 18.5
    ? "Underweight"
    : calcBmi <= 25.0
      ? "Normal"
      : calcBmi <= 30.0
        ? "Overweight"
        : "Obesse";
}
console.log(bmi(80, 1.7));
console.log(bmi(80, 1.8));
