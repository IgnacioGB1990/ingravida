import React from 'react';
import { connect } from "react-redux"

import { selectProduct } from "../../redux/shop/shop.selectors"

import "./product-description.styles.scss"
import ProductDescription from "../../components/product-description/product-description.component"

const ProductDescriptionPage = ({ match, collection }) => {

  console.log("this is my selection", collection);
  const product = collection.find(p => p._id === match.params.id)

  console.log("This is my products", product)
  return (
    <div className="product-container" >




      <ProductDescription product={product} />
    </div>

  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectProduct(ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(ProductDescriptionPage);