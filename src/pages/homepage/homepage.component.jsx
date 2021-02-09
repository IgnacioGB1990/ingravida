import React from 'react';
import HomeIntro from "../../components/homeIntro/homeIntro.component"
import ThreeImage from "../../components/threeImage/threeImage.component"
import HomeTest from "../../components/homeTest/homeTest.component"
import HomeIngredients from '../../components/homeIngredients/homeIngredients.component';
import HomeInstagram from "../../components/homeInstagram/homeInstagram.component"
import HomeFooter from "../../components/homeFooter/homeFooter.component"

import "./homepage.styles.css"

function HomePage() {
  return (
    <>

      <HomeIntro />
      {/* <ThreeImage /> */}
      {/* <HomeTest />
      <HomeIngredients />
      <HomeInstagram />
      <HomeFooter />*/}
    </>
  );
}

export default HomePage;