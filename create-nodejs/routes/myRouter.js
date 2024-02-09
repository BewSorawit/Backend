const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage })

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

router.post('/insert',upload.single('image'), async (req, res) => {
    try {
        let data = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
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