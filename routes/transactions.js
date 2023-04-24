const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

router
  .route('/')
  .post(getTransactions)
 router.
 route("/add")
 .post(addTransaction)
router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;