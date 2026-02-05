const str = "I love JS and I love Coding and js is fun Fun fUn fuN";
function wordFrequency(sentence) {
  const words = sentence.trim().toLowerCase().split(" ");
  let wordCount = {};
  for (const word of words) {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
const result = wordFrequency(str);
// console.log(result);

// method 02
function wordFrequency1(sentence) {
  const words = sentence.trim().toLowerCase().split(" ");
  let wordCount = {};
  for (let i = 0; i < words.length; i++) {
    if (wordCount.hasOwnProperty(words[i])) {
      wordCount[words[i]]++;
    } else {
      wordCount[words[i]] = 1;
    }
  }
  return wordCount;
}
const output = wordFrequency1(str);
console.log(output);

