import React from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux";

import CollectionsOverview from "../../components/shop/collections-overview/collections-overview.component"
import ProductDescriptionPage from "../product-description/product-description.component"
import { updateCollections } from "../../redux/shop/shop.actions"
import { firestore, convertCollectionsSnapshotToMap } from "../../components/signInUp/firebase/firebase.utils"
import "./shop.styles.css"

class ShopPage extends React.Component {

  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");



    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)

    })

  }

  render() {

    const { match } = this.props
    return (
      <div className="shop-page">
        < Route exact path={`${match.path}`} component={CollectionsOverview} />
        < Route path={`${match.path}/:productId`} component={ProductDescriptionPage} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);