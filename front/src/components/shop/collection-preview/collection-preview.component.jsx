import React from 'react'
import { connect } from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../../redux/cart/cart.actions"

import "./collection-preview.styles.scss"

const CollectionPreview = ({ item, addItem }) => {

  const { name, price, imageUrl } = item;

  return (
    <div className="collection-preview" >
      <img alt="products" className="image-size" src={imageUrl} />
      <div className="footer">
        <span className="title">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <CustomButton onClick={() => addItem(item)}   >
        Añadir a la cesta
       </CustomButton >
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreview);