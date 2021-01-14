import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.styles.scss"
import { Link } from "react-router-dom"
import { connect } from "react-redux" //connect=>HOC.Lets us modifiy component to have access to redux.
import { auth } from "../signInUp/firebase/firebase.utils"

// import { Button } from "./Button.js"

export const Navbar = ({ currentUser }) => {

  const [Display, setDisplay] = useState(false)

  return (
    <nav className="NavbarItems" >
      <h1 className="navbar-logo"><a className="navbar-name " href="/">Ingrávida</a></h1>

      <div className="menu-icon" onClick={() => setDisplay(!Display)}>
        <i className={Display ? "fa fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={Display ? "nav-menu active " : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>

              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
        {
          currentUser ?
            <div className="fas fa-power-off fa-lg" onClick={() => auth.signOut()}></div>
            :
            <Link className="far fa-user fa-lg" to="/inicio"></Link>
        }
      </ul>
      {/* <Button >Inicio</Button> */}
    </nav >
  )
}


const mapStateToProps = state => ({

  currentUser: state.user.currentUser

})

export default connect(mapStateToProps)(Navbar)