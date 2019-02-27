// You get an array of numbers, return the sum of all of the positives ones.
// Return 0 if no positive numbers
// https://www.codewars.com/kata/5715eaedb436cf5606000381

<?php
function positive_sum($arr) {
  $result = 0;
  foreach ($arr as $num) {
    if ($num > 0) {
      $result += $num;
    }
  }
  return $result;
}
?>
