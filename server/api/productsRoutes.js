const router = require('express').Router()
const {Product} = require('../db/models')
const db = require('../db')


//route to get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
  module.exports = router
})

//route to get just one product
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findByPk(id)
    if (!product) {
      res.json(
        "We're sorry. This product is no longer available or has sold out."
      )
    } else res.json(product)
  } catch (err) {
    next(err)
  }
})

//router to update the inventory in Products db
// router.put("/:id", async (req, res, next) => {
//  try {
//   //how do we know what quantity is being purchased?
//   let quantityOrdered = await req.body.quantity
 
//   //find product we want to change
//   let product = await Product.findByPk(req.params.id)

//   //figure out how much of it is left
//   let currentQuantity = product.dataValues.quantity
// ​
//   let newQuantity = currentQuantity - quantityOrdered;
// ​
//   await product.updateAttributes({
//    quantity: newQuantity
//   })
//   res.status(200).send();
//  }
//  catch (err){
// ​   next(err)
//  }
// })

//error handling??
module.exports = router;