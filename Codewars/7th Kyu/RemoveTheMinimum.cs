// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public class Remover
{
    public static List<int> RemoveSmallest(List<int> numbers)
    {
        if (numbers == null || numbers.Count <= 0)
        {
            return new List<int>();
        }

        List<int> results = new List<int>();

        int lowestValue = numbers[0];
        int lowestIndex = 0;

        for (int i = 0; i < numbers.Count; i++)
        {
            if (numbers[i] < lowestValue)
            {
                lowestValue = numbers[i];
                lowestIndex = i;
            }

            results.Add(numbers[i]);
        }

        results.RemoveAt(lowestIndex);
        return results;
    }
}

// Alternatively use the LINQ method min()