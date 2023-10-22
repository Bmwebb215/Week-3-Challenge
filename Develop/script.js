// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*()-_+=<>?';

function generatePassword() {
  var userSet = ""
  var length = prompt("Choose the number of characaters between 8 and 128.");
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return
  } else if (length > 128) {
    alert("Password must be less than 128 characters");
    return
  }
  var hasUpperCase = confirm(" Would you like  to include uppercase letters?");
  var hasLowerCase = confirm("Would you like to include lower case letters?");
  var hasNumbers = confirm("Would you like to include numbers?")
  var hasSpecialChar = confirm("Would you like to include special characters?");

  if(hasUpperCase) {userSet += upperCaseLetters};
  if(hasLowerCase) {userSet += lowerCaseLetters};
  if(hasSpecialChar) {userSet += specialCharacters};
  if(hasNumbers){userSet += numbers};


var madePassword = "";
  for (let i = 0; i < length; i++) {
var index = Math.floor(Math.random() * userSet.length);
madePassword += userSet[index];

  }
  return madePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);