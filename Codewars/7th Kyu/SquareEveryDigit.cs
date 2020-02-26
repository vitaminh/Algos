// https://www.codewars.com/kata/546e2562b03326a88e000020/train/csharp

using System;
using System.Collections.Generic;

public class Kata
{
    public static int SquareDigits(int n)
    {
        List<string> squaredDigits = new List<String>();
        int current = n;

        while (current > 0)
        {
            int temp = current % 10;
            current /= 10;
            int squared = (int) Math.Pow(temp, 2);
            squaredDigits.Add(squared.ToString());
        }

        squaredDigits.Reverse();
        string result = "";
        foreach (string str in squaredDigits)
        {
            result += str;
        }

        return Convert.ToInt32(result);
    }
}