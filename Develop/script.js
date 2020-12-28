// Prompt welcome screen
alert("Welcome User Let's Make A New Password For You!");
var newPassword = "abcdefghijklmnopqrstuvwxyz";
// Alerts showing user input
// How many characters does the user want the password to include
var passwordLength = prompt("How many characters would you like your new password to have?");
if (passwordLength < 8 || passwordLength > 128){
  alert("Your new password must be between 8 and 128 characters long.")
}
else{
  alert("OK your new password will be " + passwordLength + " characters long!");
}

// Shows whether the user wants capital letters
var passwordCapital = confirm("Would you like it to have capital letters?");
if (passwordCapital) {
  alert("OK your new password will have capital letters!");
  newPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
else {
  alert("Your new password will NOT have capital letters!");
}

// Shows whether the user wants numbers in the password
var passwordNumber = confirm("Would you like it to have numbers?");
if (passwordNumber){
  alert("OK your new password will have numbers!");
  newPassword = passwordCapital + "0123456789";
}
else {
  alert("Your new password will NOT have numbers!");
  newPassword = passwordCapital;
}

//  Shows whether the user wants special characters on their password
var passwordSecial = confirm("Would you like it to have special characters?");
if (passwordSecial){
  alert("OK your new password will have special characters!");
  newPassword = passwordCapital + "!@#$%^&*()?";
}
else {
  alert("Your new password will NOT have special characters!");
  newPassword = passwordCapital;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = passwordLength,
      charset = newPassword,
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
