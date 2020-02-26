// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/csharp

using System;
using System.Collections.Generic;

public static class Kata
{
    public static bool IsPangram(string str)
    {
        string alphabet = "abcdefghijklmnopqrstuvwxyz";
        char[] letters = alphabet.ToCharArray();
        Dictionary<char, int> freq = new Dictionary<char, int>();

        foreach (char c in letters)
        {
            freq.Add(c, 0);
        }

        foreach (char c in str.ToLower())
        {
            if (freq.ContainsKey(c))
            {
                freq[c]++;
            }
        }

        foreach (char c in letters)
        {
            if (freq[c] == 0) return false;
        }

        return true;
    }
}