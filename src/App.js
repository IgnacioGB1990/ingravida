import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/homepage/homepage.component"
import ProductsPage from "./pages/product/product.component"
import TestPage from "./pages/test/test.component"
import ContactPage from "./pages/contact/contact.component"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/productos" component={ProductsPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/contacto" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
