const router = require('express').Router();
//controller
const TransactionsController = require('../controllers/TransactionsController')
//meddlewares
const verifyToken = require('../helpers/verify-token');

router.post('/create', verifyToken, TransactionsController.create);
router.get('/', verifyToken, TransactionsController.getAllTransactions);
router.get('/:id', verifyToken, TransactionsController.getTransactionById);
router.delete('/:id', verifyToken, TransactionsController.removeTransactionById);
router.patch('/:id', verifyToken, TransactionsController.updateTransaction)

module.exports = router;