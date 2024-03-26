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
    socket.on('join', (room, user) => {
        socket.join(room);
        if (!rooms[room]) {
            rooms[room] = [];
        }
        rooms[room].push({ id: socket.id, user });
        io.to(room).emit('get:message', `${user.name} has joined the chat`);
        io.to(room).emit('room:users', rooms[room].map(user => user.user.name));
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
        console.log(user.user.name, msg);
        io.to(roomId).emit('get:message', { user: user.user, msg });
    });

    socket.on('disconnect', () => {
        for (const room in rooms) {
            const index = rooms[room].findIndex(user => user.id === socket.id);
            if (index !== -1) {
                const user = rooms[room][index].user;
                rooms[room].splice(index, 1);
                io.to(room).emit('get:message', `${user.name} has left the chat`);
                io.to(room).emit('room:users', rooms[room].map(user => user.user.name));
            }
        }
    });
});

server.listen(9000, () => {
    console.log(`Socket server is running at port 9000`);
})
