import TransactionReducer from "./Transactions/TransactionReducer";
import { combineReducers } from 'redux';

var rootReducer = combineReducers({
  transactions: TransactionReducer,
});

export default rootReducer;
