// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function called generatePassword

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-={}[]:;<>,.?/"
  var choseOptions = "";
  var result = "";


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
var includeCapital = confirm("Capital?")
//Lowercase letters?
var includeLowercase = confirm("Lowercase?")
//Numbers specials?
var includeNumeric = confirm("Numbers?")
//special?
var includeSpecial = confirm("Special?")
//Keep track of answers in variables.
console.log(includeCapital)
console.log(includeLowercase)


//created new variable choseOptions (concatination was done) (Tutor Help: Andres Jimenez)
if(includeCapital){
choseOptions=choseOptions+capital;
}

if(includeLowercase){
  choseOptions=choseOptions+ lowercase;
}

if(includeNumeric){
  choseOptions=choseOptions+numeric;
}

if(includeSpecial){
  choseOptions=choseOptions+special;
}
//checking what choseOptions does
console.log(choseOptions);

//created a for loop so that code block would run the amount of times i chose for ps length
for(var i =0; i< passwordLength; i++){
//charAt, Math.floor, & Math.random I used W3 schools to help me with line of code.  
result = result+choseOptions.charAt(Math.floor(Math.random() * choseOptions.length))
//checked what result does
console.log(result);
}

return result;


}

//should validate if at least 1 character type should be selected






// Function to generate a random password based on user criteria
//function newPassword



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
