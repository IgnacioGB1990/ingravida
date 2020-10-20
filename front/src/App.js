import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import TestPage from "./pages/test/test.component"
import ContactPage from "./pages/contact/contact.component"
import SignInPage from "./pages/signIn/signIn.component"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tienda" component={ShopPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/contacto" component={ContactPage} />
          <Route path="/inicio" component={SignInPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
