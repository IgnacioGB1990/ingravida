import React from 'react'
import { ingredientItems } from "./ingredientItems"
import "./homeIngredients.styles.css"

const HomeIngredients = () => {
  return (
    <div className="Container">
      <div className="Section">
        <div className="Header">
          solo las cosas buenas
        </div>
        <div className="IngredientsBox">
          <div className="IngredientsDisplay">
            {ingredientItems.map((ingredient, index) => {
              return (
                <ul className="Elements" key={index}>
                  <i style={{ marginRight: 0.5 + 'em' }} className={ingredient.svg}></i>
                  {ingredient.name}
                </ul>
              )
            })}
          </div>
        </div>
        <div className="ButtonContainer">
          <a className="Button" href="/ingredientes">Saber más</a>
        </div>
      </div>

    </div>
  )
}

export default HomeIngredients