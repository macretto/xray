const express = require('express');     // "express": "^4.18.2"
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/', UserController.getUser);

module.exports = router;
