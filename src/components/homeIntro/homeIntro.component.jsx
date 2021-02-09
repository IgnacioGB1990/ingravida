import React from 'react'
import { Link } from "react-router-dom"

import { YolsPortada2 } from "../images/utils"
import "./homeIntro.styles.css"

const HomeIntro = () => {
  return (
    <div className="home-intro-container">
      {/* <img className="home-intro-image"
        src={YolsPortada2}
        alt="Home Page" /> */}

      <div className="lema-container">
        <h1 className="lema-text">aclama tu rizo</h1>
        <Link className="abcButton" to="/abc">Saber Más</Link>
      </div>





    </div>
  )
}

export default HomeIntro