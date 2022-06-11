const express = require('express');

const routes = express.Router();

routes.post('/signup', authController.postSignup);


module.exports = routes;