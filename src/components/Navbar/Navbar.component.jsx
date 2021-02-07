import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux" //connect=>HOC.Lets us modifiy component to have access to redux.
import { createStructuredSelector } from "reselect"

import { MenuItems } from "./MenuItems"
import UserLogo from "./user-logo.component"
import CartIcon from "./cart-icon.component"
import CartDropdown from "./cart-dropdown.component"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
// import { selectCurrentUser } from "../../redux/user/user.selectors"

import "./Navbar.styles.scss"

export const Navbar = ({ hidden }) => {

  const [Display, setDisplay] = useState(false)
  console.log("This is the display state", Display)

  return (
    <nav className="NavbarItems" >
      <Link className="logo" to="/">INGRÁVIDA</Link>

      <div className="search-user-cart-icons">
        <UserLogo />
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </div>



      <div className="menu-icon" onClick={() => setDisplay(!Display)}>
        <i className={Display ? "fa fa-times" : "fas fa-bars"}></i>
      </div>


      {/* <ul className={Display ? "nav-menu active " : "nav-menu"} > */}

      <ul className={Display ? "nav-menu active " : "nav-menu"} >

        {MenuItems.map((item, index) => {
          return (
            <li className="nav-boxes" key={index}>
              <Link
                onClick={() => { setDisplay(!Display) }}
                className={item.cName}
                to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}

      </ul>



    </nav >
  )
}


const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navbar)