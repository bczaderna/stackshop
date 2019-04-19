import axios from 'axios'
// import {UPDATE} from 'sequelize/types/lib/query-types'

//action types
export const ADDED_TO_CART = 'ADDED_TO_CART'
export const INCREASED_QUANTITY = 'INCREASED_QUANTITY'
export const DECREASED_QUANTITY = 'DECREASED_QUANTITY'
export const DELETED_FROM_CART = 'DELETED_FROM_CART'

//action creators
export const addedToCart = addedProduct => ({
  type: ADDED_TO_CART,
  addedProduct
})

export const increasedQuantity = product => ({
  type: INCREASED_QUANTITY,
  product
})

export const decreasedQuantity = product => ({
  type: DECREASED_QUANTITY,
  product
})

export const deletedFromCart = deletedProduct => ({
  type: DELETED_FROM_CART,
  deletedProduct
})

//thunk creators


//initial state
const initialState = {
  cart: []
}

//NOTE: we will need to add logic for finding totalCartPrice and totalCartItems in the front-end component, inside the render.

//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case ADDED_TO_CART:
      return {...state, cart: [...state.cart, action.addedProduct]}
    case DELETED_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.productId)
      }
    case INCREASED_QUANTITY:
      return {...state, cart: [...state.cart, action.product]}

    case DECREASED_QUANTITY:
      //what is deletedProduct?
      let indexToDelete = state.cart.indexOf(deletedProduct)

      return {
        ...state,
        cart: state.cart.filter((product, index) => index !== indexToDelete)
      }

    default:
      return state
  }
}


