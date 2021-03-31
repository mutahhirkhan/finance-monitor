import React from 'react'
import { Link } from "react-router-dom";
import TransactionForm from '../../Components/TransactionForm/TransactionForm';
import { connect } from 'react-redux';

const Info = ({transaction}) => {
    console.log(transaction)
    return (
        <div>
            <h1>Info</h1>
            <h1>Edit Transaction</h1>
            <TransactionForm defaultValues = {transaction}/>
            
        </div>
    )
}

//mapState ka aik aur argument hota hai i.e. "ownProps"  isme with Router wali properties hoti hen
var mapState =(state, {match: {params: {transactionId}}}) => ({
    transaction: state.transactions.find((transaction) => transaction.id === transactionId)
})

export default connect(mapState)(Info)
