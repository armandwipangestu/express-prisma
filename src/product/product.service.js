// Service Layer bertujuan untuk handle business logic
// Kenapa dipisah? supaya tanggung jawab nya ter-isolate dan function nya reusable

const {
    findProducts,
    findProductById,
    insertProduct,
    findProductByName,
    deleteProduct,
    editProduct,
} = require('./product.repository')

const getAllProducts = async () => {
    const products = await findProducts()

    return products
}

const getProductsById = async (id) => {
    const product = await findProductById(id)

    if (!product) {
        throw Error('Product not found')
    }

    return product
}

const createProduct = async (newProductData) => {
    const findProduct = await findProductByName(newProductData.name)

    if (findProduct) {
        throw new Error('Name has to be unique')
    }

    const product = await insertProduct(newProductData)

    return product
}

const deleteProductById = async (id) => {
    await getProductsById(id)
    await deleteProduct(id)
}

const editProductById = async (id, productData) => {
    await getProductsById(id)
    const product = await editProduct(id, productData)

    return product
}

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    deleteProductById,
    editProductById,
}
