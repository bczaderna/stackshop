const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const db = require('../db')
const Sequelize = require('sequelize')

const itemPurchase = db.define('itemPurchase', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  purchasePrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  }
})

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order, {
  through: 'itemPurchase'
})
Order.belongsToMany(Product, {
  through: 'itemPurchase'
})

module.exports = {
  User,
  Order,
  Product,
  itemPurchase
}
