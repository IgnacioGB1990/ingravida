import React from 'react'
import { YolsPortada } from "../../components/images/utils"

export const HomeIntro = () => {
  return (
    <div className="image-container">
      <img src={YolsPortada} width="600" height="400" alt="Home Page"></img>
    </div>
  )
}

export default HomeIntro