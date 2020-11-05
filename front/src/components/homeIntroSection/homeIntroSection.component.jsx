import React from 'react'
import "./homeIntroSection.styles.css"

export const HomeIntroSection = () => {
  return (
    <div className="Home-Intro-Section-Container">
      <h1 className="Home-Intro-Section-Text">saca a relucir tus rizos de una vez</h1>
      <h4 className="Home-Intro-Section-Logo">Ya tengas el pelo ondulazo, rizado o super rizado, tenemos el producto para ti.</h4>
      {/* <h3 className="Home-Intro-Button-Container"><a className="abcButton" href="/abc">Saber más</a></h3> */}
      <a className="abcButton" href="/abc">Saber Más</a>
    </div>
  )
}

export default HomeIntroSection;