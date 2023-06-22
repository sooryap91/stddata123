const mongoose = require('mongoose');
const Schema = mongoose.Schema
const StudentSchema = new Schema({
   
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true

    },
    place:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        default:Date.now()
    }
})
let StudentDATA = mongoose.model('student',StudentSchema)
module.exports = StudentDATA;