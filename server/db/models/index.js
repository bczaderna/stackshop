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

itemPurchase.beforeCreate((async (instance) => {
  //how do we know the quantity ordered?
  let quantityOrdered = instance.dataValues.quantity

  //find the thing and find out how much is left
  let productToUpdate = await Product.findByPk(instance.dataValues.productId)
  console.log(instance.dataValues.productId, 'instance product id?')
  console.log(productToUpdate, 'product to update?')
  
  let currentInventory = productToUpdate.dataValues.inventory
  let newInventory = currentInventory - quantityOrdered
  console.log(newInventory, 'new inventory')

  //decrement the inventory number
  await productToUpdate.update({inventory: newInventory})
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
