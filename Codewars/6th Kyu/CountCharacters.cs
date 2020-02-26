// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/csharp

using System;
using System.Collections.Generic;

public class Kata
{
    public static Dictionary<char, int> Count(string str)
    {
        Dictionary<char, int> result = new Dictionary<char, int>();

        char[] chars = str.ToCharArray();
        foreach (char c in chars)
        {
            if (!result.ContainsKey(c))
            {
                result.Add(c, 0);
            }

            result[c]++;
        }

        return result;
    }
}