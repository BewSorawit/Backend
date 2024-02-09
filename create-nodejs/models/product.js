const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/productDB';

mongoose.connect(dbUrl).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));


let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;