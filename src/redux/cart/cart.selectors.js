// Hemos creado este archivo con el fin de poder añadir
// artículos a la cesta desde distintos componentes (nos 
//interesa porque al pinchar en cada artículo queremos añadir una descripción más detallada de cada artículo)
// Inicialmente lo incluimos en cart-icon y cada vez
// que seleccionabamos un articulo por caja se añadía pero con el problema
// de se re-renderizaba cada vez pasando a estado inicial de 0

//Hemos instalado yarn add reselect

import { createSelector } from "reselect"

const selectCart = state => state.cart;


//By using createSelector we are memoizing
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(

  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)