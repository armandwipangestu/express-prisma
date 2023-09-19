const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/products", async (req, res) => {
  const product = await prisma.product.findMany();

  res.status(200).send({
    data: product,
    status_code: "200 OK",
    message: "Get Product",
  });
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    res.status(400).send({
      data: product,
      status_code: "400 Bad Request",
      message: "Product not found",
    });
  }

  res.status(200).send({
    data: product,
    status_code: "200 OK",
    message: "Get Product By Id",
  });
});

app.post("/products", async (req, res) => {
  //   const newProduct = req.body;
  const { name, price, description, image } = req.body;

  const product = await prisma.product.create({
    // data: {
    //   name: newProduct.name,
    //   price: newProduct.price,
    //   description: newProduct.description,
    //   image: newProduct.image,
    // },
    data: {
      name,
      price,
      description,
      image,
    },
  });

  res.status(201).send({
    data: product,
    status_code: "201 Created",
    message: "Product Added",
  });
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.product.delete({
    where: {
      id,
    },
  });

  // res.status(202).send({
  //     status_code: "204 Accepted",
  //     message: "Product Deleted",
  // });

  res.status(204).send({
    status_code: "204 No Content",
    message: "Product Deleted",
  });
});

app.put("/products/:id", async (req, res) => {
  const id = req.params.id;
  // const productData = req.body
  const { name, price, description, image } = req.body;

  if (!(name, price, description, image)) {
    return res.status(400).send({
      status_code: "400 Bad Request",
      message: "Some fields are missing",
    });

    // return;
  }

  const product = await prisma.product.update({
    where: {
      id,
    },
    // data: {
    //   name: productData.name,
    //   price: productData.price,
    //   description: productData.description,
    //   image: productData.image,
    // },
    data: {
      name,
      price,
      description,
      image,
    },
  });

  // res.status(201).send({
  //     data: product,
  //     status_code: "201 Create",
  //     message: "Product Edited",
  // });

  res.status(200).send({
    data: product,
    status_code: "200 OK",
    message: "Product Edited",
  });
});

app.patch("/products/:id", async (req, res) => {
  const id = req.params.id;
  // const productData = req.body
  const { name, price, description, image } = req.body;

  const product = await prisma.product.update({
    where: {
      id,
    },
    // data: {
    //   name: productData.name,
    //   price: productData.price,
    //   description: productData.description,
    //   image: productData.image,
    // },
    data: {
      name,
      price,
      description,
      image,
    },
  });

  // res.status(201).send({
  //     data: product,
  //     status_code: "201 Create",
  //     message: "Product Edited",
  // });

  res.status(200).send({
    data: product,
    status_code: "200 OK",
    message: "Product Edited",
  });
});

app.listen(PORT, () => {
  console.log(`Express API running on port ${PORT}`);
});
