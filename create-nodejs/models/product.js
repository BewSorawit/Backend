const { mongoose } = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/productDB'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})

let Product = mongoose.model("product", productSchema)

module.exports = Product