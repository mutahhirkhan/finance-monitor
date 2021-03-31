import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import TransactionCard from "./Components/TransactionCard/TransactionCard";

function App() {
  return (
    <div className="App">
      {/* <h1>Wallet Tracker</h1> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:transactionId" component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
