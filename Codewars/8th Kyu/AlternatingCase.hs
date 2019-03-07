-- https://www.codewars.com/kata/56efc695740d30f963000557

module Codewars.Kata.AlternatingCase where

  let lowers = ['a'..'z']
  let uppers = ['A'..'Z']

  let lowerToUpper = zip lowers, uppers
  let upperToLower = zip uppers, lowers

  switchCase :: Char -> Char
  switchCase chr =  if chr `elem` lowers then lookup chr lowerToUpper
                    else if chr `elem` uppers then lookup chr upperToLower
                    else chr

  toAlternatingCase :: String -> String
  toAlternatingCase str = map switchCase str