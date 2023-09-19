// Layer untuk handle request dan response
// Biasanya juga handle validasi body

const express = require('express')
const router = express.Router()
const prisma = require('../db')
const {
    getAllProducts,
    getProductsById,
    createProduct,
    deleteProductById,
    editProductById,
} = require('./product.service')

router.get('/', async (req, res) => {
    const products = await getAllProducts()

    res.status(200).send({
        data: products,
        status_code: '200 OK',
        message: 'Get Product',
    })
})

router.get('/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id)
        const product = await getProductsById(productId)

        res.status(200).send({
            data: product,
            status_code: '200 OK',
            message: 'Get Product By Id',
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newProductData = req.body

        const product = await createProduct(newProductData)

        res.status(201).send({
            data: product,
            status_code: '201 Created',
            message: 'Product Added',
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const productId = req.params.id

        await deleteProductById(parseInt(productId))

        res.status(204).send({
            status_code: '204 No Content',
            message: 'Product Deleted',
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const productId = req.params.id
        const productData = req.body

        if (
            !(
                productData.name &&
                productData.price &&
                productData.description &&
                productData.image
            )
        ) {
            return res.status(400).send({
                status_code: '400 Bad Request',
                message: 'Some fields are missing',
            })

            // return;
        }

        const product = await editProductById(parseInt(productId), productData)

        res.status(200).send({
            data: product,
            status_code: '200 OK',
            message: 'Product Edited',
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const productId = req.params.id
        const productData = req.body

        const product = await editProductById(parseInt(productId), productData)

        res.status(200).send({
            data: product,
            status_code: '200 OK',
            message: 'Product Edited',
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router
