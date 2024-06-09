const productController = require("../controllers/productController.js")

const router = require('express').Router()

router.post('/addProduct',productController.addproduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProducts)

router.get('/:id',productController.getOneProducts)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteproduct)

module.exports = router 