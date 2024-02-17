
const transactionModel = (label, name, operator) => {
    return {
        label: label,
        name: name,
        mathOperation: operators[operator]
    }
}

export const availableModels = [

    transactionModel('budget', 'Entradas', '+'),
    transactionModel('expenses', 'Saídas', '-'),
]

const operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a < b }
};