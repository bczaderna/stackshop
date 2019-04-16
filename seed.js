const {db, Product} = require('./server/db')
const {green, red} = require('chalk')
const productDummyData = require('./server/db/productDummyData')
// const Product = require('./server/db/models/product')

const seed = async () => {
  await db.sync({force: true})

  await Promise.all(
    productDummyData.map(product => {
      return Product.create(product)
    })
  )

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
