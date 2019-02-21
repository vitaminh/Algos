// Write a class for a suffix-trie-like data structure

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // populate trie with every existing suffix of string
    for (let i = 0; i < string.length; i++) {
      const subString = string.slice(i);  // get substring
      let currentNode = this.root;        // initialize current node as trie's root
      for (let j = 0; j < subString.length; j++) {
        const letter = subString[j];
        // if current node does not have the letter as a key
        if (!currentNode.hasOwnProperty(letter)) {
          currentNode[letter] = {};         // add it as a key
        }
        currentNode = currentNode[letter];  // set current node to node representing letter
      }
      currentNode[this.endSymbol] = true;   // indicate this node can be the end of a suffix
    }
  }

  // use trie to determine if string is contained within it
  contains(string) {
    let currentNode = this.root;
    for (const letter of string) {
      // if node does not have letter as a key
      if (!currentNode.hasOwnProperty(letter)) {
        return false;
      }
      // otherwise, set current node to node representing that letter
      currentNode = currentNode[letter];
    }
    // see if current node is considered a valid ending for the string
    return currentNode.hasOwnProperty(this.endSymbol);
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;