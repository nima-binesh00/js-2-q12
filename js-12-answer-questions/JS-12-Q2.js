// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function num(a, b) {
  return a * b;
}
function num2(q = 2, w = 2) {
  let num22 = num(q, w);
  console.log(q, w, num22);
}
num2(4, 8);
