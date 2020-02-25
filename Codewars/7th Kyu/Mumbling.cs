// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/csharp

using System;
using System.Collections.Generic;

public class Accumul 
{
    public static String Accum(string s)
    {
        char[] chars = s.ToCharArray();
        List<string> subStrings = new List<string>();
        for (int i = 0; i < chars.Length; i++)
        {
            string temp = chars[i].ToString().ToUpper();
            string lower = chars[i].ToString().ToLower();
            for (int j = 0; j < i; j++)
            {
                temp += lower;
            }
            subStrings.Add(temp);
        }

        string result = "";
        foreach (string str in subStrings)
        {
            result += str;
            result += "-";
        }

        char[] charsToTrim = {'-'};
        return result.TrimEnd(charsToTrim);
    }
}