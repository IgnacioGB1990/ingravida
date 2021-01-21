import React from 'react'

import "./product-description.styles.scss"

const ProductDescription = ({ item: { imageUrl, price, name, quantity } }) => (

  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity}x{price}€
        </span>
    </div>
  </div>
)


export default ProductDescription;


