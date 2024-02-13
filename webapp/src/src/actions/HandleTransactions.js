import { budgetControlModelList as models } from "../models/BudgetControlModelList";

export const sumTransactionTotalAmount = (transactions) => {
    console.log(transactions);
    var amount = 0
    transactions.map((transaction, order) => {
        if (
            transaction.amount === undefined || 
            transaction.amount === '' || 
            !transaction.amount
        ) {
            transaction.amount = 0;
        }
        var found = models.filter((model) => {return model.name === transaction.model});
        // console.log((transaction.amount * found[0].operation));
        // amount = amount + (transaction.amount * found[0].operation);

    });
    return amount;
}