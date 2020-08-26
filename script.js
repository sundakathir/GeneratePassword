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
// Various Arrays 
const charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSpecial = ["!","#","$","%","&","*",".","/",";",":","?","@","^","_","|"];
const charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration and initialise with empty value 
var confirmedLength = "";
var confirmedCharSpecial =""
var confirmedCharNumber = ""
var confirmedCharLower = ""
var confirmedCharUppe

// Prompt to confirm the number of characters that the user would like to have in their password
function generatePassword() {
  var confirmedLength = (prompt("How many characters would you like to have on your password?"));

  // Loop if answer is less than 8 or more than 20
  while(confirmedLength <= 7 || confirmedLength >= 21) {
      alert("Password length must be between 8-20 characters Try again");
      var confirmedLength = (prompt("How many characters would you like to have on your password?"));
      } 

      // show message to the users that the number of characters will the  password  have 
      alert(`Your password will have ${confirmedLength} characters`);

    // Determine type of charactors used to make the password 
    var confirmedCharSpecial = confirm("would like to include special characters ? If Yes Please Click OK otherwise click Cancel to exclude special characters");
    var confirmedCharNumber = confirm("would like to include number characters ? If Yes Please Click OK otherwise click Cancel to exclude Number characters");    
    var confirmedCharLower = confirm("would like to include lawer case characters ? If Yes Please Click OK otherwise click Cancel to exclude lawer case characters");
    var confirmedCharUpper = confirm("would like to include upper case characters ? If Yes Please Click OK otherwise click Cancel to exclude upper case characters");
      // Loop if answer is outside the selections
      while(confirmedCharUpper === false && confirmedCharLower === false && confirmedCharSpecial === false && confirmedCharNumber === false) {
        alert("at least one type of characters should be selected");
    var confirmedCharSpecial = confirm("would like to include special characters ? If Yes Please Click OK otherwise click Cancel to exclude special characters");
    var confirmedCharNumber = confirm("would like to include number characters ? If Yes Please Click OK otherwise click Cancel to exclude Number characters");    
    var confirmedCharLower = confirm("would like to include lawer case characters ? If Yes Please Click OK otherwise click Cancel to exclude lawer case characters");
    var confirmedCharUpper = confirm("would like to include upper case characters ? If Yes Please Click OK otherwise click Cancel to exclude upper case characters");
    } 

      // set the password characters
      var passwordChar = []
      
    if (confirmedCharSpecial) {
      passwordChar = passwordChar.concat(charSpecial)
    }

    if (confirmedCharNumber) {
      passwordChar = passwordChar.concat(charNumber)
    }
      
    if (confirmedCharLower) {
      passwordChar = passwordChar.concat(charLower)
    }

    if (confirmedCharUpper) {
      passwordChar = passwordChar.concat(charUpper)
    }

     /* console.log(passwordChar) */

      // initalise with empty final password
      var finalPassword = ""
      
      for (var i = 0; i < confirmedLength; i++) {
        finalPassword = finalPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        /*console.log(finalPassword)*/
      }
      return finalPassword;
}
