import axios from 'axios'
// import {UPDATE} from 'sequelize/types/lib/query-types'

//action types
export const ADDED_TO_CART = 'ADDED_TO_CART'
export const INCREASED_QUANTITY = 'INCREASED_QUANTITY'
export const DECREASED_QUANTITY = 'DECREASED_QUANTITY'
export const DELETED_FROM_CART = 'DELETED_FROM_CART'

//action creators
export const addedToCart = addedProduct => {
  return {
    type: ADDED_TO_CART,
    addedProduct
  }
}

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

//thunk creators -- seem unnecessary?

//initial state
const initialState = {
  cart: [],
  quantities: {}
}

//NOTE: we will need to add logic for finding totalCartPrice and totalCartItems in the front-end component, inside the render, before the return.

//reducer
export default function(state = initialState, action) {
  let newState
  switch (action.type) {
    case ADDED_TO_CART:
      // console.log('DOES THIS REACH REDUCER?')
      return {
        ...state,
        cart: [...state.cart, action.addedProduct],
        quantities: {...state.quantities, [action.addedProduct.name]: 1}
      }
    case DELETED_FROM_CART:
      newState = Object.assign({}, state)
      delete newState.quantities[action.deletedProduct.name]
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.productId),
        quantities: newState.quantities
      }
    case INCREASED_QUANTITY:
      newState = Object.assign({}, state)
      newState.quantities[action.deletedProduct.name]++
      return {...state, quantities: newState.quantities}
    case DECREASED_QUANTITY:
      newState = Object.assign({}, state)
      if (newState.quantities[action.product.name] > 1) {
        newState.quantities[action.product.name]--
      }
      return {...state, quantities: newState.quantities}
    default:
      return state
  }
}
