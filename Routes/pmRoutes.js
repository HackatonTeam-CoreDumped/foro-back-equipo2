const router = require('express').Router();

const pmController = require('../Controllers/pmController');

// Send PM
router.post('/pm/send', pmController.sendPM);
// Get all PMs for a user
router.get('/pm', pmController.getUserPMs);

module.exports = router;