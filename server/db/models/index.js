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

itemPurchase.beforeCreate(((instance) => {
  //how do we know the quantity ordered?
  let quantityOrdered = instance.quantity

  //find the thing and find out how much is left
  let productToUpdate = Product.findByPk(instance.id)
  let currentInventory = productToUpdate.inventory
  let newInventory = currentInventory - quantityOrdered

  //decrement the inventory number
  productToUpdate.update({inventory: newInventory})
}))

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
