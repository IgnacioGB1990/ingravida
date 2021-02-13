import React from 'react'

import "./product-description.styles.scss"

const ProductDescription = ({ product }) => {
  console.log("Esto es product??", product)

  const { name, imageUrl, price } = product;

  return (

    <div className="cart-item-des">
      <img className="img-detail" src={imageUrl} alt="item" />
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


