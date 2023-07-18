const removeFromArray = function(array, ...itemsToDelete) {
  for (let i = 0; i < itemsToDelete.length; i++) {
    if (array.includes(itemsToDelete[i])) {
      for (let j = 0; j < array.length; j++) {
        if (itemsToDelete[i] === array[j]) {
          array.splice(j, 1);
          j--;
          if (array.includes(itemsToDelete[i]) === false) {
            break;
          }
        }
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
