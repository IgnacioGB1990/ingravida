import React from 'react'
import { Link } from "react-router-dom"
import "./homeIntroSection.styles.css"


export const HomeIntroSection = () => {
  return (
    <div className="home-intro-section-container">
      <h1 className="home-intro-section-text">ya es hora de dar el cambio</h1>
      <h4 className="home-intro-section-logo">Ya tengas el pelo ondulazo, rizado o super rizado, tenemos el producto para ti.</h4>
      <Link className="abcButton" to="/abc">Saber Más</Link>
    </div>
  )
}

export default HomeIntroSection;