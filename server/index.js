const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db')
const userRouter = require('./routes/userRoute')


require('dotenv').config()

app.use(cors())
app.use(express.json())

port = process.env.port || 4001 
app.use("/user",userRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})