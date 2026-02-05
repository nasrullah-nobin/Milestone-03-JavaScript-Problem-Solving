function analyzeMarks(marksObj) {
  let total = 0;
  let highest = -Infinity;
  let lowest = Infinity;
  let highestSub = null;
  let lowestSub = null;
  for (const key in marksObj) {
    total += marksObj[key];
    if (marksObj[key] > highest) {
      highest = marksObj[key];
      highestSub = key;
    } else {
      lowest = marksObj[key];
      lowestSub = key;
    }
  }
  return {
    total,
    average: total / Object.keys(marksObj).length,
    highest: highestSub,
    lowest: lowestSub,
  };
}
console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 }));
