// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

<?php
function productFib($prod) : array {
  $lower = 0;
  $higher = 1;
  $result = 0;
  while ($result < $prod) {
    $temp = $higher;
    $higher = $lower + $higher;
    $lower = $temp;
    $result = $lower * $higher;
    if ($result == $prod) {
      return [$lower, $higher, TRUE];
    }
  }
  return [$lower, $higher, FALSE];
}
?>