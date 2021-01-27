import React from 'react'
import { Link } from "react-router-dom"
import { FotoOndulada, FotoRizada, FotoExtraRizada } from "../images/utils"
import "./homeTest.styles.css"
import "./homeTest.styles.scss"

const HomeTest = () => {
  return (
    <div className="Home-Test-Container">

      <div className="Home-Test-Section">
        <div className="Home-Test-Section-Left">

          <h2 className="Left-Header">responde a nuestro cuestionario sobre rizos</h2>
          <h4 className="Left-Description">¿No estás segura de cuáles son los mejores productos para ti?
          Encuentra tu rutina personalizada perfecta para ti gracias a
             nuestro cuestionario.</h4>
          <Link className="testButton" to="/test">Haz el test</Link>
        </div>
        <div className="Home-Test-Section-Right">
          <article className="slide">
            <img alt="ondulado" width="691.19" height="450" src={FotoOndulada} />
          </article>
          <article className="slide">
            <img alt="rizado" width="691.19" height="450" src={FotoRizada} />
          </article>
          <article className="slide">
            <img alt="superRizado" width="691.19" height="450" src={FotoExtraRizada} />
          </article>
        </div>
      </div>
    </div>
  )
}

export default HomeTest