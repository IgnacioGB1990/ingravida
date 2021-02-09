import React from 'react'
import { Link } from "react-router-dom"
import { FotoOndulada, FotoRizada, FotoExtraRizada } from "../images/utils"

import "./threeImage.styles.scss"

const ThreeImage = () => {
  return (
    <div className="three-image-container">
      <div className="three-wash">
        <img className="home-intro-image"
          src={FotoOndulada}
          alt="Home Page" />

        <div className="collec-title">gama de lavado</div>
      </div>
      <div className="three-style"> <img className="home-intro-image"
        src={FotoRizada}
        alt="Home Page" />
        <div className="collec-title">gama de definición</div>

      </div>
      <div className="three-accesories"> <img className="home-intro-image"
        src={FotoExtraRizada}
        alt="Home Page" />
        <div className="collec-title">accesorios</div>
      </div>
    </div >
  )
}

export default ThreeImage