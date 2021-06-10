import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddCard from "../components/components/eWallet/AddCard";
import Cards from "../components/components/eWallet/Cards";
import CardsDetail from "../components/components/eWallet/CardsDetail";
import Home from "../components/components/eWallet/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cards" component={Cards} exact />
          <Route path="/cards/:id" component={CardsDetail} />
          <Route path="/addCard" component={AddCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
