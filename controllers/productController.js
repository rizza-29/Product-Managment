const db = require("../models")

const Product = db.products
const Review = db.reviews

const addproduct = async (req,res) => {

    let info = {
        title: req.body.title,
        price: req.body.price, 
        description: req.body.description,
        published: req.body.published
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

const getAllProducts = async (req,res) =>{

    let product = await Product.findAll({})
    res.status(200).send(product)
}

const getOneProducts = async (req,res) =>{

    let id = req.params.id
    let product = await Product.findOne({ where : {id:id}})
    res.status(200).send(product)
}

const updateProduct = async (req,res) => {

    let id=req.params.id
    const product = await Product.update(req.body,{where: {id:id}})
    res.status(200).send(product)
}

const deleteproduct = async (req,res) => {
    let id=req.params.id
    await Product.destroy({ where: {id:id}})
    res.status(200).send("Product is deleted !")
}

const getPublishedProducts = async (req,res) => {

    const product = await Product.findAll({where:{published:true}})
    res.status(200).send(product)
}

module.exports = {
    addproduct,
    getOneProducts,
    getAllProducts,
    updateProduct,
    deleteproduct,
    getPublishedProducts
}
