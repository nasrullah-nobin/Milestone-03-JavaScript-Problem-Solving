function textStats(text) {
  let charCount = 0;
  let wordsCount = text.toLowerCase().split(/\s/).length;
  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = "aeiou";
  for (const ch of text.toLowerCase()) {
    if (ch === " ") {
      continue;
    }
    charCount++;
    if (vowels.includes(ch)) {
      vowelsCount++;
    } else if (ch >= "a" && ch <= "z") {
      consonantsCount++;
    }
  }
  return {
    characters: charCount,
    words: wordsCount,
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
}
console.log(textStats("JavaScript is fun to Learn"));
console.log(textStats(" I am OK "));
