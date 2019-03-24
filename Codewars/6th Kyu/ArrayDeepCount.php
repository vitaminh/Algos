// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

<?php

function deep_c(array $a): int {
  $result = 0;
  foreach ($a as $elem) {
    if (is_array($elem)) {
      $result += deep_c($elem);
    }
    $result++;
  }
  return $result;
}

?>