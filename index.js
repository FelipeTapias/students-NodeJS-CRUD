const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

// set up our express app
const app = express();

//Call method to connect mongoDB
connectDB();

app.use(express.static('public'));
app.use(express.json());

// initialize routes
app.use('/api', require('./router/api'));

// error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})

// listening for requests
app.listen(process.env.PORT, () => {
    console.log('Ready to Go!');
});










