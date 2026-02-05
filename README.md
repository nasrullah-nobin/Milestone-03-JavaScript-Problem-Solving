# JavaScript Problem Solving Practice

This repository contains various JavaScript problems I have solved as part of my practice. Each problem focuses on different core JavaScript concepts, including loops, arrays, objects, strings, and functions.

---

## Problems Solved

### 1. Remove Duplicates from Array
- **Description:** Remove duplicate elements from an array.
- **Techniques:** `for...of` loop, `includes()` method, `Set`.
- **Example:**
```js
removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
// Output: [5, 3, 2, 9, 7]
2. Search by Prefix in Phonebook
Description: Search for names or numbers that start with a given prefix.

Techniques: Object.entries(), startsWith(), array of objects for consistent output.

Example:

searchByPrefix({ rahim: "0181", karim: "0172" }, "ra");
// Output: [{ name: "rahim", number: "0181" }]
3. Text Statistics
Description: Count total characters, words, vowels, and consonants in a string.

Techniques: split(), for...of loop, includes().

Example:

textStats("JavaScript is fun to Learn");
// Output: { characters: 24, words: 6, vowels: 7, consonants: 17 }
4. Word Frequency Counter
Description: Count the frequency of each word in a sentence.

Techniques: toLowerCase(), split(), object to store frequencies, hasOwnProperty().

Example:

wordFrequency("I love JS and I love coding");
// Output: { i: 2, love: 2, js: 1, and: 1, coding: 1 }
5. Student Marks Analyzer
Description: Analyze student marks to find total, average, highest, and lowest subjects.

Techniques: Object.entries(), loops, comparison operators.

Example:

analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
// Output: { total: 286, average: 71.50, highestSubject: "physics", lowestSubject: "bangla" }
6. Password Strength Checker
Description: Validate passwords for minimum length, at least one number, uppercase letter, and no spaces.

Techniques: for...of loop, string comparisons, includes().

Example:

checkPassword("Hello123");
// Output: { valid: true, hasNumber: true, hasUpperCase: true, reason: [] }
7. Shopping Bill Calculator
Description: Calculate total bill from item prices and purchased items.

Techniques: Object.entries(), object counting, multiplication.

Example:

calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
// Output: { total: 80, itemsCount: { pen: 3, book: 1 } }
This practice demonstrates my understanding of:

Core JavaScript concepts: arrays, objects, loops, strings

Conditional logic and problem solving

Writing reusable functions

Producing consistent and structured outputs
