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
        <Link className="compra-collec" to="/productos/lavado">compra lavado</Link>
      </div>
      <div className="three-style"> <img className="home-intro-image"
        src={FotoRizada}
        alt="Home Page" />
        <div className="collec-title">gama de definición</div>
        <Link className="compra-collec" to="/productos/definicion">compra definición</Link>
      </div>
      <div className="three-accesories"> <img className="home-intro-image"
        src={FotoExtraRizada}
        alt="Home Page" />
        <div className="collec-title">accesorios</div>
        <Link className="compra-collec" to="/producots/accesorios">compra accesorios</Link>
      </div>
    </div >
  )
}

export default ThreeImage