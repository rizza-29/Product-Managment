const productController = require("../controllers/productController.js")

const router = require('express').Router()

router.post('/addProduct',productController.addproduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProducts)

router.get('/:id',productController.getOneProducts)

router.get('/:id',productController.updateProduct)

router.get('/:id',productController.deleteproduct)

module.exports = router 