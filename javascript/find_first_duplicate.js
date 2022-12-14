// Go through an array in order and return the first duplicate
function findFirstDuplicate(arr) {
  // look through the array from left to right
  // iterate through the elements of the array
  // for each element,
  // for (let i = 0; i < arr.length; i++) {
  //...
  // }

  // new array that stores numbers i've encountered before
  // let result = -1;
  // or an obj, hash
  // arr.forEach((element) => {
  //   // has this element been encountered before?
  //   // .includes?

  //   // if that element has been encountered before, return that element
  //   // [2, 1, 3, 3, 2]
  //   if (numbersSeen.includes(element)) {
  //     result = element;
  //     return;
  //   } else {
  //     // add element to numbersSeen
  //     numbersSeen.push(element);
  //   }
  // });

  const numbersSeen = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (numbersSeen.includes(element)) {
      return element;
    } else {
      // add element to numbersSeen
      numbersSeen.push(element);
    }
  }

  // if no duplicates, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1]));

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 1]));

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 1, 4]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 2, 3, 3, 1]));

  console.log("");
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
