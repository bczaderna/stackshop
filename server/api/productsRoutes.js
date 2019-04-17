const router = require('express').Router()
const {Product} = require('../db/models')
const db = require('../db')
//const Product = require('../db/models/product')
module.exports = router

//route to get all products
router.get('/', async (req, res, next) => {
  try {
    console.log(Product, 'is this Products')
    console.log(db.models, 'models')
    const products = await Product.findAll()
    console.log(products, 'products???')
    res.json(products)
  } catch (err) {
    next(err)
  }
module.exports = router


//route to get all products
router.get('/', async (req, res, next) => {
    try {
      const products = await Product.findAll()
      res.json(products)
      }
      
    catch (err) {
      next(err)
    }
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
    }
    res.json(product)
  } catch (err) {
    next(err)
  }
    try {
        const id  = req.params.id
        const product = await Product.findByPk(id)
        if (!product) {
          res.json('We\'re sorry. This product is no longer available or has sold out.')
        }
        res.json(product)
      }
      
    catch (err) {
      next(err)
    }
})
})
//error handling??
