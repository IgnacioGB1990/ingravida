import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.styles.css"


export const Navbar = () => {

  const [Display, setDisplay] = useState(false)

  return (
    <nav className="NavBarItems" >
      <h1 className="navbar-logo">Ingravida<i className="fab fa-react"></i></h1>

      <div className="menu-icon" onClick={() => setDisplay(!Display)}>
        <i className={Display ? "fa fa-times" : "fas fa-bars"}></i>
      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav >
  )
}




export default Navbar