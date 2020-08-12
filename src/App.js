import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage.componen/homepage.component";
import ShopPage from "./pages/shop.component/shop.component";

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
