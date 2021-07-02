const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());
app.use(router);

io.on('connect', (socket) => {
    console.log("a new userhas connected")
    socket.on('join', ({ name, room }, callback) => {
    console.log(name, room)

    });
    

  
    socket.on('disconnect', () => {
      console.log("disconnected")
    })
});


const port = 2244
server.listen(port, () => console.log(`Server is Listening to port ${port}`))