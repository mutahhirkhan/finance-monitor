import { ADD_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION } from './TransactionConstants';

export var addTransaction = (transactionObj) => ({
    type: ADD_TRANSACTION,
    payload: {
        transaction: transactionObj
    }
})

export var deleteTransaction = (transactionId) => ({
    type: DELETE_TRANSACTION,
    payload: {
        transactionId
    }
})

export var updateTransaction = (transactionId, modifiedData) => ({
    type: UPDATE_TRANSACTION,
    payload: {
        transactionId,
        modifiedData
    }
})

