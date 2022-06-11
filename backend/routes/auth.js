const express = require('express');
const authController = require('./../controllers/auth');

const routes = express.Router();

routes.post('/signup', authController.postSignup);


module.exports = routes;