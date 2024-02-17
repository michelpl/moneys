import { v4 as uuid } from 'uuid';

export function itemModel(modelName) {
    return {
        _id: uuid(),
        user_id: 1,
        description: '',
        model: modelName,
        amount: 0,
        paid_amount: 0,
        notes: '',
        categories: [],
        operation: 'sum'
    }
}