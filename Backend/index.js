const connectdb = require('./database/db');
const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();
const authRouter = require('./routes/auth');
const groupRouter = require('./routes/group');
const userRouter = require('./routes/user');
const tweetRouter = require('./routes/tweet');
const conversationRouter = require('./routes/conversation');
const fileRouter = require('./controllers/file-upload');


const port = process.env.PORT;

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Available Routes
connectdb();

app.use('/api', fileRouter);
app.use('/api/auth', authRouter);
app.use('/api/group', groupRouter);
app.use('/api/user', userRouter);
app.use('/api/tweet', tweetRouter);
app.use('/api/conversation', conversationRouter);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})
