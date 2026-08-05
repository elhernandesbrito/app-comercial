const express = require('express');

const {
  getSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} = require('../controllers/sellersController');

const router = express.Router();

router.get('/', getSellers);

router.get('/:id', getSellerById);

router.post('/', createSeller);

router.patch('/:id', updateSeller);

router.delete('/:id', deleteSeller);

module.exports = router;