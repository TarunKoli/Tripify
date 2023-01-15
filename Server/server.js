const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/test',(req,res)=>{
    res.send("server working :-)");
})


server.listen(PORT, ()=>{
    console.log(`Server Listening on : ${PORT}`);
})