// Prompt welcome screen
alert("Welcome User Let's Make A New Password For You!");
var passwordLength = prompt("How many characters would you like your new password to have?");
var passwordCapital = confirm("Would you like it to have capital letters?");
var passwordNumber = confirm("Would you like it to have numbers?");
var passwordSecial = confirm("Would you like it to have special characters?");

// Alerts showing user input
// How many characters does the user want the password to include
if (passwordLength < 8 || passwordLength > 128){
  alert("Your new password must be between 8 and 128 characters long.")
}
else{
  alert("OK your new password will be " + passwordLength + " characters long!");
}

// SHows whether the user wants capital letters
if (passwordCapital) {
  alert("OK your new password will have capital letters!");
}
else {
  alert("Your new password will NOT have capital letters!");
}

// Shows whether the user wants numbers in the password
if (passwordNumber){
  alert("OK your new password will have numbers!");
}
else {
  alert("Your new password will NOT have numbers!");
}

//  Shows whether the user wants special characters on their password
if (passwordSecial){
  alert("OK your new password will have special characters!");
}
else {
  alert("Your new password will NOT have special characters!");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
