-- https://www.codewars.com/kata/57a0885cbb9944e24c00008e
-- single quotes = Char
-- double quotes = String

module RemoveExclamationMarks where

  removeExclamationMarks :: String -> String
  removeExclamationMarks str = filter (/='!') str 