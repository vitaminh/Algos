// O(1) Space
// O(N) Time

// Find the three largest numbers in an array, return them in sorted order
// https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

function findThreeLargestNumbers(array) {
  // Initialize result array to -Infinity so first > comparisons are always true
  const largest = new Array(3).fill(-Infinity);
  for (const num of array) {
    updateLargest(largest, num);
  }
  return largest;
}

const updateLargest = (largest, num) => {
  // Compare num to largest so far
  if (num > largest[2]) {
    largest[0] = largest[1];
    largest[1] = largest[2];
    largest[2] = num;
  }
  // Compare num to second largest so far
  else if (num > largest[1]) {
    largest[0] = largest[1];
    largest[1] = num;
  }
  // Compare num to third largest so far
  else if (num > largest[0]) {
    largest[0] = num;
  }
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;