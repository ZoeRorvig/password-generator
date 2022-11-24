// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Reset Password
password = "";

// Declaring variables
var passwordLength = 0;
var passwordOptions = "";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChoices = "0123456789";
var specialCharacters ="!@#$%^&*()";
var userChoice = 0;
var randomPick = "";

// Inputting password length
while(passwordLength < 8 || passwordLength > 128){
  
  passwordLength = prompt("How many characters would you like your password to contain?");

//Checking if what the user entered is a number?
  /*if(typeof passwordLength != "number"){
    alert("Please enter a number!");
    passwordLength = 0;
  }*/ 

  if(passwordLength < 8){
    alert("Password must be at least 8 characters.");
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

//Include Uppercase?
userChoice = prompt("Would you like to include uppercase letters? (1 = YES, 2 = NO)");
if(userChoice == 1){
  passwordOptions += uppercaseLetters;
}

console.log(passwordOptions);

//Include Numeric?
userChoice = prompt("Would you like to include numbers? (1 = YES, 2 = NO)");
if(userChoice == 1){
  passwordOptions += numberChoices;
}

console.log(passwordOptions);

//Include Special Characters?
userChoice = prompt("Would you like to include special characters? (1 = YES, 2 = NO)");
if(userChoice == 1){
  passwordOptions += specialCharacters;
}

console.log(passwordOptions);

//Generate Password
for(var i = 0; i < passwordLength; i++){
  randomPick = Math.floor(Math.random() * passwordOptions.length);
  password += passwordOptions.substring(randomPick, randomPick +1);
}
  
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
