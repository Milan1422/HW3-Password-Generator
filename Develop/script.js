// Prompt welcome screen
var noAddedSecurity = "abcdefghijklmnopqrstuvwxyz";
var addCapital = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var addCapitalNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var addCapitalNumbersSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?";
var addNumbers = "abcdefghijklmnopqrstuvwxyz01232456789";
var addNumbersSpecial = "abcdefghijklmnopqrstuvwxyz01232456789!@#$%^&*()?";
var addSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()?";
var addCapitalSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?"
var newPassword = "";

// Asking for user input
alert("Welcome User Let's Make A New Password For You!");
var passwordLength = prompt("How many characters would you like your new password to have?");
var passwordCapital = confirm("Would you like it to have capital letters?");
var passwordNumber = confirm("Would you like it to have numbers?");
var passwordSpecial = confirm("Would you like it to have special characters?");

// How many characters does the user want the password to include
if (passwordLength < 8 || passwordLength > 128){
  alert("Your new password must be between 8 and 128 characters long.")
}
else{
  alert("OK your new password will be " + passwordLength + " characters long!");
}


// Shows whether the user wants numbers in the password
if((passwordCapital && passwordNumber && passwordSpecial) === true){
  alert ("OK your new password will include capitals, numbers and special characters!");
  newPassword = addCapitalNumbersSpecial;
}
else if (((passwordNumber && passwordCapital) === true) && (passwordSpecial === false)){
  alert("OK your new password will include capitals and numbers!");
  newPassword = addCapitalNumbers;
}
else if(((passwordCapital && passwordSpecial) === true) && (passwordNumber === false)){
  alert ("OK your new password will include capitals and special characters!")
  newPassword = addCapitalSpecial;
}
else if((passwordCapital === true) && ((passwordNumber && passwordSpecial) === false)){
  alert("OK your new password will include capital letters!");
  newPassword = addCapital;
}
else if (((passwordNumber && passwordSpecial) === true) && (passwordCapital === false)){
  alert ("OK your password will include numbers and special characters!");
  newPassword = addNumbersSpecial;
}
else if((passwordNumber === true) && ((passwordCapital && passwordSpecial) === false)){
  alert ("OK your new password will include numbers!")
  newPassword = addNumbers;
}
else if (((passwordCapital && passwordNumber) === false) && (passwordSpecial === true)){
  alert ("OK your password will include special characters!");
  newPassword = addSpecial;
}
else {
  alert("Your new password is weak! will NOT have any security.");
  newPassword = noAddedSecurity;
}

//  Shows whether the user wants special characters on their password
// if (passwordSecial){
//   alert("OK your new password will have special characters!");
//   newPassword = passwordCapital + "!@#$%^&*()?";
// }
// else {
//   alert("Your new password will NOT have special characters!");
//   newPassword = passwordCapital;
// }

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
