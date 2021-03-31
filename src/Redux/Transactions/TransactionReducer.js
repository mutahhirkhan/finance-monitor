import { modifyTransaction } from "../../Utility/Utility";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./TransactionConstants";
var initialState = [];

var TransactionReducer = (state = initialState, actions) => {
  var { type, payload } = actions;
  switch (type) {
    case ADD_TRANSACTION:
      return [...state, payload.transaction];
    
    case DELETE_TRANSACTION:
      return state.filter(
        (transaction) => transaction.id !== payload.transactionId
      );
    case UPDATE_TRANSACTION:
      return modifyTransaction(
        state,
        payload.transactionId,
        payload.modifiedData
      );
    default:
      return state;
  }
};

export default TransactionReducer;
