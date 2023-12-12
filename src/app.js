var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
  return chocolates;
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(chocolates.shift());
  }
  return arr;
}

//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(chocolates.pop());
  }
  return arr;
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  let arr = [];
  for (let i = chocolates.length - 1; i >= 0 && arr.length < number; i--) {
    if (chocolates[i] === color) {
      arr.push(chocolates.splice(i, 1)[0]);
    }
  }
  return arr;
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  let obj = {};
  for (let i = 0; i < chocolates.length; i++) {
    // if the chocolates[i] is not present i.e it is undefined, so we set its frequency to 1, since it's first time in the object
    if (obj[chocolates[i]] == undefined) {
      obj[chocolates[i]] = 1;
    }
    // if it is present, we increase the frequency by 1
    else {
      obj[chocolates[i]]++;
    }
  }
  return Object.values(obj);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let obj = {};
  for (let i = 0; i < chocolates.length; i++) {
    if (obj[chocolates[i]] == undefined) {
      obj[chocolates[i]] = 1;
    } else {
      obj[chocolates[i]]++;
    }
  }

  const allColor = [];

  for (const color in obj) {
    const count = obj[color];
    for (let i = 0; i < count; i++) {
      allColor.push(color);
    }
  }

  allColor.sort((a, b) => {
    // if the frequencies are same, sort them alphabetically
    if (obj[b] === obj[a]) {
      return a.localeCompare(b);
    }
    // if the frequencies are not same, arrange them in descending order of their frequency
    return obj[b] - obj[a];
  });
  return allColor;
}

//Progression 7: Change z chocolates of x color to y color
function checkAndChangeChocolateColor(chocolates, color, finalColor) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
}

function changeChocolateColor(chocolates, number, color, finalColor) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }
  return checkAndChangeChocolateColor(chocolates, color, finalColor);
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }
  let changedColor = checkAndChangeChocolateColor(
    chocolates,
    color,
    finalColor
  );
  let count = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == finalColor) {
      count++;
    }
  }
  return [count, chocolates];
}

//Challenge 1: Remove one chocolate of x color from the top
const removeChocolateOfColor = (chocolates, color) => {
  let index = 0;
  for (let i=0; i<chocolates.length; i++){
    // to check if the current index matches the color
    if(chocolates[i]==color){
      index = i
      break;
    }
  }

  // use of splice method to remove the chocolate found at the particular index
  chocolates.splice(index, 1)
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const dispenseRainbowChocolates = (chocolates) => {
  let obj = {}

  for(let i=0; i<chocolates.length; i++){
    if(obj[chocolates[i]]==undefined){
      obj[chocolates[i]]=1
    }
    else{
      obj[chocolates[i]]++
    }
  }

  let rainbowColorCount = 0
  for(i in obj)
  if(obj[i]%3 ==0){
      rainbowColorCount += obj[i] / 3
  }
  return rainbowColorCount;
}