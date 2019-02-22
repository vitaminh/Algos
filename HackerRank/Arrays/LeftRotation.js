// https://www.hackerrank.com/challenges/ctci-array-left-rotation

// a: array of integers
// d: number of rotations

function rotLeft(a, d) {
  // to avoid unnecessary extra rotations, get remainder # of rotations
  const rotations = d % a.length;
  // get the right half of the array and append the left half
  return a.slice(rotations).concat(a.slice(0, rotations));
}