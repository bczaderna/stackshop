const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('orderHistory', {
  shippingPref: {
    type: Sequelize.STRING,
    defaultValue: 'standard',
    validate: {
      isIn: [['standard', 'rush']]
    }
  }
})
