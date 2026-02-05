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
  for (const itemPrice in itemsCount) {
    const quantityPrice = itemsCount[itemPrice] * prices[itemPrice];
    total += quantityPrice;
  }

  return {
    total: total,
    itemCount: itemsCount,
  };
}
const productPrice = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
  "egg",
  "egg",
  "rice",
  "oil",
  "egg",
  "sugar",
]);
console.log(productPrice);
console.log(calcBill({ pen: 10, book: 50 },["pen", "pen", "book", "pen"]))
