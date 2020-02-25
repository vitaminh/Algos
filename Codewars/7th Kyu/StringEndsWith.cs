using System;

public class Kata
{
  public static bool Solution(string str, string ending)
  {
    if (str.Length < ending.Length) return false;

    int strIndex = str.Length - ending.Length;

    for (int i = 0; i < ending.Length; i++, strIndex++)
    {
        if (str[strIndex] != ending[i])
        {
            return false;
        }
    }

    return true;
  }
}

// Alternatively, use String.EndsWith(string value) method
