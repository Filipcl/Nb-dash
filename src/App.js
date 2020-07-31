import React from "react";
import "./App.css";
import Scoreboard from "./components/scoreboard/scoreboard";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scoreboard" component={Scoreboard} />
      </Switch>
    </Router>
  );
}

export default App;
