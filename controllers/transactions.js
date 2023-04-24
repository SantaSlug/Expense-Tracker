const Transaction = require('../models/Transaction');



// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    console.log(req.body.userId)
    const transactions = await Transaction.find({ userId: req.body.userId });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,

    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });

  }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json(
          {
            success: true,
            error: 'transaction found'
          }
        )
      }).catch((err) => {
        console.log(err)
        return res.status(404).json({
          success: false,
          error: 'No transaction found'
        });
      })

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
      id: req.params.id
    });
  }
}