const connectdb = require('./database/db');
const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();
const authRouter = require('./routes/auth');
const groupRouter = require('./routes/group');


const port = process.env.PORT;

app.use(cors());
app.use(express.json());

//Available Routes
connectdb();
//     .then((success) => { app.use('/api/auth', require('./routes/Auth')); app.use('/api/auth', require("./routes/Notes")) })
//     .catch((err) => console.log(err));

app.use('/api/auth', authRouter);
app.use('/api/group',groupRouter);


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})
