// import { expect } from 'chai';
const {expect} = require('chai')
import { createStore } from 'redux';

// You will write these functions
import { addedToCart, increasedQuantity, decreasedQuantity, deletedFromCart, ADDED_TO_CART } from './cartReducer';

import {reducer} from './index';

const products = [
  { id: 2, name: 'Courage', inventory: 10, price: 600},
  { id: 3, name: 'Love', inventory: 10, price: 100000},
  { id: 1, name: 'Respect', inventory: 10, price: 5000}
];


function getRandomProduct (testProducts) {
  return testProducts[Math.floor(Math.random() * testProducts.length)];
}


  describe('reduces on ADDED_TO_CART action', () => {

    it('adds the item to the cart array (without mutating the previous state)', () => {

      const store = createStore(reducer)
      const prevState = { products };

      const testProduct = getRandomProduct(products);
      const action = { type: ADDED_TO_CART,
        testProduct };
      store.dispatch(action);

      const newState = {...prevState, products: [...products, testProduct]};
       
      console.log(newState.products, 'WHAT IS PRODUCTS')
      expect(newState.products.length).to.be.equal(prevState.products.length + 1);
      
      expect(newState.products[newState.products.length - 1]).to.be.deep.equal(testProduct);
      expect(newState.products).to.not.be.equal(prevState.products);

    });

  });



//   describe('reduces on REMOVE_DOG action', () => {

//     it('removes a dog from the dogs array (without mutating the previous state)', () => {

//       // adds need some pre-loaded state in the store
//       // the state.dogs array is initialized as our DOGS array
//       const store = createStore(reducer, {dogs: DOGS, cats: [], petToPreview: {}, petToAdopt: {}})
//       const prevState = store.getState();

//       const petToRemove = getRandomPet(DOGS);
//       const action = { type: 'REMOVE_DOG', dogId: petToRemove.id };
//       store.dispatch(action);

//       const newState = store.getState();

//       expect(newState.dogs.length).to.be.equal(prevState.dogs.length - 1);
//       expect(newState.dogs.find(dog => dog.id === petToRemove.id)).to.be.undefined
//       expect(newState.dogs).to.not.be.equal(prevState.dogs);
//       expect(newState.cats).to.deep.equal(prevState.cats)
//       expect(newState.petToAdopt).to.deep.equal(prevState.petToAdopt)
//       expect(newState.petToPreview).to.deep.equal(prevState.petToPreview)
//     });

//   });





// }); // end Reducer


