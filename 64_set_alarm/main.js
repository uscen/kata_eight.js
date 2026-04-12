//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function setAlarm(employed, vaction) {
  return employed && !vaction;
}
console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
