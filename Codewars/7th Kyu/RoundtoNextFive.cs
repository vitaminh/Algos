// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/csharp

public class Kata
{
    public static int RoundToNext5(int n)
    {
        if (n % 5 == 0) return n;

        while (n % 5 != 0)
        {
            n++;
        }

        return n;
    }
}