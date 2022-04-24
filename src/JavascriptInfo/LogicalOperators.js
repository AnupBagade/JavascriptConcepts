function checkLogin() {
  let role = prompt("Who is there?", "");
  if (role === "Admin") {
    let password = prompt("Enter the password", "");
    if (password === "TheMaster") {
      alert("Welcome");
    } else if (password === "" || password == null) {
      alert("Cancelled");
    } else {
      alert("Wrong Password");
    }
  } else if (role == null) {
    alert("Cancelled");
  } else {
    alert("I don't know you");
  }
  console.log(role);
}

export { checkLogin };
