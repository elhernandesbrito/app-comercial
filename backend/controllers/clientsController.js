const Client = require("../models/Client");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar clientes.",
      error: error.message,
    });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client= await Client.findById(id);

    if (!client) {
      return res.status(404).json({
        message:'Cliente não encontrado',
      });
    }
    return res.status(200).json(client);
  }catch(error) {
    return res.status(500).json({
      message: 'Erro ao buscar cliente.',
      error: error.message,
    });
  }
};

const createClient = async (req, res) => {
  try {
    const { name, city, phone } = req.body;

    const newClient = await Client.create({
      name,
      city,
      phone,
    });

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao cadastrar cliente.",
      error: error.message,
    });
  }
};

const updateClient = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, city, phone } = req.body;

    const client = await Client.findByIdAndUpdate(
      id,
      {
        name,
        city,
        phone,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!client) {
      return res.status(404).json({
        message: 'Cliente não encontrado',
      });
    }

    return res.status(200).json({
      message: 'Cliente atualizado com sucesso',
      client,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao atualizar cliente.',
      error: error.message,
    });
  }

};

const deleteClient = async (req, res) => {
  try {
    const {id} = req.params;
    const client = await Client.findByIdAndDelete(id);

    if (!client) {
      return res.status(404).json({
        message: 'Cliente não encontrado',
      });
    }

    return res.status(200).json({
      message: 'Cliente removido com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao remover cliente.',
      error: error.message,
    });
  }
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};