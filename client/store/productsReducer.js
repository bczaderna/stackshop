import axios from 'axios'
import history from '../history'

//action types
//const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//action creators
const gotAllProducts = (products) => ({
    type: GOT_ALL_PRODUCTS,
    products
})

const gotSingleProduct = (product) => ({
    type: GOT_SINGLE_PRODUCT,
    product
})

//thunk creators
export const gettingAllProducts = () => {
    return async dispatch => {
        let response = await axios.get('/api/products')
        let products = response.data
        dispatch(gotAllProducts(products))
    }
}

export const gettingSingleProduct = (id) => {
    return async dispatch => {
        let response = await axios.get(`/api/products/${id}`)
        let product = response.data
        dispatch(gotSingleProduct(product))
    }
}


//initial state
const initialState = {
    products: [],
    selectedProduct: {}
}


//reducer 
export default function(state = initialState, action) {
    switch (action.type) {
      case GOT_ALL_PRODUCTS:
        return {...state, products: action.products}
      case GOT_SINGLE_PRODUCT:
        return {...state, selectedProduct: action.product}
      default:
        return state
    }
  }