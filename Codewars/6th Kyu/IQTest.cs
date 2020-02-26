// https://www.codewars.com/kata/552c028c030765286c00007d/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public class IQ
{
    public static int Test(string numbers)
    {
        string[] values = numbers.Split(" ");
        List<int> evens = new List<Int32>();
        List<int> odds = new List<Int32>();

        int index = 1;
        
        foreach (string s in values)
        {
            int val = Int32.Parse(s);
            if (val % 2 == 0)
            {
                evens.Add(index);
            }
            else
            {
                odds.Add(index);
            }

            index++;
        }

        return evens.Count() == 1 ? evens[0] : odds[0];
    }
}