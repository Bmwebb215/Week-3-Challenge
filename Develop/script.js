// Assignment Code
var generateBtn = document.querySelector("#generate");
/**
 Prompt the use
 */
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numbers = "0123456789"
// console.log(numbers.split(""));

function generatePassword() {

  var userSet = ""
  var length = prompt("Choose the number of characaters between 8 and 128.");
  if(length < 8){
    alert("Password must be at least 8 characters");
    return
  } else if (length > 128) {
    alert("Password must be less than 128 characters");
    return
  }
  var hasUpperCase = confirm(" Would you like uppercase in your password?")
  var hasLowerCase = confirm("Would you like to have lower case in your password");

  if (hasUpperCase === true) {
    userSet += upperCaseLetters

  }
  // for (let i = 0; i < length; i++) {

  //  var index = Math.floor(Math.random() * upperCaseLetters.length);

  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//var s = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';