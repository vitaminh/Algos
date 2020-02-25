using System;

public static class Kata
{
  public static string Solution(string str)
  {
    char[] characters = str.ToCharArray();
    Array.Reverse(characters);
    return String.Join("", characters);
  }
}
