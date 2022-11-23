// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Reset Password
password = "";

// Declaring variables
var passwordLength = 0;
var passwordOptions = "";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// Inputting password length
while(passwordLength < 8 || passwordLength > 128){
  
  passwordLength = prompt("Please enter the length of your password (must be at least 8 characters and no more than 128 characters):");

//Checking if what the user entered is a number?
  /*if(typeof passwordLength != "number"){
    alert("Please enter a number!");
    passwordLength = 0;
  }*/ 

  if(passwordLength < 8){
    alert("Password must be greater than 8 characters.");
  }else if(passwordLength > 128){
    alert("Password must be less than 128 characters.");
  }
}

//Include Lowercase?
userChoice = prompt("Would you like to include lowercase letters? (1 = YES, 2 = NO)");
if(userChoice == 1){
  passwordOptions += lowercaseLetters;
}

console.log(passwordOptions);
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
