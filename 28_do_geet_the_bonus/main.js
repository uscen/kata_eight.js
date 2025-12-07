//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function bonusTime01(salary, bonus) {
  let finalSalary = salary;
  if (bonus) {
    finalSalary *= 10;
  }
  return `\u00A3${finalSalary}`;
}
console.log(bonusTime01(100, true));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function bonusTime02(salary, bonus) {
  return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
}
console.log(bonusTime02(100, true));
