/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('has image', () => {
      let cody

      beforeEach(async () => {
        cody = await Product.create({
          imageUrl: 'cody@puppybook.com',
          name: 'bones',
          inventory: 1,
          price: 100
        })
      })

      it('returns true if there is an image', () => {
        expect(cody.imageUrl).to.be.equal('cody@puppybook.com')
      })
    })
  })
})
