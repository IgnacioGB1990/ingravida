import React from 'react'

import "./product-description.styles.scss"

const ProductDescription = ({ collection }) => {
  console.log("Esto es collection??", collection)

  const { name, imageUrl, price } = collection;

  return (

    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price}€
        </span>
      </div>
    </div>
  )
}


export default ProductDescription;


