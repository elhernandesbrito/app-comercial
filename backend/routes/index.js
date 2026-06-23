const express = require('express');
const clientsRoutes = require('./clients');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'API do Sistema Comercial funcionando'
  });
});

router.use('/clients', clientsRoutes);

module.exports = router;