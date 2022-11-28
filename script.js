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
var specialCharacters ="!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var userChoice = false;
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

//Include Special Characters?
userChoice = confirm("Click OK to confirm including special characters.");
if(userChoice == true){
  passwordOptions += specialCharacters;
}

console.log(passwordOptions);

//Include Numeric?
userChoice = confirm("Click OK to confirm including numeric characters.");
if(userChoice == true){
  passwordOptions += numberChoices;
}

console.log(passwordOptions);

//Include Lowercase?
userChoice = confirm("Click OK to confirm including lowercase characters.");
if(userChoice == true){
  passwordOptions += lowercaseLetters;
}

console.log(passwordOptions);

//Include Uppercase?
userChoice = confirm("Click OK to confirm including uppercase characters.");
if(userChoice == true){
  passwordOptions += uppercaseLetters;
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
