import React from 'react'
import { instagramPictures } from "./homeInstagramPictures"
import { Carousel } from 'react-bootstrap';
import "./homeInstagram.styles.css"



const HomeInstagram = () => {

  // const mystyle = {
  //   width: "200px",
  //   height: "150px",
  //   marginleft: "auto",
  //   marginright: "auto",
  //   transition: "transform .2s",
  // };



  return (
    // <div className="ContainerInstagram">
    //   <h2 className="HeaderInstagram">Comparte tu viaje de rizos en #ingravida</h2>

    //   <div className="ContainerImages">
    //     {instagramPictures.map((picture, index) => {
    //       return (
    //         <img onClick={() => window.open(`https://www.instagram.com/${picture.instagram}`, "_blank")} key={index} className="InstaImages" src={picture.url}></img>
    //       )
    //     })}
    //   </div>
    // </div>
    <div className="ContainerBackground">
      <h2 className="HeaderInstagram">Comparte tu viaje de rizos en #ingravida</h2>
      <Carousel interval={false} >
        <Carousel.Item >
          {instagramPictures.map((picture, index) => {
            return (
              <img onClick={() =>
                window.open(`https://www.instagram.com/${picture.instagram}`, "_blank")}
                key={index}
                className="InstaImages"
                // style={mystyle}
                // className="d-block w-100"
                src={picture.url}
              ></img>
            )
          })}
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default HomeInstagram