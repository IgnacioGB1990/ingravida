import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import shopReducer from "./shop/shop.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //The only thing we want to persist. Firebase already does user persist for us.
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)