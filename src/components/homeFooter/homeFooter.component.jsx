import React from 'react'
import "./homeFooter.styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const HomeFooter = () => {
  return (
    <div className="ContainerFooter">


      <div className="social-container">
        <a href="https://www.youtube.com "
          target="_blank"
          className="youtube social"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="social-media-icon" />
        </a>

        <a href="https://www.facebook.com "
          target="_blank"
          className="facebook social"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
        </a>

        <a href="https://www.twitter.com "
          target="_blank"
          className="twitter social"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
        </a>

        <a href="https://www.instagram.com "
          target="_blank"
          className="instagram social"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
        </a>
      </div>

    </div>
  )
}

export default HomeFooter