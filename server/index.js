const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db')
const userRouter = require('./routes/userRoute')
const expenseRouter = require('./routes/expenseRoute')
const incomeRouter = require('./routes/incomeRoute')


require('dotenv').config()

app.use(cors())
app.use(express.json())

port = process.env.port || 4001 
app.use("/user",userRouter)
app.use("/expense",expenseRouter)
app.use("/income",incomeRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})