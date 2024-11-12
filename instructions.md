**Title: Identify Duplicate Elements Using a Hash Table**

**Objective:**
Craft a JavaScript function to identify the first duplicate element in an array using a hash table. The function should return the value of the first duplicate element it encounters.

**Given the following input:**

```javascript
const elements = [3, 5, 4, 3, 8, 6];

console.log("First Duplicate Element:", findFirstDuplicate(elements));
```

For example, after implementing the `findFirstDuplicate` function, you should be able to produce the following output:
```javascript
First Duplicate Element: 3
```

<details>
<summary>Hints</summary>

1. Create a function `findFirstDuplicate(elements)` that accepts an array `elements`.
2. Use a hash table (like a JavaScript `Map` or an object) to track elements as you iterate through the array.
3. As you iterate, check if the current element is already present in the hash table.
4. If you find an element that already exists in the hash table, return this element as it's the first duplicate.
5. If not, add the element to the hash table and continue.
6. If no duplicates are found by the end of the array, return a message indicating there are no duplicates.

This method quickly identifies duplicates by using the hash table's efficient lookup capabilities.

</details>

**Challenge:**

- Adapt the function to return all duplicates in the array.
- Test with different types of arrays, including those without duplicates, to ensure the function handles various scenarios effectively.