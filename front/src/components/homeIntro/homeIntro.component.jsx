import React from 'react'
import { YolsPortada } from "../../components/images/utils"
import { HomeIntroSection } from "../homeIntroSection/homeIntroSection.component"
import "./homeIntro.styles.css"

export const HomeIntro = () => {
  return (
    <div className="Home-Intro-Container">

      <img className="Home-Intro-Image" src={YolsPortada} height="200" alt="Home Page" />

      <HomeIntroSection />
    </div>
  )
}

export default HomeIntro