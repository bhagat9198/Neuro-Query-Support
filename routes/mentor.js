const express = require('express');
const authController = require('./../controllers/auth');
const routes = express.Router();

routes.post('/signup', authController.postSignup);
routes.post('/signin', authController.postSignin);
routes.post('/password-reset', authController.postPasswordReset);
routes.post('/generate-token', authController.postgenearteToken);


module.exports = routes;