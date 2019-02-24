
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
<?php
  function fake_bin(string $s): string {
    $result = "";
    $stringArr = str_split($s);
    foreach ($stringArr as $digit) {
      if (intval($digit) >= 5) {
        $result = $result . "1";
      }
      else {
        $result = $result . "0";
      }
    }
    return $result;
  }
?>