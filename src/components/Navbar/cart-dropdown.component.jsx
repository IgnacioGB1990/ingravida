import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import CustomButton from "../shop/custom-button/custom-button.component"
import CartItem from "../shop/cart-item/cart-item.component"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import "./cart-dropdown.styles.scss"

const CartDropdown = ({ cartItems, history, dispatch }) => (

  <div className="cart-dropdown">
    <div className="cart-items" >
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
            <span className="empty-message">Tu cesta está vacia ve a tienda</span>
            // <Link className="empty-message" to="/tienda">Ve a tienda</Link>
          )}

    </div>
    <CustomButton onClick={() => {
      history.push("/caja")
      dispatch(toggleCartHidden())
    }}>
      Pasar por caja
       </CustomButton>
  </div>
)

//So cart dropdown doesn´t re-render
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

//withRouter es un HOC que coge los componentes que devolvió connect y toma como componente de argumento.
export default withRouter(connect(mapStateToProps)(CartDropdown))