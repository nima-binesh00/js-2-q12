//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function num() {
  const name = ["Action", "Potential", "Signals"];
  function num1() {
    console.log(name[0]);

    function num2() {
      console.log(name[1]);

      function num3() {
        console.log(name[2]);
      }
      num3();
    }
    num2();
  }
  num1();
}

num();
