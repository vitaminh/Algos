/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
https://www.codewars.com/kata/55d24f55d7dd296eb9000030
*/

<?php
function summation($n) {
  $total = 0;
  $counter = 1;
  while ($counter <= $n) {
    $total += $counter;
    $counter++;
  }
  return $total;
}
?>