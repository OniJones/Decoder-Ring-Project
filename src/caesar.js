// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// you can add any code you want within this function scope

// String of the alphabet split into individual strings inside of an array
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // If shift is zero, less than -25, greater than 25, or shift value not a number, return false
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || isNaN(shift)) {
      return false;
    }

    // Capital letters can be ignored, switch them to lowerCase
    const lowerCaseInput = input.toLowerCase();

    // What will be returned
    let secretMessage = '';

    if (encode) {
      // Looping through lower cased input
      for(let i = 0; i < lowerCaseInput.length; i++) {
        // Set a variable for the current lower case input
        let encoded = lowerCaseInput[i];
        // Set a variable for the index of the encoded letter
        let currentIndex = alphabet.indexOf(encoded);
        // Set a variable for the shifted index
        let newIndex = currentIndex + shift;

        // If the new Index is greater than 25, go back 26
        if(newIndex > 25) newIndex -= 26;
        // If the new Index is less than 0, add 26
        if(newIndex < 0) newIndex += 26;
        // If the encoded does not match A-Z
        if(!encoded.match(/[a-z]/i)) {
          // Add the non alphabetic character, or space, to the secret message
          secretMessage += encoded;
        } else {
        // Add the shifted letter to the secret message
        secretMessage += alphabet[newIndex];
        }
      }
    } else {
      // Looping through lower case input
      for(let i = 0; i < lowerCaseInput.length; i++) {
        // Set a variable for the current lower case input
        let decoded = lowerCaseInput[i];
        // Set a variable for index of the decoded letter
        let currentIndex = alphabet.indexOf(decoded);
        // Set a variable for the shifted index
        let newIndex = currentIndex - shift;
        
        // If the new Index is less than 25, go forward 26
        if(newIndex > 25) newIndex -= 26;
        // If the new Index is greater than 0, go back 26
        if(newIndex < 0) newIndex += 26;
        if(!decoded.match(/[a-z]/i)) {
          // Add the non alphabetic character, or space, to the secret message
          secretMessage += decoded;
        } else {
          // Add the shifted letter to the secret message
          secretMessage += alphabet[newIndex];
        }
      }
    }
    // Return the sercet message
    return secretMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
