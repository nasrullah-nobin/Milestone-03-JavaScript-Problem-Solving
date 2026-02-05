function calcBill(prices, items) {
  let total = 0;
  let itemsCount = {};
  for (const item of items) {
    if (itemsCount.hasOwnProperty(item)) {
      itemsCount[item]++;
    } else {
      itemsCount[item] = 1;
    }
  }
  for (const itemsPrice in itemsCount) {
    total += itemsCount[itemsPrice] * prices[itemsPrice];
  }

  return {
    total,
    itemsCount,
  };
}
// console.log(
//   calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
//     "egg",
//     "egg",
//     "rice",
//     "oil",
//     "egg",
//     "sugar",
//   ]),
// );
// console.log(calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]));

// another method normal loop

function calcBill1(prices, items) {
  let total = 0;
  let itemsCount = {};
  for (let i = 0; i < items.length; i++) {
    if (itemsCount.hasOwnProperty(items[i])) {
      itemsCount[items[i]]++;
    } else {
      itemsCount[items[i]] = 1;
    }
  }
  for (const [item, quantity] of Object.entries(itemsCount)) {
    total += quantity * prices[item];
  }
  return {
    total,
    itemsCount,
  };
}
console.log(calcBill1({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]));
console.log(
  calcBill1({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
    "egg",
    "egg",
    "rice",
    "oil",
    "egg",
    "sugar",
  ]),
);
