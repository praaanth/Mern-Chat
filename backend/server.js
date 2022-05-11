const express = require('express');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
const colors= require('colors');
const userRoutes=require('./routes/userRoutes');
// with whatever name we used in data.js same name is used here 
// otherwise it will not show the data


dotenv.config();
const {chats}= require('./data/data');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


  connectDB();
  
  // use express router

const app = express()
// app.use(express.json());
app.get('/',(req,res)=>{
    res.send(chats)

})
// // app.use('/api/user',userRoutes);    // use user routes
// // create middle wares for invalid routes and error handlers
// app.use(notFound);
// app.use(errorHandler);
app.get('/api/chat',(req,res)=>{  
    res.send(chats)
}
)





app.listen(8000,console.log("server started on port 5000".yellow.bold));
