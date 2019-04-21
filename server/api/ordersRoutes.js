const router = require('express').Router()
const {Order, itemPurchase} = require('../db/models')
const db = require('../db')


//this post route will deal with adding info to the Order db once 'checkout' button is clicked.
router.post('/', async (req, res, next) => {
    try {
      if (req.body === "undefined" || req.body === "") {
        res.sendStatus(500);
      } else {
      let newOrder = await Order.create(req.body);
  
      res.status(200).json(newOrder);
      }
    } catch (err) {
      next(err)
    }
  })
  
  //this will require access to the itemPurchases db.
  //this post route will deal with adding info to the itemPurchases db once 'checkout' button is clicked.
  router.post('/', async (req, res, next) => {
    try {
      if (req.body === "undefined" || req.body === "") {
        res.sendStatus(500);
      } else {
      let newItemPurchase = await itemPurchase.create(req.body);
  
      res.status(200).json(newItemPurchase);
      }
  
    } catch (err) {
      next(err)
    }
  })



module.exports = router;