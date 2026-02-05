function removeDuplicates(arr) {
  let newArray = [];
  for (const array of arr) {
    if (!newArray.includes(array)) {
      newArray.push(array);
    }
  }
  return newArray;
}
console.log(removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]));
console.log(removeDuplicates([1, 1, 1, 1]));



