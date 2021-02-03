import React from 'react'
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import LazyLoad from 'react-lazy-load';

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../../redux/cart/cart.actions"
// import ProductDescription from "../../product-description/product-description.component"

import "./collection-preview.styles.scss"

const CollectionPreview = ({ item, addItem }) => {
  const history = useHistory()
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-preview" >
      <LazyLoad

        debounce={false}
        offsetVertical={500}
      >
        <img onClick={() => { history.push(`/tienda/${name.toLowerCase()}`) }}
          alt="products"
          className="image"
          src={imageUrl} />
      </LazyLoad>
      <div className="footer">
        <span className="title">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <CustomButton id="mobile-add-item" onClick={() => addItem(item)}   >
        Añadir a la cesta
       </CustomButton >
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreview);