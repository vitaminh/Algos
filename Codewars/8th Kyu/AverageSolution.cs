// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/csharp

class AverageSolution
{
    public static double FindAverage(double[] array)
    {
        double total = 0;
        if (array.Length <= 0) return total;
        
        for (int i = 0; i < array.Length; i++)
        {
            total += array[i];
        }

        return total / array.Length;
    }
}

// Can also use Array.Average() method