const {db} = require('./server/db')
const {green, red} = require('chalk')
const Product = require('./server/db/models/product')

const seed = async () => {
  await db.sync({force: true})

  //Products
  const Happiness = await Product.create({
    name: 'Happiness',
    image:
      'https://dornob.com/wp-content/uploads/2009/06/giant-forest-tree-house-building.jpg',
    inventory: 5,
    price: 100
  })

  const Love = await Product.create({
    name: 'Love',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxwjoJdfLtWpAeeBnX9BzK3NVWaa4UDkO2Q2YK0mI8yJO0mQkZw',
    inventory: 10,
    price: 100
  })

  console.log(green('Seeding success!'))

  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
