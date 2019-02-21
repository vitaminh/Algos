//  https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  const adjustedBill = bill
                        .slice(0, k)
                        .concat(bill.slice(k + 1));
  const finalCost = adjustedBill.reduce((total, itemCost) => {
    return total + itemCost;
  }, 0);
  const moneyOwed = b - (finalCost / 2);
  const message = moneyOwed === 0 ? 'Bon Appetit' : moneyOwed;
  console.log(message);
}
