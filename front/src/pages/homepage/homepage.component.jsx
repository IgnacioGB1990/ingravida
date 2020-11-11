import React from 'react';
import HomeIntro from "../../components/homeIntro/homeIntro.component"
import HomeTest from "../../components/homeTest/homeTest.component"
import HomeIngredients from '../../components/homeIngredients/homeIngredients.component';


function HomePage() {
  return (

    <div >

      <HomeIntro />
      <HomeTest />
      <HomeIngredients />

    </div>

  );
}

export default HomePage;