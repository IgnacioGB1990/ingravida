import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { auth } from "../signInUp/firebase/firebase.utils"

import "./user-logo.styles.scss"

const UserLogo = ({ currentUser }) => {

  const [Display, setDisplay] = useState(false)

  return (
    <div>
      {
        currentUser ?
          <div className="fas fa-power-off fa-lg" onClick={() => auth.signOut()}></div>
          :
          !Display ?
            <Link className="far fa-user fa-lg" to="/inicio"></Link>
            :
            <Link className="log-in-mobile"
              to="/inicio"
            ></Link>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(UserLogo)