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

//initial state
const initialState = {
  cart: [],
  quantities: {}
}

//reducer
export default function(state = initialState, action) {
  let newQuantities
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.addedProduct],
        quantities: {...state.quantities, [action.addedProduct.name]: 1}
      }
    case DELETED_FROM_CART:
      newQuantities = Object.assign({}, state.quantities)
      delete newQuantities[action.deletedProduct.name]
      return {
        ...state,
        cart: state.cart.filter(
          product => product.id !== action.deletedProduct.id
        ),
        quantities: newQuantities
      }
    case INCREASED_QUANTITY:
      newQuantities = Object.assign({}, state.quantities)
      newQuantities[action.product.name]++
      return {...state, quantities: newQuantities}
    case DECREASED_QUANTITY:
      newQuantities = Object.assign({}, state.quantities)
      if (newQuantities[action.product.name] > 1) {
        newQuantities[action.product.name]--
      }
      return {...state, quantities: newQuantities}
    default:
      return state
  }
}
