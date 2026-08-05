const Seller = require("../models/Seller");

// Listar todos os vendedores
const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();

    return res.status(200).json(sellers);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar vendedores.",
      error: error.message,
    });
  }
};

// Buscar vendedor por ID
const getSellerById = async (req, res) => {
  try {
    const { id } = req.params;

    const seller = await Seller.findById(id);

    if (!seller) {
      return res.status(404).json({
        message: "Vendedor não encontrado.",
      });
    }

    return res.status(200).json(seller);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar vendedor.",
      error: error.message,
    });
  }
};

// Cadastrar vendedor
const createSeller = async (req, res) => {
  try {
    const {
      name,
      cpf,
      registration,
      phone,
      email,
      address,
      city,
      state,
      hireDate,
      photoUrl,
      notes,
      active,
    } = req.body;

    const seller = await Seller.create({
      name,
      cpf,
      registration,
      phone,
      email,
      address,
      city,
      state,
      hireDate,
      photoUrl,
      notes,
      active,
    });

    return res.status(201).json(seller);
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao cadastrar vendedor.",
      error: error.message,
    });
  }
};

// Atualizar vendedor
const updateSeller = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      cpf,
      registration,
      phone,
      email,
      address,
      city,
      state,
      hireDate,
      photoUrl,
      notes,
      active,
    } = req.body;

    const seller = await Seller.findByIdAndUpdate(
      id,
      {
        name,
        cpf,
        registration,
        phone,
        email,
        address,
        city,
        state,
        hireDate,
        photoUrl,
        notes,
        active,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!seller) {
      return res.status(404).json({
        message: "Vendedor não encontrado.",
      });
    }

    return res.status(200).json({
      message: "Vendedor atualizado com sucesso.",
      seller,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar vendedor.",
      error: error.message,
    });
  }
};

// Excluir vendedor
const deleteSeller = async (req, res) => {
  try {
    const { id } = req.params;

    const seller = await Seller.findByIdAndDelete(id);

    if (!seller) {
      return res.status(404).json({
        message: "Vendedor não encontrado.",
      });
    }

    return res.status(200).json({
      message: "Vendedor removido com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao remover vendedor.",
      error: error.message,
    });
  }
};

module.exports = {
  getSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
};