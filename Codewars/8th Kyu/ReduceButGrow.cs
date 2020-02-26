// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/csharp

using System;

public class Kata
{
    public static int Grow(int[] x)
    {
        int total = x[0];

        for (int i = 1; i < x.Length; i++)
        {
            total *= x[i];
        }

        return total;
    }
}