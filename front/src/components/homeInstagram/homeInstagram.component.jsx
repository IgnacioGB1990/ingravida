import React from 'react'
import { instagramPictures } from "./homeInstagramPictures"
import "./homeInstagram.styles.css"


const HomeInstagram = () => {
  return (
    <div className="ContainerInstagram">
      <h2 className="HeaderInstagram">Comparte tu viaje de rizos en #ingravida</h2>
      <div className="ContainerImages">
        {instagramPictures.map((picture, index) => {
          return (
            <ul className="InstaImagesContainer" key={index}>
              <img className="InstaImages" src={picture.url}></img>
              {picture.name}
            </ul>
          )
        })}



      </div>
    </div>
  )
}

export default HomeInstagram