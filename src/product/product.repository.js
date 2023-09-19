// Berkomunikasi dengan database
// Boleh pake ORM, boleh RAW Query
// Supaya apa? SUpaya kalo mau ganti-ganti OR tinggal edit di file ini aja

const prisma = require('../db')

const findProducts = async () => {
    const products = await prisma.product.findMany()

    return products
}

const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    })

    // const product = await prisma.$executeRaw`SELECT * FROM Product WHERE id = {id}`;

    return product
}

const findProductByName = async (name) => {
    const product = await prisma.product.findFirst({
        where: {
            name,
        },
    })

    return product
}

const insertProduct = async (productData) => {
    const product = await prisma.product.create({
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image,
        },
    })

    return product
}

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id,
        },
    })
}

const editProduct = async (id, productData) => {
    const product = await prisma.product.update({
        where: {
            id,
        },
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image,
        },
    })

    return product
}

module.exports = {
    findProducts,
    findProductById,
    insertProduct,
    findProductByName,
    deleteProduct,
    editProduct,
}
