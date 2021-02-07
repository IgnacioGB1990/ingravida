import React from 'react'
import { YolsPortada2 } from "../images/utils"
import { HomeIntroSection } from "../homeIntroSection/homeIntroSection.component"
import "./homeIntro.styles.css"

const HomeIntro = () => {
  return (
    <div className="home-intro-container">


      <img className="Home-Intro-Image"
        src={YolsPortada2}
        alt="Home Page" />

      <  HomeIntroSection />
    </div>
  )
}

export default HomeIntro