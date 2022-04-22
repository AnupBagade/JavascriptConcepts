function ComparisionEvaluate() {
  console.log("--------------ComparisionEvaluations---------------------");
  let a = 0;
  console.log(Boolean(a)); // false

  let b = "0";
  console.log(Boolean(b)); // true

  console.log(a === b); // true!
  console.log("**********************************************************");
}

export default ComparisionEvaluate;
