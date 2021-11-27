const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema
({
    firstname:
    {
        type:String,
        required:true,
    },
    lastname:
    {
        type:String,
        // required:true,
    },
    address:
    {
        type:String,
        required:true,
    },
   mobile:
   {
        type:Number,
        required:true,
        // unique:true,
    },
    email:
    {
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required:true
    }
})


const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;