import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"


import CollectionPreview from "../collection-preview/collection-preview.component"
import { selectCollectionsForPreview } from "../../../redux/shop/shop.selectors"
import "./collections-overview.styles.scss"


const CollectionsOverview = ({ collections }) => (

  <div className="collections-overview">
    <div className="white-bar">
    </div>
    <div className="shop-header">
      <div className="shop-all-title">
        Catálogo de Productos
          </div>
      <div className="shop-all-title-des">
        champús, acondicionadores, geles y packs de ahorro
          </div>
    </div>
    <div className="white-bar2">
    </div>
    <div className="products-collection">
      {collections.map((item) => (
        <CollectionPreview key={item.id} item={item} />
      ))}
    </div>
    <div className="white-bar2">
    </div>

  </div>
)


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionsOverview)