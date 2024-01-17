// Assignment Code
var generateBtn = document.querySelector("#generate");
var isTrue= true;
var passwordLength = 0
var isTrue2 = true;
var uppercaseIncluded = true;
var lowercaseIncluded = true;
var specialCharactersIncluded = true;
var numbersIncluded = true;
var isTrue3 = true;
var isTrue4 = true;
var isTrue5 = true;

    // Takes prompts to collect user imput
function getrandomInt(minimum, maximun){
  return Math.floor(Math.random()*(maximun - minimum +1))+ minimum;
}

function generatePassword(uppercase, lowercase,specialCharacters, numbers, length){
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowercase = "abcdefghijklmnopqrstuvwxyz"
  specialCharacters = "!@#$%^&*()_+=-[]{}/.?>\|"
  numbers = "0123456789"
  var characters = " "
  var passWord = " "

  while(isTrue){

    var ans1 = prompt("How long would you like your password?");
    var num = parseInt(ans1);
    if(isNaN(num)){
      alert("Must be numerical");
    }
    else{
      passwordLength = num;
    }
    if(passwordLength < 8 || passwordLength > 126){
      alert("Must be between 8 and 126");
    }
    else{
      isTrue = false;
    }
  
  }
  
  while(isTrue2){
    
    var ans1 = prompt("Would you like to include Uppercase letters? Type Yes or No");
    if (isNaN(ans1)){
      ans1 = ans1.toLocaleUpperCase();
      switch(ans1){
  
        case "YES":
          alert("Uppercase letters will be added.")
          uppercaseIncluded = true;
          break;
  
        case "NO":
          alert("Uppercase will not be added.")
          uppercaseIncluded = false
          break;
      }
      isTrue2 = false;
  
    }
    else{
      alert("Number values not accepted.")
    }
   
  
  
  }
  
  while(isTrue3){
    
    var ans1 = prompt("Would you like to include Lowercase letters? Type Yes or No")
    if (isNaN(ans1)){
      ans1 = ans1.toLocaleUpperCase();
      switch(ans1){
  
        case "YES":
          alert("Lowercase letters will be added.")
          lowercaseIncluded = true;
          break;
        
        case "NO":
          alert("Lowercase will not be added")
          lowercaseIncluded = false;
          break;
        
      }
      isTrue3 =false;
    }
    else{
      alert("Number values not accepted")
    }
  
  
  }
  
  while(isTrue4) {
    var ans1 =prompt("Would you like to include Special Characters? Type Yes or No")
    if (isNaN(ans1)){
      ans1 = ans1.toLocaleUpperCase();
      switch(ans1){
  
        case "YES":
          alert("Special Characters will be added")
          specialCharactersIncluded = true
          break;
        
        case "NO":
          alert("Special Characters will not be added")
          specialCharactersIncluded = false
          break;
  
      }
      isTrue4 = false;
    }
    else{
      alert("Number values not accepted")
    }
  
  }
  
  while(isTrue5) {
    var ans1 = prompt("Would you like to include Numbers? Type Yes or No")
    if (isNaN(ans1)){
      ans1 = ans1.toLocaleUpperCase();
      switch(ans1){
        
        case "YES":
          alert("Numbers will be added")
          numbersIncluded = true
          break;
        
        case "NO":
          alert("Numbers will not be added")
          numbersIncluded = false
          break;
  
      }
      isTrue5 = false;
    }
    else{
      alert("Number values not accecpted")
    }
  }
    if (uppercaseIncluded){
      characters += uppercase
    }
    if (lowercaseIncluded){
      characters += lowercase
    }
    if (specialCharactersIncluded){
      characters += specialCharacters
    }
    if (numbersIncluded){
      characters += numbers
    }
  for (let i = 0; i < passwordLength; i++){
    passWord += characters[getrandomInt(0, characters.length - 1)]
  }
  return passWord
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(uppercaseIncluded, lowercaseIncluded, specialCharactersIncluded, numbersIncluded, passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
