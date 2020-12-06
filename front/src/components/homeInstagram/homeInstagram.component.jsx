import React from 'react'
import { instagramPictures } from "./homeInstagramPictures"
import "./homeInstagram.styles.css"


const HomeInstagram = () => {

  const openUrl = (instapage) => {
    // <a href={`https://www.instagram.com/${instapage}`} ></a >
    console.log("hola")
  }



  return (
    <div className="ContainerInstagram">
      <h2 className="HeaderInstagram">Comparte tu viaje de rizos en #ingravida</h2>

      <div className="ContainerImages">
        {instagramPictures.map((picture, index) => {
          return (
            <img onClick={() => window.open(`https://www.instagram.com/${picture.instagram}`, "_blank")} key={index} className="InstaImages" src={picture.url}></img>
          )
        })}
      </div>
    </div>
  )
}

export default HomeInstagram