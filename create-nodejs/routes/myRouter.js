const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

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

router.get('/add-product', (req, res) => {
    res.render('form')
})
router.get('/manage', async (req, res) => {
    try {
        const products = await Product.find();
        res.render('manage', { products: products })
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/insert', upload.single('image'), async (req, res) => {
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
router.post('/update', async (req, res) => {
    try {
        const update_id = req.body.update_id;

        // Check if the product exists
        const existingProduct = await Product.findById(update_id);
        if (!existingProduct) {
            return res.status(404).send('Product not found');
        }

        // Create a data object with updated information
        const updatedData = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        };

        // Update the product
        await Product.findByIdAndUpdate(update_id, updatedData, { useFindAndModify: false });

        // Optionally, you can redirect to the product details page or any other desired location
        res.redirect(`/manage`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        // Delete the associated imasge file
        const imagePath = path.join(__dirname, '../public/images/products', product.image);
        fs.unlinkSync(imagePath);

        // Delete the product from the database
        await Product.findByIdAndDelete(req.params.id, { useFindAndModify: false });

        // Optionally, you can redirect to the manage page or send a success response.
        res.redirect('/manage');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/edit', async (req, res) => {
    try {
        const edit_id = req.body.edit_id;

        // Use await to wait for the asynchronous operation
        const doc = await Product.findOne({ _id: edit_id }).exec();
        res.render('edit', { product: doc })
        console.log(doc);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product_id = req.params.id;
        const product = await Product.findOne({ _id: product_id }).exec();

        res.render('product', { product: product });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router