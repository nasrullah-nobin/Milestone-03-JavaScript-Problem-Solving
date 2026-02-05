function searchByPrefix(phonebook, prefix) {
  let searchbox = [];
  for (const [name, number] of Object.entries(phonebook)) {
    if (name.toLowerCase().startsWith(prefix.toLowerCase())|| number.startsWith(prefix)){
        searchbox.push({name,number})
    }
  }
  return searchbox;
}
const result1 = searchByPrefix(
  { rahim: "0181", karim: "0172", rafi: "0193" },
  "Ra",
);

const result2 = searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "si");

function printResult(result){
    if(result.length===0){
        console.log('Result Not Found');
    }
    else{
        console.log(result)
    }
}
printResult(result1);
printResult(result2)
