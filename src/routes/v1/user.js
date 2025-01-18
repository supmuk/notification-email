const express = require('express')
const router = express.Router();

const { userController } = require('../../controllers/index')
router.get('/send-email', userController.userRegistration)

module.exports = router;