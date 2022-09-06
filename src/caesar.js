// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Capital letters can be ignored, switch them to lowerCase
    const lowerCaseInput =input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newInput = '';

    // If shift is zero, less that -25, greater than 25, or shift value isn't present, return false
    if (shift <= 0 || shift > 25 || !shift) {
      return false;
    }

    for(let i = 0; i < lowerCaseInput.length; i++) {
      const currentInput = lowerCaseInput[i];

        //Spaces and nonalphabet symbols should be maintained throughout
      if(typeof currentInput === " " || typeof currentInput === symbol || typeof currentInput === number) {
        newInput += lowerCaseInput;
        continue;
      }
      const currentIndex = alphabet.indexOf(currentInput);
      const newIndex = currentIndex + shift;
    }

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
