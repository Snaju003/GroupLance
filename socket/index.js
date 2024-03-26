// import { Server } from 'socket.io';
// const io = new Server(9000, {
//     cors: {
//         origin: "http://localhost:9000"
//     }
// });

// io.on('connection', socket => {
//     console.log(`User Connected: ${socket.id}`);
// });

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});


let rooms = {};

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    // socket.on("send:message", (data) => {
    //     const user = getUser(data)
    // });
    socket.on('join', (room, username) => {
        socket.join(room);
        if (!rooms[room]) {
            rooms[room] = [];
        }
        rooms[room].push({ id: socket.id, username });
        io.to(room).emit('get:message', `${username} has joined the chat`);
        io.to(room).emit('room:users', rooms[room].map(user => user.username));
        // groups[socket.id] = username;
        // io.emit('get:message', `${username} has joined the chat`);
    });

    socket.on('send:message', (roomId, id, msg) => {
        const room = rooms[roomId];
        if (!room) {
            console.error(`Room ${roomId} not found`);
            return;
        }

        const user = room.find(user => user.id === id);
        if (!user) {
            console.error(`User with id ${id} not found in room ${roomId}`);
            return;
        }
        console.log('Message:', msg);
        io.to(roomId).emit('get:message', `${user.username}: ${msg}`);
    });

    socket.on('disconnect', () => {
        for (const room in rooms) {
            const index = rooms[room].findIndex(user => user.id === socket.id);
            if (index !== -1) {
                const username = rooms[room][index].username;
                rooms[room].splice(index, 1);
                io.to(room).emit('get:message', `${username} has left the chat`);
                io.to(room).emit('room:users', rooms[room].map(user => user.username));
            }
        }
        // io.emit('get:message', `${users[socket.id]} has left the chat`);
        // delete users[socket.id];
    });
});

server.listen(9000, () => {
    console.log(`Socket server is running at port 9000`);
})
