import { budgetControlModelList as modelList } from "../models/BudgetControlModelList";

export const updateTransactionList = (currentTransactions, newTransactions) => {
    var newList = currentTransactions;

    newTransactions.map((transaction) => {
        var index = currentTransactions.findIndex(obj => {
            return obj._id === transaction._id;
        });
        if (index !== -1) {
            newList[index] = transaction;
            return;
        }
        newList.push(transaction);
    });

    return newList;

}

export const sumModelAmount = (transactionList, model) => {
    var amount = 0
    
    transactionList.map((transaction,) => {
        if (
            transaction.amount === undefined ||
            transaction.amount === '' ||
            !transaction.amount
        ) {
            transaction.amount = 0;
        }
        if (model.name === transaction.model) {
            amount += transaction.amount;
        }
        // console.log((transaction.amount * found[0].operation));
    });

    return amount;
}

export const sumTotalAmountByModel = (transactionList) => {
    var amount = 0
    
    transactionList.map((transaction) => {
        if (
            transaction.amount === undefined ||
            transaction.amount === '' ||
            !transaction.amount
        ) {
            transaction.amount = 0;
        }
        
        const found = modelList.filter((model) => {
            if (model.name === transaction.model) {
                return true;
            }
            return false;
        });

        amount = amount + (transaction.amount * found[0].operation);
    });
    console.log(amount);
    return amount;
}