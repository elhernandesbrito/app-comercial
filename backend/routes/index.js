const express = require("express");

const clientsRoutes = require("./clients");
const productsRoutes = require("./products");
const sellersRoutes = require("./sellers");
const routesRoutes = require("./routes");
const routeLoadsRoutes = require("./routeLoads");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "API do Sistema Comercial funcionando.",
  });
});

router.use("/clients", clientsRoutes);
router.use("/products", productsRoutes);
router.use("/sellers", sellersRoutes);
router.use("/routes", routesRoutes);
router.use("/route-loads", routeLoadsRoutes);

module.exports = router;