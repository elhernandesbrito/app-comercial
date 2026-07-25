const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar produtos.",
      error: error.message
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado."
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar produto.",
      error: error.message
    });
  }

  
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);

  } catch (error) {
    res.status(400).json({
      message: "Erro ao cadastrar produto.",
      error: error.message
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado."
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(400).json({
      message: "Erro ao atualizar produto.",
      error: error.message
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado."
      });
    }

    res.status(200).json({
      message: "Produto excluído com sucesso."
    });

  } catch (error) {
    res.status(500).json({
      message: "Erro ao excluir produto.",
      error: error.message
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};





