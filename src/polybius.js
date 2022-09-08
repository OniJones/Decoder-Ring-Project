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

  const numericAlphabet = [
    "11", "21", "31", "41", "51",
    "12", "22", "32", "42", "52",
    "13", "23", "33", "43", "53",
    "14", "24", "34", "44", "54",
    "15", "25", "35", "45", "55"
  ]

  const alphabet = [
    "a", "b", "c", "d", "e", 
    "f", "g", "h", "(i/j)", "k", 
    "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z"
  ];

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
      let decodedMessage = [];
      const message = input.split(" ");
      for (let i = 0; i < message.length; i++) {
        let number = message[i];
        if (number.length % 2 == 1) {
          return false;
        }
        let decodedWord = [];
        let separatedLetters = splitEveryTwoNums(number);
        separatedLetters.forEach((letter) => {
          let decipherIndex = numericAlphabet.indexOf(letter);
          let translatedLetter = alphabet[decipherIndex];
          return decodedWord.push(translatedLetter);
        })
        decodedMessage.push(decodedWord.join(''))
      }
      return decodedMessage.join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
