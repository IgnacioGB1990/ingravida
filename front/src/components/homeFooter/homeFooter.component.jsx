import React from 'react'
import "./homeFooter.styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const HomeFooter = () => {
  return (
    <div className="ContainerFooter">


      <div className="social-container">
        <a href="www.youtube.com "
          target="_blank"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

        <a href="www.facebook.com "
          target="_blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a href="www.youtube.com "
          target="_blank"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a href="www.instagram.com "
          target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>

    </div>
  )
}

export default HomeFooter