import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCard from "../components/components/eWallet/AddCard";
import Cards from "../components/components/eWallet/Cards";
import Home from "../components/components/eWallet/Home";
import TopUp from "../components/components/eWallet/TopUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cards' component={Cards} />
          <Route path='/addCard' component={AddCard} />
          <Route path='/TopUp' component={TopUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
