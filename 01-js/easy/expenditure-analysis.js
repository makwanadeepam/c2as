/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ret=[];
  transactions.forEach(transaction => {
    const category=transaction.category;
    const price=transaction.price;
    const categoryEntry=ret.find(entry => entry.category===category);

    if(categoryEntry){
      categoryEntry.totalSpent+=price;
    }
    else{
      ret.push({category, totalSpent: price})
    }

  });

  return ret;
}

module.exports = calculateTotalSpentByCategory;
