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
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import HowImadeMyFirst$100kByTheAgeOf27 from "./blogposts/How-I-made-my-first-$100k-by-the-age-of-27";
import Saving from "./pages/Saving";
import Blog from "./pages/Blog";

function App() {
  return (
<Router>
  <ScrollToTop />
  <TopBar />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/slothgold">
      <Home />
    </Route>
    <Route exact path="/blog">
      <Blog />
    </Route>
    <Route path="/stocks">
      <Stocks />
    </Route>
    <Route path="/saving">
      <Saving />
    </Route>
    <Route path="/singlepost">
      <SinglePost />
    </Route>
    <Route path="/torslandaproperty">
      <TorslandaPropertyInvestmentValueCompany />
    </Route>
    <Route path="/about-us">
      <AboutUs />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/how_i_made_my_first_$100k_by_the_age_of_27">
      <HowImadeMyFirst$100kByTheAgeOf27 />
    </Route>
  </Switch>
  <Footer />
</Router>
  );
}

export default App;
