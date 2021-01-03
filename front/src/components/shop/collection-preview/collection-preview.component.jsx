import React from 'react'

import "./collection-preview.styles.scss"

const CollectionPreview = ({ name, imageUrl, price }) => (


  < div className="collection-preview" >
    <h1 className="title">{name}</h1>
    <div className="footer">


      <img src={imageUrl} />
      <h3>{price}</h3>

    </div>
  </div >
)

export default CollectionPreview;