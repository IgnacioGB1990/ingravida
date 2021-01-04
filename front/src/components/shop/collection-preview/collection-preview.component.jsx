import React from 'react'

import "./collection-preview.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const CollectionPreview = ({ name, imageUrl, price }) => (


  < div className="collection-preview" >
    <img className="image-size" src={imageUrl} />
    <div className="footer">

      <span className="title">{name}</span>
      <span className="price">{price} €</span>

    </div>
    <CustomButton  >
      Add to cart
       </CustomButton>

  </div >
)

export default CollectionPreview;