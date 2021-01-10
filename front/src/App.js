import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/homepage/homepage.component"
import ABCPage from "./pages/abc/abc.component"
import TestPage from "./pages/test/test.component"
import ShopPage from "./pages/shop/shop.component"
import ContactPage from "./pages/contact/contact.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./components/signInUp/firebase/firebase.utils"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user });
      createUserProfileDocument(user)


      console.log("This is the currentuser logged in", user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/abc" component={ABCPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/tienda" component={ShopPage} />
            <Route path="/contacto" component={ContactPage} />
            <Route path="/inicio" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
