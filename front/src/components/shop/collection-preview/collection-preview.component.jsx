import React from 'react'

import "./collection-preview.styles.scss"

const CollectionPreview = ({ name, imageUrl, price }) => (


  < div className="collection-preview" >
    <img className="image-size" src={imageUrl} />
    <div className="footer">

      <h1 className="title">{name}</h1>
      <h3 className="price">{price} €</h3>

    </div>
  </div >
)

export default CollectionPreview;