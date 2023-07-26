const palindromes = function (text) {
  const originalArrayText = [];
  let newArrayText = [];
  let reverseArray = [];

  for (let i = 0; i < text.length; i++) {
    originalArrayText.push(text[i].toLowerCase());
  }

  newArrayText = originalArrayText.filter(element => {
    return (
      (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) || 
      (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122)
    );
  });

  for (let i = 0; i < newArrayText.length; i++) {
    reverseArray.push(newArrayText[i]);
  }
  reverseArray.reverse();

  for (let i = 0; i < newArrayText.length; i++) {
    if (newArrayText[i] !== reverseArray[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
