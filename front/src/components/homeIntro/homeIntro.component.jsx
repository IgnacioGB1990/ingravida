import React from 'react'
import { YolsPortada } from "../../components/images/utils"
import "./homeIntro.styles.css"

export const HomeIntro = () => {
  return (
    <div className="Home-Intro-Container">
      <img class="Home-Intro-Image" src={YolsPortada} height="200" alt="Home Page" />
      {/* <div className="Home-Intro-Centered-Text">tu transformación empieza aquí</div> */}
    </div>
  )
}

export default HomeIntro