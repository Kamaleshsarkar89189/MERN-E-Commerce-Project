const mongoose = require("mongoose")

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
            // { // Added after faceing problem to connect database
        //     // useNewUrlParser: true,  //no required 
        //     // useUnifiedTopology: true, // no required
        //     serverSelectionTimeoutMS: 3000,
        // })
    } catch (err) {
        console.log(err);
    }
}


module.exports = connectDB;