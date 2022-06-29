"Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.";
function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return true;
  }
  return false;
}

/*
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0
*/

function sumSalaries(obj) {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  return result;
}

/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
*/

function multiplyProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
