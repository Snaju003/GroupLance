const connectdb = require('./database/db');
const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();
const authRouter = require('./routes/auth');
const groupRouter = require('./routes/group');
const userRouter = require('./routes/user');


const port = process.env.PORT;

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

//Available Routes
connectdb();

app.use('/api/auth', authRouter);
app.use('/api/group', groupRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})
