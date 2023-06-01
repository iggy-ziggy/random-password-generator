// Assignment Code
//for weekly challenge

var uppercaseLetters = ['A', 'B', 'C', 'D', 'E' ,'F' ,'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function passwordOptions() {
    var length = prompt("How many characters should your password have? Please choose a number between 8 - 128");
    if (length < 8 || length > 128){
        alert("Password must be at least 8 characters and less than 128 characters.")
    }
    //prompt vs confirm: prompt gives empty input while confirm gives yes or no
    var hasUpperCase = confirm("Would you like to use upper case letters?");
    console.log(hasUpperCase);
    var hasLowerCase = confirm("Would you like to use lower case letters?");
    console.log(hasLowerCase);
    var hasNumbers = confirm("Would you like to use numbers?");
    console.log(hasNumbers);
    var hasSpecialCharacters = confirm("Would you like to use special characters?");
    console.log(hasSpecialCharacters);
    //if nothing is entered, prompt:
    if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSpecialCharacters === false) {
        alert("At least one character must be chosen.")
        passwordOptions()
    }
//in object below, store values of variables above
var passwordOptions = { //object
    length: length, //name: local variable
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters

}
   return passwordOptions //returns the value of everything in the object
}

function generatePassword() {
  var options = passwordOptions() //references previous function where user's choices are stored
  
  console.log(options);
  var possibleCharacters = []//stores all possible characters
  var randomCharacters = []
  var result = []
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    randomCharacters.push(generateRandom(lowercaseLetters));
  }
   
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    randomCharacters.push(generateRandom(uppercaseLetters));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    randomCharacters.push(generateRandom(numbers));
  }
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    randomCharacters.push(generateRandom(specialCharacters));
  }
  for(var i = 0; i < options.length; i++) {
    var possibleCharacter = generateRandom(possibleCharacters)
    result.push(possibleCharacter)
  }
  console.log("random characters", randomCharacters);
  return result;
 }



function generateRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex]
  return randomElement;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);