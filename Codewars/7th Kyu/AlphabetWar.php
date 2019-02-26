/*
https://www.codewars.com/kata/59377c53e66267c8f6000027
*/

<?php

function alphabetWar($fight): string
{
  $left = [
    "w" => 4,
    "p" => 3,
    "b" => 2,
    "s" => 1
  ];
  $right = [
    "m" => 4,
    "q" => 3,
    "d" => 2,
    "z" => 1
  ];

  $left_total = 0;
  $right_total = 0;

  $chars = str_split($fight);

  foreach ($chars as $char) {
    if (array_key_exists($char, $left)) {
      $left_total += $left[$char];
    }
    if (array_key_exists($char, $right)) {
      $right_total += $right[$char];
    }
  }

  if ($left_total > $right_total) {
    return "Left side wins!";
  }
  if ($left_total < $right_total) {
    return "Right side wins!";
  }
  return "Let's fight again!";

}

?>