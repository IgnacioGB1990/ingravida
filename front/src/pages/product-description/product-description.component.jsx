import React from 'react';
import { connect } from "react-redux"

import { selectProduct } from "../../redux/shop/shop.selectors"

import "./product-description.styles.scss"
import ProductDescription from "../../components/product-description/product-description.component"

const ProductDescriptionPage = ({ collection }) => {
  // console.log("Returns whatever route you are after /tienda/", match.params.productId)
  console.log("This is my products", collection)
  return (
    <div className="product-container" >
      <h2>PRODUCT DESCRIPTION PAGE</h2>
      {/* <ProductDescription /> */}
    </div>

  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectProduct(ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(ProductDescriptionPage);