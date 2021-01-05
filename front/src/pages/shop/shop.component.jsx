import React from 'react';

import "./shop.styles.css"

import SHOP_DATA from "../../redux/shop/shop.data"
import CollectionPreview from "../../components/shop/collection-preview/collection-preview.component"

class ShopPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  //Cogemos todo el array con la información
  //y mapeamos sobre ella ...otherCollecionProps devuelve un Objeto con cada una de sus
  //cualidades.
  render() {
    const { collections } = this.state;
    console.log("This is the ARRAY of SHOP DATA", { collections })
    return (
      <div className="shop-page">
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
        <div className="white-bar">
        </div>
        <div className="products-collection">

          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
            //console.log("this is the otherCollectionProps : ", { ...otherCollectionProps })
          ))}
        </div>
        <div className="white-bar">
        </div>
      </div>
    );
  }


}

export default ShopPage;