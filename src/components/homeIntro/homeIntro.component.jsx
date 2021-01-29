import React from 'react'
import { YolsPortada } from "../images/utils"
import { HomeIntroSection } from "../homeIntroSection/homeIntroSection.component"
import "./homeIntro.styles.css"

const HomeIntro = () => {
  return (
    <div className="Home-Intro-Container">
      <div className="white-bar-intro">
      </div>
      <img className="Home-Intro-Image"
        src={YolsPortada}
        alt="Home Page" />

      <  HomeIntroSection />
    </div>
  )
}

export default HomeIntro