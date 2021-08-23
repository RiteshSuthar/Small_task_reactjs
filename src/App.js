import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Collections from "./Collections";
import OurStory from "./OurStory";
import Art from "./Art";
import Wholesale from "./Wholesale";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import Login from "./Login";
import Register from "./Register";
import Details from "./Details";

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/products" component={Products}></Route>
      <Route exact path="/collections" component={Collections}></Route>
      <Route exact path="/ourstory" component={OurStory}></Route>
      <Route exact path="/art" component={Art}></Route>
      <Route exact path="/wholesale" component={Wholesale}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/login/register" component={Register}></Route>
      <Route path="/products/:id" component={Details}></Route>

      <Footer />
    </>
  );
};
export default App;
