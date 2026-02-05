function textStats(texts) {
  let characters = 0;
  let words = texts.trim().split(/\s+/).length;
  let vowels = 0;
  let consonants = 0;
  let vowel = "aeiou";
  for (const ch of texts.toLowerCase()) {
    if (ch === " ") {
      continue;
    }
    characters++;
    if (vowel.includes(ch)) {
      vowels++;
    } else if (ch >= "a" && ch <= "z") {
      consonants++;
    }
  }
  return {
    characters,
    words,
    vowels,
    consonants,
  };
}
const str = textStats("JAvaScript is fun to learn");
console.log(str);
const str1 = textStats(" I am OK ");
console.log(str1);
