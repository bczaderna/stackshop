// import { expect } from 'chai';
const {expect} = require('chai')
import {createStore} from 'redux'


import {
  addedToCart,
  increasedQuantity,
  decreasedQuantity,
  deletedFromCart,
  ADDED_TO_CART
} from './cartReducer'

import {reducer} from './index'

const products = [
  {id: 2, name: 'Courage', inventory: 10, price: 600},
  {id: 3, name: 'Love', inventory: 10, price: 100000},
  {id: 1, name: 'Respect', inventory: 10, price: 5000}
]

function getRandomProduct(testProducts) {
  return testProducts[Math.floor(Math.random() * testProducts.length)]
}

describe('reduces on ADDED_TO_CART action', () => {
  it('adds the item to the cart array (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const prevState = {products}

    const testProduct = getRandomProduct(products)
    const action = {
      type: ADDED_TO_CART,
      testProduct
    }
    store.dispatch(action)

    const newState = {...prevState, products: [...products, testProduct]}

    console.log(newState.products, 'WHAT IS PRODUCTS')
    expect(newState.products.length).to.be.equal(prevState.products.length + 1)

    expect(newState.products[newState.products.length - 1]).to.be.deep.equal(
      testProduct
    )
    expect(newState.products).to.not.be.equal(prevState.products)
  })
})

describe('reduces on DELETED_FROM_CART action', () => {
  it('removes an item from the cart (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const prevState = {products}

    const productToRemove = getRandomProduct(products)
    const action = {type: 'DELETED_FROM_CART', productToRemove}
    store.dispatch(action)

    const newState = {
      ...prevState,
      products: [...products].slice(0, products.length - 1)
    }

    console.log(newState, 'what is our new state')

    expect(newState.products.length).to.be.equal(prevState.products.length - 1)
    //   expect(newState.products.find(product => product.id === productToRemove.id)).to.be.undefined;
    expect(newState.products).to.not.be.equal(prevState.products)
  })
})

describe('increases cart item total by one on INCREASED_QUANTITY action', () => {
  it('increases cart item total by one and adds to cart total and adds another item of same type to cart array', () => {
    const store = createStore(reducer)
    const prevState = {products}

    const productToAdd = getRandomProduct(products)
    const action = {type: 'INCREASED_QUANTITY', productToAdd}
    store.dispatch(action)

    const newState = {...prevState, products: [...products, productToAdd]}

    console.log(newState, 'what is our new state')

    expect(newState.products.length).to.be.equal(prevState.products.length + 1)

    expect(newState.products[newState.products.length - 1]).to.be.deep.equal(
      productToAdd
    )
    expect(newState.products).to.not.be.equal(prevState.products)
  })
})

describe('decreases cart item total by one on DECREASED_QUANTITY action', () => {
  it('decreases cart item total by one and subtracts from cart total and deletes an item from cart array', () => {
    const store = createStore(reducer)
    const prevState = {products}

    const productToDelete = getRandomProduct(products)
    const action = {type: 'INCREASED_QUANTITY', productToDelete}
    store.dispatch(action)

    const newState = {
      ...prevState,
      products: [...products].slice(0, products.length - 1)
    }

    console.log(newState, 'what is our new state')

    expect(newState.products.length).to.be.equal(prevState.products.length - 1)

    expect(newState.products).to.not.be.equal(prevState.products)
  })
})

// }); // end Reducer
