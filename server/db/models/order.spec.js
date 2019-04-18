const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctShippingPref', () => {
      let testOrder

      beforeEach(async () => {
        testOrder = await Order.create({
          shippingPref: 'rush'
        })
      })

      it('returns true if the shipping preference is correct', () => {
        expect(testOrder.correctShippingPref('rush')).to.be.equal(true)
      })

      it('returns false if the shipping preference is incorrect', () => {
        expect(testOrder.correctShippingPref('standard')).to.be.equal(false)
      })
    }) // end describe('correctShippingPref')
  }) // end describe('instanceMethods')
}) // end describe('Order model')
