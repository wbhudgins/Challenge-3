// Assignment code here
let password = document.getElementById("password")
let userInput = document.getElementById("generate");
userInput.addEventListener("click", () => {
  validateLength();
  let userLength = length;
  if (length == null) {
    return
  }
  
  let upperCaseCharacters = validateUpperCase();
  let lowerCaseCharacters = validateLowerCase();
  let numeric = validateNumeric();
  let specials = validateSpecials();
  let final = finalCheck(upperCaseCharacters, lowerCaseCharacters, numeric, specials)
  console.log(upperCaseCharacters)
  // let userUpperCaseChoice = upperCaseCharacters;
  console.log(userLength + " Length")
  password.innerHTML = printResult(userLength, final)

  // let question1 = prompt("Would you like to include special characters?")

})

function validateLength() {
  length = prompt("Indiate number of characters...")
  if(length > 8 || length == null) {
    return length
  } else {
    alert("Musr be greater than 8 characters!")
    validateLength()
  }
}

function validateUpperCase() {
  let upCaseCharacters = ""
  userPrompt = prompt("would you like to include uppercase letters? (y/n)")
  if(userPrompt == "y") {
    upCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upCaseCharacters
  } else if (userPrompt == "n") {
    return upCaseCharacters;
  } else {
    alert("Please enter y (Yes) or n (no)")
    validateUpperCase()
  }
}

function validateLowerCase() {
  let lowerCaseCharacters = ""
  userPrompt = prompt("would you like to include lower case letters? (y/n)")
  if(userPrompt == "y") {
    lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    return lowerCaseCharacters
  } else if (userPrompt == "n") {
    return lowerCaseCharacters;
  } else {
    alert("Please enter y (Yes) or n (no)")
    validateLowerCase()
  }
}

function validateNumeric() {
  let numeric = ""
  userPrompt = prompt("would you like to include numerical values? (y/n)")
  if(userPrompt == "y") {
    numeric = "0123456789"
    return numeric
  } else if (userPrompt == "n") {
    return numeric;
  } else {
    alert("Please enter y (Yes) or n (no)")
    validateNumeric()
  }
}

function validateSpecials() {
  let specials = ""
  userPrompt = prompt("would you like to include special values? (y/n)")
  if(userPrompt == "y") {
    specials = "!”#$%&’()*+,-./:;<=>?@}[\\^_`{|}~"
    return specials
  } else if (userPrompt == "n") {
    return specials;
  } else {
    alert("Please enter y (Yes) or n (no)")
    validateSpecials()
  }
}

function finalCheck(upperCaseCharacters, lowerCaseCharacters, numeric, specials) {
  let final = ""
  if (upperCaseCharacters !== "" || lowerCaseCharacters !== "" || numeric !== "" || specials !== "") {
    final = upperCaseCharacters + lowerCaseCharacters + numeric + specials
    return final
  } else {
    alert("You must enter y (Yes) or n (No) for on of the categories!")
    validateUpperCase();
  }
}

function printResult(userlength, final) {
  var result = '';
  let characters = final;
  var charactersLength = characters.length;
  for ( var i = 0; i < userlength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}


