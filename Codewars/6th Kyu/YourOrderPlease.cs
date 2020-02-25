// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/csharp

using System;
using System.Collections.Generic;

public static class Kata
{
    public static string Order(string words)
    {
        string[] substrings = words.Split(" ");
        List<string> result = new List<string>(substrings);

        foreach (string str in substrings)
        {
            foreach (char c in str)
            {
                if (Char.IsNumber(c))
                {
                    result[Convert.ToInt32(Char.GetNumericValue(c)) - 1] = str;
                }
            }
        }
        
        string orderedWords = "";

        foreach (string str in result)
        {
            orderedWords += str;
            orderedWords += " ";
        }
        
        return orderedWords.Trim();
    }
}