const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);