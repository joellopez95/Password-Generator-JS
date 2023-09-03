// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function called generatePassword

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  

//Prompt user for pw length

var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

//Verify that length entered is between 8 and 128
//If it isn't, keep until they enter a valid value

if (passwordLength < 8 && passwordLength > 128 ) {
  alert("Not valid");
 
  return generatePassword();
}
//Ask user if they want to include:
//Capital letters
//Lowercase letters?
//Keep track of answers in variables.

var includeLowercase = alert("Lowercase?")
var includeCapital = alert("Capital?")
var includeNumeric = alert("Numbers?")
// Function to generate a random password based on user criteria
// Write password to the #password input
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
