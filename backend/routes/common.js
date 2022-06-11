const express = require('express');

const routes = express.Router();

routes.post('/student/generate-ticket', )
routes.post('/student/update-ticket', )
routes.get('/student/get-mentors', )
routes.post('/student/search-queries', )

routes.post('/mentor/generate-ticket', )
routes.post('/mentor/update-ticket-status/:_id', )
routes.get('/mentor/get-mentors', )
routes.post('/mentor/search-queries', )

routes.get('/', (req, res, next) => {
  return res.send('Welcome to server backend');
})

module.exports = routes;