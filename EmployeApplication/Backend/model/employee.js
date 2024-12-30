const mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Salary: Number
})
//collection name(table) also pass schema
var emodel = mongoose.model('employee', schema);
module.exports = emodel;//to export in the index
