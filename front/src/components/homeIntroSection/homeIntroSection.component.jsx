import React from 'react'
import "./homeIntroSection.styles.css"

export const HomeIntroSection = () => {
  return (
    <div className="Home-Intro-Section-Container">
      <h1 className="Home-Intro-Section-Text">tu transformación empieza aquí</h1>
      <h4 className="Home-Intro-Section-Logo">Cualesquiera que sean tu forma y tu textura, estamos aquí para ayudarte.</h4>
      {/* <h3 className="Home-Intro-Button-Container"><a className="abcButton" href="/abc">Saber más</a></h3> */}
      <a className="abcButton" href="/abc">Saber más</a>
    </div>
  )
}

export default HomeIntroSection;