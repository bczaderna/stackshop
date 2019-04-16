/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('has image', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          image: 'cody@puppybook.com',
          name: 'bones',
          inventory: 1,
          price: 100
        })
      })

      it('returns true if there is an image', () => {
        expect(cody.image()).to.be.equal(true)
      })

      it('', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
