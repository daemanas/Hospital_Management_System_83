const express = require('express');
const { getProfile, updateProfile } = require('../controllers/patientController');
const { protect } = require('../middleware/authMiddleware');
const { patientOnly } = require('../middleware/patientMiddleware');

const router = express.Router();

router.use(protect, patientOnly);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;
