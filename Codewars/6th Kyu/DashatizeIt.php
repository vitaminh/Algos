// Given a number, return a string with dash'-'marks
// before and after each odd integer,
// but do not begin or end the string with a dash mark.
// https://www.codewars.com/kata/58223370aef9fc03fd000071

<?php

function dashatize(int $num): string {
  $intString = strval($num);
  $pattern = '/([1,3,5,7,9])/';
  $replacement = '-${1}-';
  $dashes = preg_replace($pattern, $replacement, $intString);
  // replace multiple dashes with one dash
  $singleDash = preg_replace('/-+/', '-', $dashes);
  // remove beginning dash(es), if any
  $removeBeginningDash = preg_replace('/^-+(\w+)/', '${1}', $singleDash);
  // remove ending dash(es) if any, and return
  return preg_replace('/(\w+)-+$/', '$1', $removeBeginningDash);
}

?>
