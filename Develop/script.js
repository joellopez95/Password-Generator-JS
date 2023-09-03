// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function called generatePassword

function generatePassword() {
  var lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var capital = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  var numeric = "0 1 2 3 4 5 6 7 8 9";
  

//Prompt user for pw length

var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

//Verify that length entered is between 8 and 128
//If it isn't, keep until they enter a valid value

//googled how to add 2 commands in an if statement, && couldn't work (ask TA why)
if (passwordLength < 8 || passwordLength > 180) {
  alert("Not valid");
 
  return generatePassword();
}
//Ask user if they want to include:

//Capital letters
var includeCapital = alert("Capital?")
//Lowercase letters?
var includeLowercase = alert("Lowercase?")
//Numbers specials?
var includeNumeric = alert("Numbers?")
//Keep track of answers in variables.




// Function to generate a random password based on user criteria
function NewPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
