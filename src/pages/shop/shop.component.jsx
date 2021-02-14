import React from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux";

import CollectionsOverview from "../../components/shop/collections-overview/collections-overview.component"
import ProductDescriptionPage from "../product-description/product-description.component"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

import { updateCollections } from "../../redux/shop/shop.actions"
import { firestore, convertCollectionsSnapshotToMap } from "../../components/signInUp/firebase/firebase.utils"
import "./shop.styles.css"


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })

  }

  render() {

    const { match } = this.props
    const { loading } = this.state;
    return (
      <div className="shop-page">
        < Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        < Route path={`${match.path}/:id`} component={ProductDescriptionPage} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);



{/* < Route exact path={`${match.path}`} component={CollectionsOverview}  /> */ }
// ???