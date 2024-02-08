const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const products = [
        { name: "โน๊ตบุ๊ค", price: 25500, image: "images/products/product1.png" },
        { name: "เสื้อผ้า", price: 500, image: "images/products/product2.png" },
        { name: "พัดลม", price: 200, image: "images/products/product3.png" },
    ]
    res.render('index', { products: products })
})

router.get('/addForm', (req, res) => {
    res.render('form')
})
router.get('/manage', (req, res) => {
    res.render('manage')
})

module.exports = router