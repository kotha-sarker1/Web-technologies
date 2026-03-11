console.log("connected");

const counter = {
  wrong: 0
};

function collectData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  var isValid = true; 

  if (email === "") {
    document.getElementById("emailErr").innerHTML = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailErr").innerHTML = "Email must contain @";
    isValid = false;
  } else {
    document.getElementById("emailErr").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("passwordErr").innerHTML = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordErr").innerHTML = "Password must be at least 6 characters";
    isValid = false;
  } else if (!password.includes("#")) {
    document.getElementById("passwordErr").innerHTML = "Password must contain #";
    isValid = false;
  } else {
    document.getElementById("passwordErr").innerHTML = "";
  }

  if (isValid) {
    alert("Login Successful!");
    console.log("Data Submitted:", email, password);
  } else {
    counter.wrong = counter.wrong + 1; 
    document.getElementById("WrongCount").innerHTML = counter.wrong;
    console.log("Invalid submission attempt number:", counter.wrong);
  }

  return false;
}

function getEmail() {
  const email = document.getElementById("email").value;
  console.log("Email checking...", email);
}

function getPassword() {
  console.log("Typing password...");
}