// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/csharp

using System;
using System.Collections.Generic;

public class Kata
{
    public static long QueueTime(int[] customers, int n)
    {
        int totalTime = 0;
        int[] queues = new int[n];
        Array.Fill(queues, 0);

        for (int i = 0; i < customers.Length; )
        {
            for (int j = 0; j < queues.Length; j++)
            {
                if (queues[j] == 0 && i < customers.Length)
                {
                    queues[j] = customers[i];
                    i++;
                }
            }

            bool allZero = false;
            
            while (!allZero)
            {
                allZero = true;
                totalTime++;
                for (int k = 0; k < queues.Length; k++)
                {
                    if (queues[k] > 0) queues[k]--;
                    if (queues[k] == 0 && i < customers.Length)
                    {
                        queues[k] = customers[i];
                        i++;
                    }
                    if (queues[k] > 0) allZero = false;
                }
            }
        }

        return totalTime;
    }
}