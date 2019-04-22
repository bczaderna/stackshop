const router = require('express').Router()
const {Order, itemPurchase, Product} = require('../db/models')
const db = require('../db')


//Can I combine these POST routes, given that we will always want them to happen together?

//this post route will deal with adding info to the Order db once 'checkout' button is clicked.
router.post('/', async (req, res, next) => {
    try {
      //req.body is the cart
      //cart will have an array of things being ordered and a quantity object

      //create a record on the order database
      let order = {
        userId: req.user.id
      }

      let newOrder = await Order.create(order);

      //create a record on the itemPurchase database for every unique item ordered

      let cart = req.body.cart
      let quantities = req.body.quantities

      cart.map(
        async (product) => {
          let name = product.name
          let quantityOrdered = quantities[name]
          let item = await Product.findByPk(product.id)
          let price = item.price

          let itemOrdered = {
            quantity: quantityOrdered,
            purchasePrice: price,
            productId: product.id,
            orderId: newOrder.id
          }

          await itemPurchase.create(itemOrdered)
        }
      )
  
    res.status(200).json(newOrder.id);
    }
    catch (err) {
      next(err)
    }
  })



module.exports = router;