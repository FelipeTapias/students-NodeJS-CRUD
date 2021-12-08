const mongoose = require('mongoose');
const { Schema } = mongoose;

/*
    @name: this is  the name of schema
    @roll: this is a roll of schema
    @present: this is a present of schema
 */


// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String // variable type
    },
    roll: {
        type: String,
        required: [true, 'Roll field is required'] // Field is required
    },
    present: {
        type: Boolean,
        default: true // Value per default
    }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
