// Given an array of integers where each element represents the max number of steps that can be made forward from that element. Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element).
// https://www.algoexpert.io/questions/Min%20Number%20Of%20Jumps

function minNumberOfJumps(array) {
  if (array.length <= 1) return 0;

  let jumps = 0;
  let maxReach = array[0];  // the furthest index we can initially reach
  let steps = array[0];     // steps we can take before first jump is "consumed"
  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i);  // find furthest currently reachable index
    if (--steps === 0) {
      jumps++;
      steps = maxReach - i; // steps we can take = furthest index we can reach - index we are at
    }
  }
  return jumps + 1;         // add one to reflect jump to final index
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;
