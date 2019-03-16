<?php

function mean(array $a): array {
  $numbers = array_filter($a, function ($val) { return is_numeric($val); });
  $characters = array_filter($a, function ($val) { return !is_numeric($val); });
  return array(($numbers / sizeof($numbers)), implode('', $characters));
}

?>
