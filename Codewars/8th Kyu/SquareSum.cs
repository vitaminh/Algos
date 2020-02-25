// https://www.codewars.com/kata/515e271a311df0350d00000f/train/csharp
using System;

public static class Kata
{
    public static int SquareSum(int[] n)
    {
        int total = 0;

        for (int i = 0; i < n.Length; i++)
        {
            total += (int) Math.Pow(n[i], 2);
        }

        return total;
    }
}