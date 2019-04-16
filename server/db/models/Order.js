const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('order', {

    shippingPref: {
        type: Sequelize.STRING,
        defaultValue: 'standard',
        validate: {
            isIn: [['standard', 'rush']]
        }
    },
    totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            isEmpty: false,
            isDecimal: true,
            min: 0
        }
    }
    
})