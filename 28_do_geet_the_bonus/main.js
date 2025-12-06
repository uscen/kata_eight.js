//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function switchItUp(number) {
  switch (number) {
    case 1:
      return "one"; // NOTE: return already stop execution so no need for [break] keyword here
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    // ...
    default:
      break;
  }
}
console.log(switchItUp(2));
