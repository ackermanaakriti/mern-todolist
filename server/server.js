const express = require('express')
require("dotenv").config();
const connectDb = require('./config/db')
const todorouter = require('./router/router')
const cors = require('cors')

const app = express();
connectDb()
app.use(express.json({extended:false}));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/todo',todorouter)
app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT,(req,res)=>
{
    console.log(`${PORT} listening`)
})