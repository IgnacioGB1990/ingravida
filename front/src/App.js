import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./App.css"

import HomePage from "./pages/homepage/homepage.component"
import ABCPage from "./pages/abc/abc.component"
import TestPage from "./pages/test/test.component"
import ShopPage from "./pages/shop/shop.component"
import ContactPage from "./pages/contact/contact.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./components/signInUp/firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          console.log("Current User held in state of App", setCurrentUser)
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/abc" component={ABCPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/tienda" component={ShopPage} />
            <Route path="/contacto" component={ContactPage} />
            <Route exact path="/inicio"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                    <SignInAndSignUpPage />
                  )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToPros = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToPros, mapDispatchToProps)(App);
