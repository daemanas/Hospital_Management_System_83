const express = require('express');
const { createPrescription, getPrescriptions } = require('../controllers/prescriptionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.post('/', createPrescription);
router.get('/', getPrescriptions);

module.exports = router;
