import React from 'react';

import SHOP_DATA from "../../redux/shop/shop.data"
import CollectionPreview from "../../components/shop/collection-preview/collection-preview.component"

class ShopPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    console.log({ collections })
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))


        }

      </div>
    );
  }


}

export default ShopPage;