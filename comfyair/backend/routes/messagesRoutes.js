const express = require('express');
const { createMessage } = require('../controllers/messagesControllers');

const router = express.Router();

router.route('/').post(createMessage);

module.exports = router;
