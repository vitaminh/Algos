// Return the Nth number of the Fibonacci Sequence

function getNthFib(n) {
  const result = [0, 1];
  // If we want the 1st or 2nd number, no need to do additional work
  if (n < 3) {
    return result[n - 1];
  }

  let i = 3;
  while (i <= n) {
    const temp = result[1];       // store the larger number
    result[1] = result[0] + temp; // new largest = sum of previous numbers
    result[0] = temp;             // new smaller of previous numbers = previous largest
    i++;                          // increment counter as we iterated through Fibo numbers
  }

  return result[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;