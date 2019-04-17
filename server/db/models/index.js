const User = require('./user')
const OrderHistory = require('./orderHistory')
const Product = require('./product')
const db = require('../db')
const Sequelize = require('sequelize')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// why is this primary id getting deleted through the below associations?
const itemPurchaseHistory = db.define('itemPurchaseHistory', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

console.log(Product, 'product in index.js')
OrderHistory.belongsTo(User)
User.hasMany(OrderHistory)

// to create ItemPurchaseHistory table:
Product.belongsToMany(OrderHistory, {
  through: 'itemPurchaseHistory'
  // as: 'itemsOrdered' --> why isn't this working?
})
OrderHistory.belongsToMany(Product, {
  through: 'itemPurchaseHistory'
})


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  OrderHistory,
  Product,
  itemPurchaseHistory
}
