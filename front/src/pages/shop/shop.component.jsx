import React from 'react';
import { Route } from "react-router-dom"

import CollectionsOverview from "../../components/shop/collections-overview/collections-overview.component"
import ProductDescriptionPage from "../../pages/product-description/product-description.component"
import "./shop.styles.css"

const ShopPage = ({ match }) => {

  return (

    <div className="shop-page">
      < Route exact path={`${match.path}`} component={CollectionsOverview} />
      < Route path={`${match.path}/:productId`} component={ProductDescriptionPage} />
    </div>
  );
}


export default ShopPage;