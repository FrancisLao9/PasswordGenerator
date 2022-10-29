// Assignment code here
//*Arrays to sort choices that the user will have the option of picking from
var characterLength = 0; //* 8 < length < 128
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["?", "!", "~", "$", "_", ":", "&", "@", "*", "/", "-", "."];

//*Asking User for their preference of options
var length; //* 8 < length < 128
var lCase; //boolean
var uCase; //boolean
var num; // boolean
var sChar; //boolean

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  length = prompt("Choose the length of the password: (at least 8 but no greater than 128");

  //Assuring proper password length
  if (length < 8 || length > 128){
    quit = alert("Length of the password cannot be less than 8 or over 128");
    return;
  }

  lCase = confirm("Would you like lower case letters?");
  uCase = confirm("Would you like upper case letters?");
  num = confirm("Would you like numbers?");
  sChar = confirm("Would you like special characters? (?, /, -, etc.)");
  var quit; //plug in in case any input is deemed incorrect

  //Assuring at least 1 type of character is selected
  if (lCase == uCase == num == sChar == false){
    quit = alert("Must contain at least 1 type of character");
    return;
  }

  //creating array (generate) based on user answers
  var generate = [];
  if(lCase == true){
    generate = generate.concat(lowerCase);
  }
  if(uCase == true){
    generate = generate.concat(upperCase);
  }
  if(num == true){
    generate = generate.concat(numeric);
  }
  if(sChar == true){
    generate = generate.concat(specialChar);
  }

  //random generator into password
  for(var i = 0; i < generate.length; i++) {
  var ranGen = Math.floor(Math.random() * index);
  var ranChoice = generate[index]; //creating generate array
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //derives passwordTest from password

  passwordText.value = password; //prints text from passwordText/password

}

generateBtn.addEventListener("click", writePassword); //calls the writePassword function on command

