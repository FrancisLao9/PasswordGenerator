// Assignment code here
//*Arrays to sort choices that the user will have the option of picking from
var characterLength = 0;
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
  var allTypes = [lCase, uCase, num, sChar];
  if (allTypes === false){
    quit = alert("Must contain at least 1 type of character");
    return;
  }

  //creating array based on user answers
  var startingArray = [];
  if(lCase == true){
    startingArray = startingArray.concat(lowerCase);
  }
  if(uCase == true){
    startingArray = startingArray.concat(upperCase);
  }
  if(num == true){
    startingArray = startingArray.concat(numeric);
  }
  if(sChar == true){
    startingArray = startingArray.concat(specialChar);
  }


  //Creating generatePassword function
  function generatePassword() {
    //random generator into password array
    var generate = [];
    var index2; //assisting variable for while loop if statements 
    for(var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * startingArray.length);
      var ranChoice = startingArray[index];
      generate = generate.concat(ranChoice);
    }


    //Multiple if statements to check that each choice is accounted for
    for(var ii = 0; ii < length; ii++) {
    if (!lowerCase == generate && lowerCase == startingArray){
      index = Math.floor(Math.random() * generate.length); //Choosing 2 random variables to replace into generate array
      index2 = Math.floor(Math.random() * lowerCase.length);
      generate[index] = lowerCase[index];
    }
    if (!upperCase == generate && upperCase == startingArray){
      index = Math.floor(Math.random() * generate.length); 
      index2 = Math.floor(Math.random() * upperCase.length);
      generate[index] = upperCase[index];
    }
    if (!numeric == generate && numeric == startingArray){
      index = Math.floor(Math.random() * generate.length); //picking random item from generate array to replace
      index2 = Math.floor(Math.random() * numeric.length);
      generate[index] = numeric[index];
    }
    if (!specialChar == generate && specialChar == startingArray){
      index = Math.floor(Math.random() * generate.length); //picking random item from generate array to replace
      index2 = Math.floor(Math.random() * specialChar.length);
      generate[index] = specialChar[index];
    }
    }
    return generate.join('');
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //derives passwordTest from password

  passwordText.value = password; //prints text from passwordText/password

}

generateBtn.addEventListener("click", writePassword); //calls the writePassword function on command

