import React from 'react';

import CollectionsOverview from "../../components/shop/collections-overview/collections-overview.component"

import "./shop.styles.css"

const ShopPage = ({ collections }) => (

  <div className="shop-page">
    <CollectionsOverview />
  </div>
);


export default ShopPage;