// https://www.codewars.com/kata/598f76a44f613e0e0b000026

<?php

function sum_of_integers_in_string(string $s): int {
  // get array of separate characters
  $numbers = preg_split('/\D+/', $s);
  return array_sum($numbers);
}

?>
