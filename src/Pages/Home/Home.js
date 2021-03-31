import React from "react";
import { Link } from "react-router-dom";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import TransactionList from "../../Components/TransactionList/TransactionList";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TransactionForm/>
      <TransactionList/>
    </div>
  );
};

export default Home;
