import { createSelector } from "reselect"
import memoize from "lodash.memoize"

const PRODUCT_ID_MAP = {
  champu: 1,
  acondicionador: 2,
  mascarilla: 3,
  gel: 4,
  cleanser: 5,
  aceite: 6,
  champus: 7,
  acondicionadores: 8
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// export const selectProduct = productUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections =>
//       collections.find(
//         collection => collection.id === PRODUCT_ID_MAP[productUrlParam])
//   )


//Memoized selectProduct. Lesson 146.
export const selectProduct = memoize((productUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) =>
      collections.find(
        collection => collection.id === PRODUCT_ID_MAP[productUrlParam]
      )
  )
)