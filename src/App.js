import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Example from "./Components/Examples/Example.js";
import Mathematics from "./Components/Mathematics/Mathematics.js";
import Application from "./Components/Application/Application.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/example" component={Example} />
        <Route path="/mathematics" exact component={Mathematics} />
        <Route path="/application" exact component={Application} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
