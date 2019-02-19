// Given an array and a target sum, return two numbers from array that add to target sum
// Return empty array if no two numbers add up to target

function twoNumberSum(array, targetSum) {
  const numbers = {};
  for (let i = 0; i < array.length; i++) {
    // Get difference between target sum and current number
    const difference = targetSum - array[i];
    // If we have already come across the difference while iterating through the array
    if (numbers[difference]) {
      // We now have a matching pair
      return [Math.min(difference, array[i]), Math.max(difference, array[i])];
    } else {
      // Otherwise, add the current number to the list of numbers we've seen so far
      numbers[array[i]] = true;
    }
  }
  // If we get here, there is no matching pair
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;