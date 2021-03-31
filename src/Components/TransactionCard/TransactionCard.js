import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "./../../Redux/Transactions/TransactionActions";
import { Link } from "react-router-dom";

const TransactionCard = ({
  deleteTransaction,
  transaction: { description, amount, transactionType, id },
}) => {
  return (
    <div>
      <h1>
        {description} - {amount} - {transactionType} - {" "}
        <button onClick={() => deleteTransaction(id)}>DELETE</button>{" "}
        <Link to={`/${id}`} >
          <button>EDIT</button>
        </Link>
      </h1>
    </div>
  );
};

var actions = {
  deleteTransaction,
};

export default connect(null, actions)(TransactionCard);
