// @param: arr, an array
// @return: integer
function findFirstDuplicate(arr) {
  /* 
    Rewrite the problem in my own words:
    Look for the 1st number that gets repeated. Otherwise, -1

    Test cases:
    [1, 2]        => -1
    [2, 2]        => 2
    [2, 1, 2]     => 2
    [1, 2, 1, 2]  => 1

    Pseudocode:
    Keep track of numbers I've already seen
    // array, object {key: value}
    Iterate through each element
    // for 
      if an element was already seen, then return that number
      // comparator, return, if
      // Ruby: .uniq
      otherwise, add that number to list of numbers I've already seen
      // .push()

    If there are no "hits", then return -1
  */
  // Keep track of numbers I've already seen
  // array, object {key: value}
  // const numbersThatWeveAlreadyIteratedThrough = [] //duplicates
  const numbersAlreadySeen = []; //duplicates
  // const seenAlready = [] //duplicates
  // const numbersSeen = [] //duplicates

  // Iterate through each element
  for (let i = 0; i < arr.length; i++) {
    //   if an element was already seen, then return that number
    // comparator, return, if
    // Ruby: .uniq
    // element I am looking => arr[i]
    if (numbersAlreadySeen.includes(arr[i])) {
      return arr[i];
    } else {
      //   otherwise, add that number to list of numbers I've already seen
      // .push()
      numbersAlreadySeen.push(arr[i]);
    }
  }

  // If there are no "hits", then return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
