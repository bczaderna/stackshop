const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('product', {
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isEmpty: false,
      min: 0
    }
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      isEmpty: false,
      isDecimal: true,
      min: 0
    }
  }
})
