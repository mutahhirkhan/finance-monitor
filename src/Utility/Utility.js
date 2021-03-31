

export var totalAmount = (transactions) => {
  var sum = 0;
  for (var transaction of transactions) {
    var { amount, transactionType } = transaction;
    if (transactionType === "income") sum += amount;
    else sum -= amount;
  }
  return sum;
};

export var modifyTransaction = (transactions, transactionId, modifiedData) => {
  return transactions.map(transaction => {
    if(transaction.id === transactionId)
    {
      return {
        ...transaction,
        ...modifiedData
      }
    } else  return {...transaction}
  })
}