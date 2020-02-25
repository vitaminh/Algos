// https://www.codewars.com/kata/5556282156230d0e5e000089/train/csharp

using System;
using System.Collections.Generic;

namespace Converter {
    public class Converter
    {
        public string dnaToRna(string dna)
        {
            string result = "";

            foreach (char letter in dna)
            {
                if (letter.ToString() == "T")
                {
                    result += "U";
                }
                else
                {
                    result += letter;
                }
            }
            
            return result;
        }
    }
}

// Or: use String.Replace() method