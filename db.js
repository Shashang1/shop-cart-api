var mongoose = require('mongoose')

const mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}
const mongoUrl = process.env.mongo_url || 'mongodb://127.0.0.1:27017/shop-cart'

const connect = () => {
  mongoose.connect(mongoUrl, mongoDbOptions, (err) => {
    if (err) console.log(err)
    else console.log('MONGOOSE CONNECTED')
  })
}

module.exports = connect


