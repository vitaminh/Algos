// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
    public static int[] DeleteNth(int[] arr, int x)
    {
        List<int> result = new List<int>();
        Dictionary<int, int> occurences = new Dictionary<int, int>();

        for (int i = 0; i < arr.Length; i++)
        {
            if (!occurences.ContainsKey(arr[i]))
            {
                occurences.Add(arr[i], 0);
            }

            if (occurences[arr[i]] < x)
            {
                result.Add(arr[i]);
                occurences[arr[i]]++;
            }
        }

        return result.ToArray();
    }
}