// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number of vowels that occur within a given string
<?php
  function getCount($str) {
    $vowelsCount = 0;
    
    $letters = str_split($str);
    foreach ($letters as $letter) {
      if ($letter == "a" || $letter == "e" || $letter == "i" || $letter == "o" || $letter == "u") {
        $vowelsCount++;
      }
    }
    return $vowelsCount;
  }
?>