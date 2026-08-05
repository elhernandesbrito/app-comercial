const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar produtos.",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado.",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar produto.",
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      costPrice,
      salePrice,
      stock,
      active,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      category,
      costPrice,
      salePrice,
      stock,
      active,
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao cadastrar produto.",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      category,
      costPrice,
      salePrice,
      stock,
      active,
    } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        costPrice,
        salePrice,
        stock,
        active,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado.",
      });
    }

    return res.status(200).json({
      message: "Produto atualizado com sucesso.",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar produto.",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado.",
      });
    }

    return res.status(200).json({
      message: "Produto excluído com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao excluir produto.",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};