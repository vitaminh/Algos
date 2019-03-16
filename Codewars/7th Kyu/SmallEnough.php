// https://www.codewars.com/kata/57cc981a58da9e302a000214

<?php

function smallEnough($a, $limit)
{
  foreach ($a as $val) {
    if ($val > $limit) {
      return false;
    }
  }
  return true;
}

?>
