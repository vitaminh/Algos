// Take in an array of unique integers and return its Powerset.
// Powerset of Set(X) is set of all subsets of X
// https://www.algoexpert.io/questions/Powerset

function powerset(array) {
  const result = [[]];        // initial empty set
  for (const num of array) {  // for each num in our array
    const length = result.length;
    for (let i = 0; i < length; i++) {
      result.push(result[i].concat([num])); // add num to each existing set
    }
  }
  return result;
}

// Do not edit the line below.
exports.powerset = powerset;
