const cors = require("cors");
const express = require("express");
const config = require('./config').config;
const app = express();

const PORT = process.env.PORT || 9000;
const BASE_URL = config.url;

app.get('/', (req, res, next) => {
  return res.send('Welcome to socket server backend')
})

const server = app.listen(PORT, () => {
  console.log(`CONNECTED ON PORT ${PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log('connection :: socket :: ', socket.id);

  socket.on("join-room", (roomCode) => {
    socket.join(roomCode);
    for (let i = 0; i < quizRooms.length; i++) {
      if (quizRooms[i].roomId == roomCode) {
        socket.to(`${roomCode}`).emit('participant-added', quizRooms[i]);
        return

      }
    }
  }); 
})

