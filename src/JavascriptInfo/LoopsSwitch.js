"In case of nested loops, How to break from the innermost nested loop to the outermost.";
"Labels can also be used with continue keyword or break keyword.";

function breakLoop() {
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, "");

      // what if we want to exit from here to Done (below)?
      break outer;
    }
  }

  alert("Done!");
}

("Get Prime Numbers from 1 to n");

const getPrimeNumbers = (n) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    if (i === 1 || i === 2) {
      result.push(i);
    } else {
      // make a call to isprime(i)
      if (isPrime(i)) {
        result.push(i);
      }
    }
  }

  console.log(result);
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export { breakLoop };
export { getPrimeNumbers };
