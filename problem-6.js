function searchByPrefix(phoneBooks, prefix) {
  let searchName = [];
  for (const phoneBook in phoneBooks) {
    if (phoneBook.startsWith(prefix)) {
      searchName.push(phoneBook);
    }
  }
  // sample method
  //   return searchName.length == 0 ? ["No result"] : searchName;
  return searchName;
}
const result1 = searchByPrefix(
  { rahim: "0181", karim: "0172", rafi: "0193" },
  "la",
);
const result2 = searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "mi");

if (result1.length === 0) {
  console.log("No Result");
} else {
  console.log(result1);
}
if (result2.length === 0) {
  console.log("No Result");
} else {
  console.log(result2);
}
