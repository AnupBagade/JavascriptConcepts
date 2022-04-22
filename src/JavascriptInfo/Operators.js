function Evaluate() {
  console.log("PostFix and Prefix");

  let a = 1,
    b = 1;
  let c = ++a; // ?
  let d = b++;
  console.log(`c - ${c}`);
  console.log(`d - ${d}`);
  console.log("----------------------------------");

  let e = 2;
  let x = 1 + (e *= 2);
  console.log(`x = ${x}`);
  console.log("----------------------------------");

  console.log("" + 1 + 0); // 10
  console.log("" - 1 + 0); // -1
  console.log(true + false); // 1
  console.log(6 / "3"); // 2
  console.log("2" * "3"); // 6
  console.log(4 + 5 + "px"); // 9px
  console.log("$" + 4 + 5); // $45
  console.log("4" - 2); // 2
  console.log("4px" - 2); // NaN
  console.log("-9" + 5); // -4
  console.log("-9" - 5); // -14
  console.log(null + 1); // 1
  console.log(undefined + 1); // NaN
  console.log("\t \n" - 2); // -2
  // Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0

  //Here’s a code that asks the user for two numbers and shows their sum.
  //It works incorrectly. The output in the example below is 12 (for default prompt values).
  //Why? Fix it. The result should be 3.
  let f = "1"; // prompt("First number?", 1);
  let g = "2"; // prompt("Second number?", 2);

  alert(f + g); // 12

  alert(+f + +g);
}

export default Evaluate;
