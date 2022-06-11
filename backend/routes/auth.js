const express = require('express');
const authController = require('./../controllers/auth');

const routes = express.Router();

routes.post('/signin', authController.userImg ,authController.postSignup);
routes.post('/signup', authController.postSignup);
routes.post('/password-reset', authController.postSignup);
routes.post('/get-user-details', authController.postSignup);


module.exports = routes;