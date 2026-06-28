const express = require('express');
const { bookAppointment, getAppointments } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.post('/', bookAppointment);
router.get('/', getAppointments);

module.exports = router;
