const Route = require("../models/Route");

// Listar todas as rotas
const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();

    return res.status(200).json(routes);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar rotas.",
      error: error.message,
    });
  }
};

// Buscar rota por ID
const getRouteById = async (req, res) => {
  try {
    const { id } = req.params;

    const route = await Route.findById(id);

    if (!route) {
      return res.status(404).json({
        message: "Rota não encontrada.",
      });
    }

    return res.status(200).json(route);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar rota.",
      error: error.message,
    });
  }
};

// Cadastrar rota
const createRoute = async (req, res) => {
  try {
    const {
      name,
      cities,
      region,
      description,
      active,
    } = req.body;

    const route = await Route.create({
      name,
      cities,
      region,
      description,
      active,
    });

    return res.status(201).json(route);
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao cadastrar rota.",
      error: error.message,
    });
  }
};

// Atualizar rota
const updateRoute = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      cities,
      region,
      description,
      active,
    } = req.body;

    const route = await Route.findByIdAndUpdate(
      id,
      {
        name,
        cities,
        region,
        description,
        active,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!route) {
      return res.status(404).json({
        message: "Rota não encontrada.",
      });
    }

    return res.status(200).json({
      message: "Rota atualizada com sucesso.",
      route,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar rota.",
      error: error.message,
    });
  }
};

// Remover rota
const deleteRoute = async (req, res) => {
  try {
    const { id } = req.params;

    const route = await Route.findByIdAndDelete(id);

    if (!route) {
      return res.status(404).json({
        message: "Rota não encontrada.",
      });
    }

    return res.status(200).json({
      message: "Rota removida com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao remover rota.",
      error: error.message,
    });
  }
};

module.exports = {
  getRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute,
};