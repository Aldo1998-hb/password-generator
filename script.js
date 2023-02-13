// Assignment code here
var passwordLength = 8;
var choiceArr = [];

var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArr = ["0","1","2","3","4","5","6","7","8","9"];
var specialsArr = ["!","@","#","$","%","^","&","*","(",")","<",">","~"];

function prompts() {
  choiceArr = []; // set empty array for the prompts
  passwordLength = parseInt(prompt("select passwor length. (8-128)"));// convert the prompts value into an integer
  //check pasword length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){

    alert("Please make sure that the password's length is a numbr form 8 to 128.");
    return false;
  }
   //check for lowercasse
  if(confirm("Will the password incloude lowercasse letters?")){
    choiceArr = choiceArr.concat(lowerArr);
  }
   //check for uppercasse
  if(confirm("Will the password incloude uppercasse letters?")){
    choiceArr = choiceArr.concat(upperArr);
  }
   //check for numbers
  if(confirm("Will the password incloude numbers?")){
    choiceArr = choiceArr.concat(numbersArr);
  }
   //check for special characters
  if(confirm("Will the password incloude special characters?")){
    choiceArr = choiceArr.concat(specialsArr);
  }
  return true;
  
}

function generatePassword (){
//pasword generation based on the prompts
 var newPassword = "";
 for (i=0; i < passwordLength; i++){
   var index = Math.floor(Math.random() *choiceArr.length);
   newPassword = newPassword + choiceArr[index];
 }
 return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var validInput = prompts(); // true or false return
  if (validInput){
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
