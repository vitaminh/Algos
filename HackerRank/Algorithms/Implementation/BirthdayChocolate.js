// https://www.hackerrank.com/challenges/the-birthday-bar/problem

// Complete the birthday function below.
// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month
function birthday(s, d, m) {
  if (m > s.length) return 0; // if month is larger than length of bar, no need to continue
  let ways = 0;
  let total = 0;
  // get total of first month-length section of bar
  for (let i = 0; i < m; i++) {
    total += s[i];
  }
  if (total === d) ways++;
  // slide the month-length section down the bar, subtracting from the head and adding the tail
  for (let left = 0, right = m; right < s.length; left++, right++) {
    total -= s[left];
    total += s[right];
    if (total === d) ways++;
  }
  return ways;
}