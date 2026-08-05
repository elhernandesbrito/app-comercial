const RouteLoad = require("../models/RouteLoad");

// Listar todas as cargas da rota
const getRouteLoads = async (req, res) => {
  try {
    const routeLoads = await RouteLoad.find()
      .populate("seller")
      .populate("route")
      .populate("items.product");

    return res.status(200).json(routeLoads);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar cargas da rota.",
      error: error.message,
    });
  }
};

// Buscar carga da rota por ID
const getRouteLoadById = async (req, res) => {
  try {
    const { id } = req.params;

    const routeLoad = await RouteLoad.findById(id)
      .populate("seller")
      .populate("route")
      .populate("items.product");

    if (!routeLoad) {
      return res.status(404).json({
        message: "Carga da rota não encontrada.",
      });
    }

    return res.status(200).json(routeLoad);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar carga da rota.",
      error: error.message,
    });
  }
};

// Cadastrar carga da rota
const createRouteLoad = async (req, res) => {
  try {
    const {
      seller,
      route,
      departureDate,
      returnDate,
      status,
      items,
      observations,
    } = req.body;

    const routeLoad = await RouteLoad.create({
      seller,
      route,
      departureDate,
      returnDate,
      status,
      items,
      observations,
    });

    return res.status(201).json(routeLoad);
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao cadastrar carga da rota.",
      error: error.message,
    });
  }
};

// Atualizar carga da rota
const updateRouteLoad = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      seller,
      route,
      departureDate,
      returnDate,
      status,
      items,
      observations,
    } = req.body;

    const routeLoad = await RouteLoad.findByIdAndUpdate(
      id,
      {
        seller,
        route,
        departureDate,
        returnDate,
        status,
        items,
        observations,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!routeLoad) {
      return res.status(404).json({
        message: "Carga da rota não encontrada.",
      });
    }

    return res.status(200).json({
      message: "Carga da rota atualizada com sucesso.",
      routeLoad,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar carga da rota.",
      error: error.message,
    });
  }
};

// Excluir carga da rota
const deleteRouteLoad = async (req, res) => {
  try {
    const { id } = req.params;

    const routeLoad = await RouteLoad.findByIdAndDelete(id);

    if (!routeLoad) {
      return res.status(404).json({
        message: "Carga da rota não encontrada.",
      });
    }

    return res.status(200).json({
      message: "Carga da rota excluída com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao excluir carga da rota.",
      error: error.message,
    });
  }
};

module.exports = {
  getRouteLoads,
  getRouteLoadById,
  createRouteLoad,
  updateRouteLoad,
  deleteRouteLoad,
};