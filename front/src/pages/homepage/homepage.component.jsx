import React from 'react';
import HomeIntro from "../../components/homeIntro/homeIntro.component"
import HomeTest from "../../components/homeTest/homeTest.component"
import HomeIngredients from '../../components/homeIngredients/homeIngredients.component';
import HomeInstagram from "../../components/homeInstagram/homeInstagram.component"
import HomeFooter from "../../components/homeFooter/homeFooter.component"

function HomePage() {
  return (

    <div >

      <HomeIntro />
      <HomeTest />
      <HomeIngredients />
      <HomeInstagram />
      <HomeFooter />

    </div>

  );
}

export default HomePage;