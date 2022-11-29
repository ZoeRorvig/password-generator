// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Reset Password
  password = "";

  // Declaring variables
  var passwordLength = 0;
  var passwordOptions = "";
  var randomPick = "";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = lowercaseLetters.toUpperCase();
  var numbers = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var userChoice = false;


  //TODO: must pick at least one character.

  //Get the password length.
  passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);

  if(passwordLength===null) return passwordLength;

  passwordLength = parseInt(passwordLength);

  if(isNaN(passwordLength)) {
    alert("Password must be a valid number.");
    return generatePassword();
  }
  else if(passwordLength < 8) {
    alert("Password must be at least 8 characters.");
    
    return generatePassword();
  } else if(passwordLength > 128) {
    alert("Password must be less than 128 characters.");
    return generatePassword();
  }
  //}

  //Include Special Characters?
  userChoice = confirm("Click OK to confirm including special characters.");
  if(userChoice == true) {
    passwordOptions += specialCharacters;
  }

  console.log(passwordOptions);

  //Include Numeric?
  userChoice = confirm("Click OK to confirm including numeric characters.");
  if(userChoice == true) {
    passwordOptions += numbers;
  }

  console.log(passwordOptions);

  //Include Lowercase?
  userChoice = confirm("Click OK to confirm including lowercase characters.");
  if(userChoice == true) {
    passwordOptions += lowercaseLetters;
  }

  console.log(passwordOptions);

  //Include Uppercase?
  userChoice = confirm("Click OK to confirm including uppercase characters.");
  if(userChoice == true) {
    passwordOptions += uppercaseLetters;
  }

  console.log(passwordOptions);

  //Generate Password
  //Check to make sure characters were selected. If yes, generate password.
  if(passwordOptions === ""){
    password = "No Characters Selected";
    console.log(password);
  }else{
    for(var i = 0; i < passwordLength; i++) {
      randomPick = Math.floor(Math.random() * passwordOptions.length);
      password += passwordOptions[randomPick];
  }
}
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(!password) return;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
