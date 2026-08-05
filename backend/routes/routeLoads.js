const express = require("express");

const {
  getRouteLoads,
  getRouteLoadById,
  createRouteLoad,
  updateRouteLoad,
  deleteRouteLoad,
} = require("../controllers/routeLoadsController");

const router = express.Router();

// Listar todas as cargas da rota
router.get("/", getRouteLoads);

// Buscar uma carga da rota pelo ID
router.get("/:id", getRouteLoadById);

// Cadastrar uma nova carga da rota
router.post("/", createRouteLoad);

// Atualizar uma carga da rota
router.patch("/:id", updateRouteLoad);

// Excluir uma carga da rota
router.delete("/:id", deleteRouteLoad);

module.exports = router;