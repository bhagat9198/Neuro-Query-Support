require('dotenv').config()
const path = require('path');
const http = require('http');
const https = require('https');

const express = require('express')
// const jwt = require('jsonwebtoken')
const cors = require('cors')
const mongoose = require('mongoose');
const log = require('simple-node-logger').createSimpleLogger('project.log');
// const cookieParser = require("cookie-parser");

const authRoutes = require('./routes/auth');
const commonRoutes = require('./routes/common');
const mentorsRoutes = require('./routes/mentor');
const config = require('./services/config').config;
const socketServer = require('./socket').server;


const app = express()
app.use(express.json())
app.use(cors())
// app.use(cookieParser());
app.use(express.static('assests'));
// app.use('/images', express.static('images'));

app.use('/auth', authRoutes);
app.use('/mentor', mentorsRoutes);
app.use(commonRoutes);
// app.use('/', authRoutes);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 7001;
let httpServer, httpsServer;

if (!config.ssl) {
  httpServer = http.Server(app);
  httpServer.listen(PORT, function () {
    console.log("Server started at " + PORT );
    socketServer.connect(httpServer)
  })
} else {
  httpsServer = https.Server(app);
  httpsServer.listen(PORT, function () {
    console.log("Server started at " + port );
    socketServer.connect(httpsServer)
  })
}


mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected at PORT :: ', PORT);
}).catch(error => {
  console.log(error);
  log.error('Error in connection.  ::', error.message);
})

