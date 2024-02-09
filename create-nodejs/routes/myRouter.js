const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products: products })
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

})

router.get('/addForm', (req, res) => {
    res.render('form')
})
router.get('/manage', (req, res) => {
    res.render('manage')
})

router.post('/insert', async (req, res) => {
    try {
        let data = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        });
        await data.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router