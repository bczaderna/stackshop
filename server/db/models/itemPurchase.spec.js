const {expect} = require('chai')
const db = require('../index')
const itemPurchase = db.model('itemPurchase')

describe('itemPurchase model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('quantity', () => {
      let testPurchase

      beforeEach(async () => {
        testPurchase = await itemPurchase.create({
          quantity: 1,
          purchasePrice: 500
        })
      })

      it('returns true if there is a quantity', () => {
        expect(testPurchase.quantity(1)).to.be.equal(true)
      })

      it('returns false if there is no quantity', () => {
        expect(testPurchase.quantity()).to.be.equal(false)
      })
    }) // end describe('quantity')
    describe('purchasePrice', () => {
      let testPurchase

      beforeEach(async () => {
        testPurchase = await itemPurchase.create({
          quantity: 1,
          purchasePrice: 500
        })
      })

      it('returns true if there is a purchasePrice', () => {
        expect(testPurchase.purchasePrice(500)).to.be.equal(true)
      })

      it('returns false if there is no purchasePrice', () => {
        expect(testPurchase.purchasePrice()).to.be.equal(false)
      })
    }) // end describe('purchasePrice')
  }) // end describe('instanceMethods')
}) // end describe('itemPurchase model')
