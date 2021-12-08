const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// connect to mongoDB
const connectDB = async() => {
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successful database connection');

    } catch(err) {
        console.log('Database connection failed');
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;