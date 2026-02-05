function removeDuplicates(arr) {
  let newArray = [];
  for (const item of arr) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
console.log(removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]));
console.log(removeDuplicates([1, 1, 1, 1]));
