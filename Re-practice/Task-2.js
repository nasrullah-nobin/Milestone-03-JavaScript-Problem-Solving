function analyzeMarks(marksObj) {
  let total = 0;
  let heights = -Infinity;
  let lowest = Infinity;
  let highestSub = null;
  let lowestSub = null;
  for (const key in marksObj) {
    total += marksObj[key];
    if (marksObj[key] > heights) {
      heights = marksObj[key];
      highestSub = key;
    }
    if (marksObj[key] < lowest) {
      lowest = marksObj[key];
      lowestSub = key;
    }
  }

  return {
    total,
    average: total / Object.keys(marksObj).length,
    heights: highestSub,
    lowest: lowestSub,
  };
}
// console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 }));
// short and clean way

function analyzeMarks1(marksObj) {
  let total = 0;
  let heightsMarks = -Infinity;
  let lowestMarks = Infinity;
  let heightsSubject = null;
  let lowestSubject = null;
  for (const [subject, marks] of Object.entries(marksObj)) {
    total += marks;
    if (heightsMarks < marks) {
      heightsMarks = marks;
      heightsSubject = subject;
    }

    if (lowestMarks > marks) {
      lowestMarks = marks;
      lowestSubject = subject;
    }
  }
  return {
    total,
    average: Number((total / Object.keys(marksObj).length).toFixed(2)),
    heightsSubject,
    lowestSubject,
  };
}
// console.log(analyzeMarks1({ math: 78, english: 65, physics: 88, bangla: 55 }));
// console.log(analyzeMarks1({ ict: 90, biology: 90, chemistry: 70 }));

// same method but best practice

function analyzeMarks2(marksObj) {
  let total = 0;
  let heightsMarks = -Infinity;
  let lowestMarks = Infinity;
  let heightsSubject = [];
  let lowestSubject = [];
  for (const [subject, marks] of Object.entries(marksObj)) {
    total += marks;
    if (heightsMarks < marks) {
      heightsMarks = marks;
      heightsSubject = [subject];
    } else if (marks === heightsMarks) {
      heightsSubject.push(subject);
    }
    if (lowestMarks > marks) {
      lowestMarks = marks;
      lowestSubject = [subject];
    } else if (marks === lowestMarks) {
      lowestSubject.push(subject);
    }
  }
  return {
    total,
    average: Number((total / Object.keys(marksObj).length).toFixed(2)),
    heightsSubject,
    lowestSubject,
  };
}

console.log(analyzeMarks2({ math: 78, english: 65, physics: 88, bangla: 55 }));
console.log(analyzeMarks2({ ict: 90, biology: 90, chemistry: 70 }));
