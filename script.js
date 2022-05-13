// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmUpperCase = 0;
var confirmLowerCase = 0;
var confirmNumbers = 0;
var confirmSpecialCharacters = 0;

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", confirmLength);

let passLength;

function confirmLength () {
  passLength = (prompt("What number between 8 and 128 would you like to be the length of your password?"));

  if (passLength < 8 || passLength > 128){
    alert("Invalid number. Has to be between 8-128. Please try again.");
    confirmLength();
  } else {
    console.log(passLength);
    confirmPass();
  }
}

function confirmPass(){

  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","<",">","?"];

  var charSet = [ ];
  var password = ""

  if (confirm("Do you want your password to contain uppercase letters?")) {
    confirmUpperCase = 1;
    charSet.push(...upperCase);
    password += upperCase[(Math.floor(Math.random()*upperCase.length))]
    passLength--
  }
  if (confirm("Do you want your password to contain lowercase letters?")) {
    confirmLowerCase = 1;
    charSet.push(...lowerCase);
    password += lowerCase[(Math.floor(Math.random()*lowerCase.length))]
    passLength--
  } 
  if (confirm("Do you want your password to contain numbers?")) {
    confirmNumbers = 1;
    charSet.push(...numbers);
    password += numbers[(Math.floor(Math.random()*numbers.length))]
    passLength--
  }
  if (confirm("Do you want your password to contain special characters?")) {
    confirmSpecialCharacters = 1;
    charSet.push(...specialCharacters);
    password += specialCharacters[(Math.floor(Math.random()*specialCharacters.length))]
    passLength--
  }

  console.log(confirmUpperCase);
  console.log(confirmLowerCase);
  console.log(confirmNumbers);
  console.log(confirmSpecialCharacters);
  console.log(charSet);

  


for(i = 0; i < passLength; i++) {
  password += charSet[(Math.floor(Math.random()*charSet.length))]; 
}
console.log(password);


var passwordText = document.querySelector("#password");
  

passwordText.value = password;

};


