import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Stocks from "./pages/Stocks";
import TorslandaPropertyInvestmentValueCompany from "./blogposts/stocks/analysis/Torslanda-property-investment-value-company";
import Footer from "./components/Footer";

function App() {
  return (
<Router>
  <TopBar />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/stocks">
      <Stocks />
    </Route>
    <Route path="/singlepost">
      <SinglePost />
    </Route>
    <Route path="/torslandaproperty">
      <TorslandaPropertyInvestmentValueCompany />
    </Route>
  </Switch>
  <Footer />
</Router>
  );
}

export default App;
