const express = require('express'); 
const cors = require('cors') ;
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/routes')
const mongoose = require('mongoose'); 
const port = process.env.PORT || 3002 ;
mongoose.connect('mongodb+srv://todo:736157@todo-list.dqfiwth.mongodb.net/?retryWrites=true')
mongoose.connection.once('open' ,() => {
    console.log('connected to data base') ;
})
app.use(cors()) ;
app.use(bodyParser.json()) ;
app.use(router) ;
app.listen(port , () => {
    console.log('listening on port 3002')
})
