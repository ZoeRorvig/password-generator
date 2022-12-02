// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function generates a random password. 
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

  // Get the password length from the user.
  passwordLength = prompt("How many characters would you like your password to contain?");

  // If password length prompt is canceled, exit function.
  if(passwordLength === null) return passwordLength;

  passwordLength = parseInt(passwordLength);

  // Checks if any non-numbers were entered.
  if(isNaN(passwordLength)) {
    alert("Password must be a valid number.");
    return generatePassword();
  // Checks to make sure that the password length is between 8 and 128.
  } else if(passwordLength < 8) {
    alert("Password must be at least 8 characters.");
    return generatePassword();
  } else if(passwordLength > 128) {
    alert("Password must be less than 128 characters.");
    return generatePassword();
  }

  // Include Uppercase? If so, selects one random Uppercase Letter to include.
  userChoice = confirm("Click OK to confirm including uppercase characters.");
  if(userChoice == true) {
    passwordOptions += uppercaseLetters;
    randomPick = Math.floor(Math.random() * uppercaseLetters.length);
    password += uppercaseLetters[randomPick];
    passwordLength--;
  }
  
  // Include Lowercase? If so, selects one random Lowercase Letter to include.
  userChoice = confirm("Click OK to confirm including lowercase characters.");
  if(userChoice == true) {
    passwordOptions += lowercaseLetters;
    randomPick = Math.floor(Math.random() * lowercaseLetters.length);
    password += lowercaseLetters[randomPick];
    passwordLength--;
  }

  // Include Special Characters? If so, selects one random Special Character to include.
  userChoice = confirm("Click OK to confirm including special characters.");
  if(userChoice == true) {
    passwordOptions += specialCharacters;
    randomPick = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters[randomPick];
    passwordLength--;
  }
  
  // Include Numeric? If so, selects one random Number to include.
  userChoice = confirm("Click OK to confirm including numeric characters.");
  if(userChoice == true) {
    passwordOptions += numbers;
    randomPick = Math.floor(Math.random() * numbers.length);
    password += numbers[randomPick];
    passwordLength--;
  }

  // Generate Password
  // Check to make sure characters were selected. If yes, generate password.
  if(passwordOptions === ""){
    password = "No Characters Selected";
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
