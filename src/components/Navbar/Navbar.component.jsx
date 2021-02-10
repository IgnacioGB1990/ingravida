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
  const [ExpandNav, setExpandNav] = useState(false)
  const [Item, setItem] = useState("")

  console.log("THis is the item in state:", Item)
  function Hello({ item }) {
    console.log("Estas haciendo hover sobre: ", { item: item.title })

    setItem({ item: item.title })
  }


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

      <ul className={Display ? "nav-menu active " : "nav-menu"}

        onMouseEnter={() => setExpandNav(!ExpandNav)}
        onMouseLeave={() => setExpandNav(!ExpandNav)}
      >
        {MenuItems.map((item, index) => {
          return (
            <li className="nav-boxes" key={index}>
              <Link
                //onMouseEnter={() => Hello({ item })}
                onMouseEnter={() => setItem(item.title)}
                onClick={() => { setDisplay(!Display) }}
                className={item.cName}
                type={item.title}
                to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className={ExpandNav ? "hoverPreview active" : "hoverPreview"}>{ExpandNav && <h2>{Item}</h2>}</div>
    </nav >
  )
}

const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navbar)