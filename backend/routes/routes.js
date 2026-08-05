const express = require('express');

const {
  getRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute,
} = require('../controllers/routesController');

const router = express.Router();

router.get('/', getRoutes);

router.get('/:id', getRouteById);

router.post('/', createRoute);

router.patch('/:id', updateRoute);

router.delete('/:id', deleteRoute);

module.exports = router;