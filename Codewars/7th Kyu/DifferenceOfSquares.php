// Find the difference between:
// the sum of the squares of the first n natural numbers (1 <= n <= 100)
// and the square of their sum.
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

<?php

function square(int $num): int {
  return pow($num, 2);
}

function difference_of_squares(int $n): int {
  // get square of sum of first n natural numbers
  $squaredSum = pow(array_sum(range(1, $n)), 2);
  // get sum of squares of first n natural numbers
  $numbers = range(1, $n);
  $sumSquares = array_sum(array_map("square", $numbers));
  // return difference between the two
  return $squaredSum - $sumSquares;
}

?>
