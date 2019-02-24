/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
https://www.codewars.com/kata/546f922b54af40e1e90001da
*/

<?php

function alphabet_position(string $s): string {
  $letters = str_split('abcdefghijklmnopqrstuvwxyz');
  $letter_pos = array();
  for ($i = 0; $i < count($letters); $i++) {
    $letter_pos[$letters[$i]] = $i + 1;
  }
  $chars = str_split($s);
  $result = array();
  for ($i = 0; $i < count($chars); $i++) {
    $lowerCase = strtolower($chars[$i]);
    if(array_key_exists($lowerCase, $letter_pos)) {
      array_push($result, $letter_pos[$lowerCase]);
    }
  }
  return implode(" ", $result);
}

?>