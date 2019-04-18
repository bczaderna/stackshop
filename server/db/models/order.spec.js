const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correct ShippingPref', () => {
      let testOrder

      beforeEach(async () => {
        testOrder = await Order.create({
          shippingPref: 'rush'
        })
      })

      it('returns true if the shipping preference is correct', () => {
        expect(testOrder.shippingPref).to.be.equal('rush')
      })
    })
  })
})
