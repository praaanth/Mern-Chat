const mongoose = require("mongoose")

const connectDB= async()=> {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
          
           
        });
        // we can also use conn=mongoose.connection;
        // to check whether the connection is created or not
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }


}

module.exports = connectDB;
