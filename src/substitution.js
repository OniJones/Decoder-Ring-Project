// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // set a variable for my alphabet
  const myAlpha = "abcdefghijklmnopqrstuvwxyz";
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    } else {
      const letterArray = alphabet.split('');
      if (letterArray.some((value, index, array) => array.lastIndexOf(value) != index)) {
        return false;
      }
    }
    // set a variable to return my message
    let myMessage = "";
    // set the input to lower case
    const lowerCase = input.toLowerCase();
    // if encoding a message
    if (encode) {
      // loop through the lower case input
      for (let i = 0; i < lowerCase.length; i++) {
        // set a variable for each letter in my alphabet
        let currentLetter = lowerCase[i];
        // find the index of the letter
        let letterIndex = myAlpha.indexOf(currentLetter);
        // find the parallel substitution index of my current letter in my alphabet
        let subLetter = alphabet[letterIndex];
        // If my substituted letter is undefined, it must be a space or special character
        if (typeof subLetter === "undefined") {
          // add in space, number or special character
          subLetter = currentLetter;
        }
        // Add the substituted letter to my message
        myMessage += subLetter;
      }
      // return my message
      return myMessage;
    } else {
      // loop through lower case
      for (let i = 0; i < lowerCase.length; i++) {
        let currentLetter = lowerCase[i];
        let letterIndex = alphabet.indexOf(currentLetter);
        let newLetter = myAlpha[letterIndex];
        if (typeof newLetter === "undefined") {
          newLetter = currentLetter;
        }
        myMessage += newLetter;
      }
    return myMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
