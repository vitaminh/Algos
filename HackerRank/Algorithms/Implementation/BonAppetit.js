//  https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  // get an array minus the Kth item
  const adjustedBill = bill
                        .slice(0, k)
                        .concat(bill.slice(k + 1));
  // get the total cost of all items in the new array
  const finalCost = adjustedBill.reduce((total, itemCost) => {
    return total + itemCost;
  }, 0);
  // determine how much more money is owed for the bill
  const moneyOwed = b - (finalCost / 2);
  const message = moneyOwed === 0 ? 'Bon Appetit' : moneyOwed;
  console.log(message);
}
