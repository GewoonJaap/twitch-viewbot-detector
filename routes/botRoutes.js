const express = require('express');
const router = express.Router();
const viewBotController = require('../controllers/viewBotController');


router
    .route('/user/:user')
    .get(viewBotController.getViewBotStatus)

module.exports = router;