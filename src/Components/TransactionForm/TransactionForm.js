import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addTransaction, updateTransaction } from "./../../Redux/Transactions/TransactionActions";

class TransactionForm extends React.Component {
  state = {
    description: this.props.defaultValues ? this.props.defaultValues.description : "",
    amount: this.props.defaultValues ? this.props.defaultValues.amount : 0,
    transactionType: this.props.defaultValues ? this.props.defaultValues.transactionType : "expense",
  };
  handleFormInput = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(this.props.defaultValues) 
    {
      var {
        history: {goBack},
        match : {params: {transactionId}}, 
        updateTransaction
      }
         = this.props
      updateTransaction(transactionId, this.state)
      goBack();
    }
    else {

      var transactionObj = {
        ...this.state,
        amount: parseInt(this.state.amount),
        id: uuidv4(),
      };
      // console.log(transactionObj)*
      this.props.addTransaction(transactionObj);
    }
  };

  render() {
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleFormInput}
            
            name="description"
            value={this.state.description}
            placeholder="description"
          ></input>
          <input
            onChange={this.handleFormInput}
            name="amount"
            value={this.state.amount}
            placeholder="0"
          ></input>
          <select
            onChange={this.handleFormInput}
            name="transactionType"
            value={this.state.transactionType}
          >
            <option> Expense</option>
            <option> income</option>
          </select>

          {this.props.defaultValues ? <button>UPDATE</button>  : <button>ADD</button>} 
        </form>
      </div>
    );
  }
}

var actions = {
  addTransaction,
  updateTransaction,
};

// here connect and withRouter both are higher order functions
export default connect(null, actions)(withRouter(TransactionForm));
