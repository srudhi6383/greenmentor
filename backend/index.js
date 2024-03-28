const express = require('express');
const cors = require('cors');

const connection=require("./config/db")
const authrouter = require('./routes/user.route');
const auth = require('./middlewares/auth.middleware');
const taskrouter = require('./routes/task.route');

require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authrouter);
app.use('/task', auth, taskrouter);

const PORT = process.env.PORT ;

app.listen(PORT, async () => {
    try {
        await connection;

        console.log(`Server is running on port ${PORT}`);
        console.log("Connected to mongodb")
        
    } catch (error) {

        console.log("error connecting to db")
        console.log(error)

    }
});
