/**
 * @summary Create array with N same items
 * @description Question one (1)
 * @param {number} many How many items do you need in array.
 * @param item Item for repeat.
 */
function arraySameItems(many, item) {
  if(many <= 0) {
    return [];
  } else {
    var array = [];

    for(let i = 0; i < many; i++) {
      array.push(item);
    }

    return array;
  }
}

/**
 * @summary Invert array
 * @description Question two (2)
 * @param {array} array Array that you want to invert.
 */
function invertArray(array) {
  var invertedArray = [];

  for(let i = 1; i <= array.length; i++) {
    invertedArray.push(array[array.length - i])
  }
  
  return invertedArray;
}

/**
 * @summary Remove unnecessary items from the array
 * @description Question three (3)
 * @param {array} array Array that you want to clean.
 */
function cleanArray(array) {
  var cleanedArray = [];

  for(let i = 0; i < array.length; i++) {
    let el = array[i];

    if(el != false && el != undefined && el != null) {
      cleanedArray.push(array[i]);
    }
  }
  
  return cleanedArray;
}

/**
 * @summary Create object from array
 * @description Question four (4)
 * @param {array} array Array of arrays.
 */
function createObject(array) {
  var object = {};

  for(let i = 0; i < array.length; i++) {
    let el = array[i];

    object[el[0]] = el[1];
  }

  return object;
}

/**
 * @summary Remove all items typed after array
 * @description Question five (5)
 * @param {array} array Array that you want to remove items.
 * @param items Items that you want to remove.
 */
function removeItems(array, ...items) {
  var cleanedArray = [];

  for(let i = 0; i < array.length; i++) {
    let addItem = true;

    for(let j = 0; j < items.length; j++) {
      if(array[i] == items[j]) {
        addItem = false;
        break;
      }
    }

    if(addItem) {
      cleanedArray.push(array[i]);
    }
  }
  
  return cleanedArray;
}

/**
 * @summary Remove the duplicated items
 * @description Question six (6)
 * @param {array} array Array that you want to remove duplicated items.
 */
function removeDuplicatedItems(array) {
  var cleanedArray = [];

  for(let i = 0; i < array.length; i++) {
    let element = array[i];

    if(cleanedArray.indexOf(element) === -1) {
      cleanedArray.push(element);
    }
  }
  
  return cleanedArray;
}

/**
 * @summary Compare two arrays
 * @description Question seven (7)
 * @param {array} arrayOne First array.
 * @param {array} arrayTwo Second array.
 */
function compareArrays(arrayOne, arrayTwo) {
  let maxArraySize = Math.max(arrayOne.length, arrayTwo.length);

  for(let i = 0; i < maxArraySize; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  
  return true;
}

/**
 * @summary Remove arrays indside array
 * @description Question eight (8)
 * @param {array} array Array with arrays that you want to turn in array of items.
 */
function makeUniqueArray(array) {
  var arrayResult = [];

  for(let i = 0; i < array.length; i++) {
    let element = array[i];

    if(element.constructor === Array) {
      for(let j = 0; j < element.length; j++){
        arrayResult.push(element[j]);
      }
    } else {
      arrayResult.push(element);
    }
  }

  return arrayResult;
}

/**
 * @summary Array cut
 * @description Question nine (9)
 * @param {array} array Array that you want to cut.
 * @param {number} size Size of arrays result.
 */
function cutArray(array, size) {
  var arrayResult = [];

  for(let i = 0; i < array.length; i += size) {
    arrayResult.push(array.slice(i, i + size));
  }

  return arrayResult;
}

/**
 * @summary Return equal values in both arrays
 * @description Question ten (10)
 * @param {array} arrayOne First array.
 * @param {array} arrayTwo Second array.
 */
function equalValuesInArrays(arrayOne, arrayTwo) {
  var arrayResult = [];

  for(let i = 0; i < arrayOne.length; i++) {
    for(let j = 0; j < arrayTwo.length; j++) {
      if(arrayOne[i] === arrayTwo[j]) {
        let element = arrayOne[i];

        if(arrayResult.indexOf(element) === -1) {
          arrayResult.push(element);
        }

        break;
      }
    }
  }

  return arrayResult;
}