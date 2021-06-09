import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/components/eWallet/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
