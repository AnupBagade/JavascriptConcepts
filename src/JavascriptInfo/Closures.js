function x() {
  // inner function having access to the variables declared in the outer
  // function is called closures.
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

// Function executes only one time - Test.
function oneTimeFunction() {
  var count = 1;
  function Test() {
    if (count === 1) {
      console.log("Executing Test function");
      count = 0;
    } else {
      console.log("Cannot execute again.");
    }
  }
  return Test;
}

export { oneTimeFunction };
export { x };
