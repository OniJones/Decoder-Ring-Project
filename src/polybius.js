// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // Setting up the cipher
  const cipher = {
    "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
    "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
    "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
    "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
    "15": "v", "25": "w", "35": "x", "45": "y", "55": "z",
  }

  const decipher = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i/j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55",
  } 

  // Helper function
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  // Helper function
  const splitEveryTwoNums = numberString => {
    const separatedLetters = [];
    for (let index = 0; index < numberString.length; index += 2) {
      separatedLetters.push(numberString.slice(index, index + 2));
    }
    return separatedLetters;
  }
  


  function polybius(input, encode = true) {
    // Switch input to lower case
    const lowerCaseInput = input.toLowerCase();

    if (encode) {
      let encodedMessage = '';

      for (let i = 0; i < lowerCaseInput.length; i++) {
        let letter = lowerCaseInput[i];

        if (!letter.match(/[a-z]/i)) {
          encodedMessage += letter;
        } else {
          if (letter === "i" || letter === "j") {
            letter = "i/j";
          }
          if (Object.values(cipher).includes(letter)) {
            let number = getKeyByValue(cipher, letter);
            encodedMessage += number;
          }
        }
      }
      return encodedMessage;

    } else {
      let decodedMessage = '';

      let newInput = splitEveryTwoNums(input);
      // console.log(`My new input is: ${newInput}`)
      for (let i = 0; i < newInput.length; i++) {
        let number = newInput[i];
        // console.log(`My new number is: ${number}`)

        if (number.match(' ')) {
          decodedMessage += number;
        } else {
          

          if (Object.values(decipher).includes(number)) {
            let letter = getKeyByValue(decipher, number);
            decodedMessage += letter;
          }
        }
        
        
        // if (number.split(' ') % 2 == 1) {
        //   return false;
        // }
      }
      
      console.log(`My decoded message is: ${decodedMessage}`)
      return decodedMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
