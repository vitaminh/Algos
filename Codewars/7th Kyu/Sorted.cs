// https://www.codewars.com/kata/580a4734d6df748060000045/train/csharp

using System;

public class Kata
{
    public static string IsSortedAndHow(int[] array)
    {
        bool isAscending = true;
        bool isDescending = true;
        
        for (int i = 0; i < array.Length - 1; i++)
        {
            int current = array[i];
            int next = array[i + 1];
            if (current < next) isDescending = false;
            if (current > next) isAscending = false;
        }

        if (isAscending) return "yes, ascending";
        if (isDescending) return "yes, descending";

        return "no";
    }
}