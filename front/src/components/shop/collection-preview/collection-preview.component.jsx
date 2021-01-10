import React from 'react'

import "./collection-preview.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const CollectionPreview = ({ name, imageUrl, price }) => (


  < div className="collection-preview" >
    <img alt="products" className="image-size" src={imageUrl} />
    <div className="footer">

      <span className="title">{name}</span>
      <span className="price">{price}€</span>

    </div>
    <CustomButton  >
      Añadir a la cesta
       </CustomButton>

  </div >
)

export default CollectionPreview;