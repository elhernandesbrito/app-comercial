const express = require('express');

const router = express.Router();

const {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} = require('../controllers/sellersController');

router.get('/', getAllSellers);

router.get('/:id', getSellerById);

router.post('/', createSeller);

router.patch('/:id', updateSeller);

router.delete('/:id', deleteSeller);

module.exports = router;