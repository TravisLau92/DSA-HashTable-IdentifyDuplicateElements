// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findFirstDuplicate(elements) {

  const hashTable = {}; // Initiate hash table

  for (let i = 0; i < elements.length; i++) {

    const element = elements[i];

    // Check if the element is already in hast table

    if (hashTable[element] !== undefined) {
      
      return element; // Return the element as it's the first duplicate
    }
    hashTable[element] = i; // If not, add it to the hash table
  }
  return null; // Return null if no duplicates are found
}

const elements = [3, 5, 4, 3, 8, 6];

console.log('First Duplicate Element:', findFirstDuplicate(elements));
