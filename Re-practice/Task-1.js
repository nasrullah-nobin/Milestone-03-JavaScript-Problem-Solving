function wordFrequency(sentence) {
  let words = sentence.toLowerCase().split(" ");
  let wordcount = {};
  for (const word of words) {
    if (wordcount.hasOwnProperty(word)) {
      wordcount[word]++;
    } else {
      wordcount[word] = 1;
    }
  }
  return wordcount;
}
// console.log(wordFrequency("I love JS and I love coding and JS is fun"));
// console.log(wordFrequency("Hello hello HELLO"));


// wordFrequency by for loup
function wordFrequency1(sentence){
const word = sentence.trim().toLowerCase().split(/\s+/);
let wordCount = {};
for(let i =0; i< word.length; i++){
    if(wordCount.hasOwnProperty(word[i])){
        wordCount [word[i]]++
    }
    else{
        wordCount[word[i]]=1
    }
    
}
return wordCount
}
console.log(wordFrequency1("I love JS and I love coding and JS is fun"));
console.log(wordFrequency1("Hello hello HELLO"));