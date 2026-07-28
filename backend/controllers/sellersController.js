const Seller = require('../models/Seller');

// Listar todos os vendedores
const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();

    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar vendedor por ID
const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);

    if (!seller) {
      return res.status(404).json({
        message: 'Vendedor não encontrado.'
      });
    }

    res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar vendedor
const createSeller = async (req, res) => {
  try {
    const seller = await Seller.create(req.body);

    res.status(201).json(seller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar vendedor
const updateSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!seller) {
      return res.status(404).json({
        message: 'Vendedor não encontrado.'
      });
    }

    res.status(200).json(seller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir vendedor
const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);

    if (!seller) {
      return res.status(404).json({
        message: 'Vendedor não encontrado.'
      });
    }

    res.status(200).json({
      message: 'Vendedor removido com sucesso.'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
};