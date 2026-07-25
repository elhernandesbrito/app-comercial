const express = require('express');
const clientsRoutes = require('./clients');
const productsRoutes = require('./products');

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'API do Sistema Comercial funcionando'
  });
});

router.use('/clients', clientsRoutes);
router.use('/products', productsRoutes)

module.exports = router;