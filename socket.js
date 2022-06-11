const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const server = {};
let io;

server.connect = async (httpServer) => {
  try {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT"],
        credentials: true
      }
    })
    initSocket();
  } catch(error) {
    console.log('server connect :: error :: ', error);

  }
}

const initSocket = () => {
  io.on('connection', socket => {
    console.log('socket :: connection :: socket :: ', socket);

  })
}
exports.server = server;