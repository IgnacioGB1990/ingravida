import React from 'react'
import { YolsPortada } from "../../components/images/utils"
import "./homeTest.styles.css"

export const HomeTest = () => {
  return (
    <div className="Home-Test-Container">

      <div className="Home-Test-Section">
        <div className="Home-Test-Section-Left">

          <h2 className="Left-Header">responde a nuestro cuestionario sobre rizos</h2>
          <h4 className="Left-Description">¿No estás segura de cuáles son los mejores productos para ti?
          Encuentra tu rutina personalizada perfecta para ti gracias a
             nuestro cuestionario.</h4>
          <a className="testButton" href="/test">Responde a nuestro cuestionario</a>
        </div>
        <div className="Home-Test-Section-Right"></div>
      </div>
    </div>
  )
}

export default HomeTest