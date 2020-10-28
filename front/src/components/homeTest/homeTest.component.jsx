import React from 'react'
import { YolsPortada } from "../../components/images/utils"
import "./homeTest.styles.css"

export const HomeTest = () => {
  return (
    <div className="image-container">
      <img className="image-fit" src={YolsPortada} height="200" alt="Home Page" />
      <div className="centered-text">tu transformación empieza aquí</div>
    </div>
  )
}

export default HomeTest