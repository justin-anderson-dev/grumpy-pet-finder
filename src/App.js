import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Splash from "./Splash";

const App = () => {
  return (
    <div className="background">
      <Router>
        <header>
          <Link to="/search">
            <h1>grumpyCatFinder</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/search">
            <SearchParams />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
