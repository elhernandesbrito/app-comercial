const express = require("express");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productsController");

const router = express.Router();

// Listar todos os produtos
router.get("/", getProducts);

// Buscar um produto pelo ID
router.get("/:id", getProductById);

// Cadastrar um novo produto
router.post("/", createProduct);

// Atualizar um produto
router.patch("/:id", updateProduct);

// Excluir um produto
router.delete("/:id", deleteProduct);

module.exports = router;