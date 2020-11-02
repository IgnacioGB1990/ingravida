import React from 'react'
import "./homeIntroSection.styles.css"
import { Button } from "../Navbar/Button"

export const HomeIntroSection = () => {
  return (
    <div className="Home-Intro-Section-Container">
      <h1 className="Home-Intro-Section-Text">tu transformación empieza aquí</h1>
      <h4 className="Home-Intro-Section-Logo">Cualesquiera que sean tu forma y tu textura, estamos aquí para ayudarte.</h4>
      <Button >Inicio</Button>

    </div>
  )
}

export default HomeIntroSection;