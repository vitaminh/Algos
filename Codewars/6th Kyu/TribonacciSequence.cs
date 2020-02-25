// https://www.codewars.com/kata/556deca17c58da83c00002db/train/csharp

using System;
using System.Collections.Generic;

public class Xbonacci
{
    public double[] Tribonacci(double[] signature, int n)
    {
        List<double> result = new List<Double>();

        for (int i = 1; i <= n; i++)
        {
            if (i <= 3)
            {
                result.Add(signature[i - 1]);
            }
            else
            {
                result.Add(result[i - 4] + result[i - 3] + result[i - 2]);
            }
        }

        return result.ToArray();
    }
}