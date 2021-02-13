import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../../redux/cart/cart.actions"
// import ProductDescription from "../../product-description/product-description.component"

import "./collection-preview.styles.scss"

const CollectionPreview = ({ item, addItem }) => {
  //const history = useHistory()
  const { name, price, imageUrl } = item;
  //console.log("this is name", name);

  // const product = products.find(p => p._id === match.params.id)
  //onClick={() => { history.push(`/tienda/${name.toLowerCase()}`) }}


  //console.log("this is item", item)
  return (
    <div className="collection-preview" >


      <Link to={`/tienda/${item.routeName}`} ><img
        alt="products"
        className="image"
        src={imageUrl} /></Link>


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