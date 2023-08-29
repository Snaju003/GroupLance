const connectdb = require('./database/db');
const express = require("express");
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

//Available Routes
connectdb();
//     .then((success) => { app.use('/api/auth', require('./routes/Auth')); app.use('/api/auth', require("./routes/Notes")) })
//     .catch((err) => console.log(err));

app.use('/api/auth', require('./routes/Auth'));


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})
