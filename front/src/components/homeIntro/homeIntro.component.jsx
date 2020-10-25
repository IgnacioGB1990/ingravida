import React from 'react'
import { YolsPortada } from "../../components/images/utils"
import "./homeIntro.styles.css"

export const HomeIntro = () => {
  return (
    <div className="image-container">
      <img class="image-fit" src={YolsPortada} alt="Home Page" />
      <div className="centered-text">tu transformación empieza aquí</div>
    </div>
  )
}

export default HomeIntro