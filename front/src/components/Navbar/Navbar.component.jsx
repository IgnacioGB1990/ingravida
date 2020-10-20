import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "./Button.js"
import "./Navbar.styles.css"
import { Link } from "react-router-dom"


export const Navbar = () => {

  const [Display, setDisplay] = useState(false)

  return (
    <nav className="NavbarItems" >
      <h1 className="navbar-logo"><a className="navbar-name " href="/">Ingrávida</a></h1>

      <div className="menu-icon" onClick={() => setDisplay(!Display)}>
        <i className={Display ? "fa fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={Display ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          console.log(item.url)
          return (

            <li key={index}>

              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>

          )
        })}
      </ul>
      <Button >Inicio</Button>
    </nav >
  )
}




export default Navbar