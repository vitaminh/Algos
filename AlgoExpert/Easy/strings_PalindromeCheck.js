// Given a non-empty string, return a boolean indicating if the string is a palindrome

function isPalindrome(string) {
  const stringEndIndex = string.length - 1;
  // iterate from the beginning of the string to the middle
  // checking each character to see if it matches the character on the
  // opposite end of the string
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[stringEndIndex - i]) return false;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;