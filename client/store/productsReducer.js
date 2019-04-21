import axios from 'axios'
import history from '../history'

//action types
//const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'
// const PLACED_AN_ORDER = 'PLACED_AN_ORDER'

//action creators
const gotAllProducts = products => ({
  type: GOT_ALL_PRODUCTS,
  products
})

const gotSingleProduct = product => ({
  type: GOT_SINGLE_PRODUCT,
  product
})

// const placedAnOrder = order => ({
//   type: PLACED_AN_ORDER,
//   order
// })

//thunk creators
export const gettingAllProducts = () => {
  return async dispatch => {
    let response = await axios.get('/api/products')
    let products = response.data
    dispatch(gotAllProducts(products))
  }
}

export const gettingSingleProduct = id => {
  return async dispatch => {
    let response = await axios.get(`/api/products/${id}`)
    //what does this product that we get back from the db look like?
    let product = response.data
    dispatch(gotSingleProduct(product))
  }
}

//in the 'checkout' or the 'confirmCheckout' component, will will need an onClick that will trigger an event handler that dispatches the 'gettingSingleProduct' thunk. This means we'll need to hook this func up through mapDispatchToProps.

// export const placeAnOrder = order => {
//   return async dispatch => {
//     const response = await axios.post('/api/checkout', order)
//     const newOrder = response.data
        //do I need another axios post request to add to the itemPurchases db?
//     //what to do with the inventory change? Do I need to create a 'getInventory' action and thunk that will get the inventory from the db after the new order has been placed in the db?

//     dispatch(placedAnOrder(newOrder))
//   }
// }

//initial state
const initialState = {
  products: [],
  selectedProduct: {}
}

//reducer
export default function(state = initialState, action) {
  let newState
  let order
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      return {...state, products: action.products}
    case GOT_SINGLE_PRODUCT:
      return {...state, selectedProduct: action.product}
    // case PLACED_AN_ORDER:
    //   newState = Object.assign({}, state)
    //   order = action.order
    //   newState.products.map(product => {
    //     if (action.order.id === product.id) {
    //       product.inventory--
    //     }
    //   })
    //   return {
    //     ...state,
    //     products: newState.products
    //   }
    default:
      return state
  }
}
