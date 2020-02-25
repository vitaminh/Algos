// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/csharp

using System;
using System.Collections.Generic;

public class Kata
{
    public static bool IsIsogram(string str)
    {
        string lowerStr = str.ToLower();
        
        Dictionary<char, bool> letters = new Dictionary<char,Boolean>();

        char[] chars = lowerStr.ToCharArray();

        for (int i = 0; i < chars.Length; i++)
        {
            if (letters.ContainsKey(chars[i]))
            {
                return false;
            }

            letters.Add(chars[i], true);
        }

        return true;
    }
}