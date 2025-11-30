//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function basicOp01(op, numOne, numTwo) {
  return window.eval(`${numOne} ${op} ${numTwo}`);
  // eval Can Take Any Valid Javascript Code As String And Executed
  // return window.eval("10 < 8 ? 'uscen' : 'LLI' ");
  // eval take string and because Type Coercion This Also Work
  // return window.eval(numOne + op + numTwo);
}
console.log(basicOp01("+", "20", "80"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function basicOp02(op, numOne, numTwo) {
  let result = 0;
  // NOTE: use unary plus to convert String to number
  // To Avoud Type Casting (Type Coercion)
  numOne = +numOne;
  numTwo = +numTwo;
  switch (op) {
    case "+":
      result = numOne + numTwo;
      break;
    case "-":
      result = numOne - numTwo;
      break;
    case "*":
      result = numOne * numTwo;
      break;
    case "/":
      result = numOne / numTwo;
      break;
    default:
      result = result;
  }
  return result;
}
console.log(basicOp02("+", "10", "20"));
