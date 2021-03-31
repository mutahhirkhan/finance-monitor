import React from "react";
import { connect } from "react-redux";
import { totalAmount } from "./../../Utility/Utility";
import navbar from './Navbar.css';

const Navbar = ({ grossAmount }) => {
  // console.log(grossAmount);
  return (
    <React.Fragment className="navbar">
      <div className="center">
        <h1>LOGO  </h1>
      </div>
      <div>
        <h1>{ `|$ ${grossAmount}|`}</h1>
      </div>
    </React.Fragment>
  );
};

var mapState = (state) => ({
  grossAmount: totalAmount(state.transactions),
});

export default connect(mapState)(Navbar);
